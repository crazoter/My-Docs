---
title: Network
---


<details><summary>Inter-domain Routing</summary><p>
* Wk9-05-BGP
* 2 types of routing algos

Comparison | Link State algo | Distance Vector algo
-|-|-
Router knowledge | All know full network topology & link cost info | Only know connected neighbors & link costs
Algo type | Global / Centralized e.g. Djikstra | Decentralized, iteratively by exchanging info with neighbours
Algo impl | Open Shortest Path First (OSPF) | Routing Info Prtcl (RIP)

Limitations : Link State Routing
* High bandwidth: 
  * Topology info is flooded (to other routers)
* Sensitive info released by nodes
* High processing overhead: Everything computed locally by node
* Unit representing distance is not the same for all nodes

Distance Vector:
* Send distance metric per destination 
* Adv
  * Hide details of topology
  * Only next hop determined per node
* Disadv
  * Inconsistent units representing distance
  * Slow convergence due to counting-to-infinity
    *  Counting to infinity: (14:00) A - B - C, if link BC is cut, B will still think A can reach C and increment path cost, A will still think B can reach and increment path cost etc

Path Vector
* Extension of distance vector
  * Send entire path for each destination d 
  * Adv:
    * Avoid count-to-infinity problem
    * Avoid loops
  * In terms of ASes, only 3 hops needed (flattening of the internet as they seek to shorten the path for customers)

Border Gateway Protocol (BGP)
* Main goals:
  * Fulfil agreements with other ISPs
    * Define who provide transit for what (based on relationship)
      * Customer-provider
        * Customer pays provider for internet routing
          * multi-homing: if multiple providers to same customer
        * Provider provides transit service to customer
        * Customers:
          * Nontransit AS: Provider never flows traffic through customer
            * May not even need BGP if they don't intend to help route traffic; just need to know provider's static IP
          * Selective Transit: Allows some AS to flow traffic through, others deny
      * Peer to peer (P2P)
        * 2 ASes agree to transit between their customers
        * Usually don't pay each other
        * Agreement only between the 2 ASes; relationship is not transitive
        * Usually confidential
        * Usually between 2 big ASes
        * Traffic Exchange Ratio should be roughly balanced
        * Pros:
          * Reduce costs
          * Improve end-to-end performance
          * May be the only way
        * Cons:
          * No profit
          * Peers are competition
          * Peering requires periodic renegotiation
      * Sibling to sibling
        * ASs belong to same company
        * Share everything
  * Minimize costs
  * Ensure good performance for customers
* Tiers:
  * Tier 1 AS / ISP
    * Top of the customer-provider hierarchy, only have peers (no upstream)
      * Don't have to pay anyone
    * P2P with each other to form a full-mesh
      * Around 10-12 ASes (AT&T etc)
    * Lower layer
      * National / regional scope
    * Stub ASes
      * usually customers
    * List at CAIDA AS RANK
* 2 BGP routers (between ASes) exchange messages
  * advertise paths to different destination network prefixes
* Application layer, TCP port 179
  * exchange all active routes in their routing tables
  * exchange incremental updates
* BGP/IGP model used by ISPs (S15)
  * eBGP: Between ASes: exchange reachability info
    * Border routers are directly connected by TCP (no IGP)
    * ASes advertise their network prefix
    * No expiration timer for routes
    * All routes through peer become invalid if it goes down
    * Message Info:
      * Types: OPEN (TCP to peer), UPDATE (advertise/withdraw new/old paths), KEEPALIVE (Keep TCP open), NOTIFICATION (correct errors or FIN) (S18-19)
      * Attributes
        * Well-Known mandatory:
          * AS-PATH: All ASes in the path (e.g. AS1 AS24)
          * NEXT-HOP: IP addr of the first router in the next very next AS "next-hop-AS"
      * Prefix (IP prefix (network mask e.g. 138.16.64/22) of the AS)
      * Route: Contains Prefix + attribute
    * BGP Routing & Updating the routing table (hot potato routing)
      1. Init: Router learns of prefix from BGP route adverts from iBGPs
      2. eBGP level: Use shortest AS-PATH
      3. iBGP level: Find shortest path using OSPF to NEXT-HOP based on chosen AS-PATH
      4. Updating the forwarding table: Identify port along OSPF shortest path, Add prefix-port entry to forwarding table (e.g. 138.16.64/22, port 4)
  * iBGP: BGP inside the AS: 
    * propagrate reachability info so that other border routers will know (and can exchange)
    * Don't have to be directly connected (can use IGP)
    * But they must be (logically) fully meshed
      * Each pass on prefixes they learn from outside AS
      * Do not pass on prefixes learnt from other iBGP speakers
        * Info not repeated, reduce overhead, scalable
  * Interior Gateway Protocol (IGP): The normal network routing
  
</p></details>

## BGP router / speaker
* BGP is policy-based
  * Import policy: Filter unwanted routes from neighbour
    * Rank customer routes over peer routes
    * manipulate attributes to influence path selection for neighbors
  * Export policy: Filter routes you don't want to tell your neighbor
    * Dual-homed: attached to 2 networks
    * e.g. don't want your neighbours to know and use the route
    * e.g. Customer-Provider relationship:
        * Customer wouldn't want to announce route to its peers (it don't want anything routing traffic through it)
        * Providers advertises with everyone
    * e.g. P2P:
      * Don't want peers to route stuff through them to another peer:
        * AS exports only customer routes to a peer
        * AS exports a peer's routes only to its customers
    
* A routing entry:
  * Route = prefix + attr + NLRI + (Path attr)
* What to do with all the inbound UPDATE messages?
* Build a db: Routing Information Base (RIBs)
    * RIBs = Adj-RIBs-In + Loc-RIB + Adj-RIBs-Out
    * Adj-RIBs-In: incoming routing info (inbound UPDATE)
    * Loc-RIB: selected local routes by router
    * Adj-RIBs-Out: selected for advertisement to peers
1. Apply **Import Policies** on Inbound UPDATE
2. Select best route from Adj-RIBs-In and pass to Loc-RIB
   * You can choose any policy but this is the recommended process:
   2. Highest degree of LOCAL_PREF (or the only route to the destination), then tie break:
      * LOCAL_PREF: 4-byte unit (default 100) for BGP to indicate route preference. *This is not forwarded.*. Larger better
      1. Smallest \# of ASs in the AS_PATH
      2. Lowest origin \# in ORIGIN
      3. Most preferred MULTI_EXIT_DISC (smaller better)
      4. Routes from eBGP are preferred over iBGP
      5. Lower interior cost based on NEXT_HOP
      6. COMMUNITY: for influencing neighbor's neighbors
3. Install best route as forwarding entries in IP Forwarding Table
4. Apply export policies to Adj-RIB-Out
   1. Propagate Inbound UPDATE as Outbound UPDATE to other BGP routers

### BGP Prefix Hijacking
* 2 shae the same prefix
* Blackhole: data traffic discarded
* Spoofing: Data traffic inspected and redirected
  * Impersonation

### BGP Subprefix Hijacking
* 12.3.158.0/24 and 12.34.0.0/16
  * Longer prefix matching will result in all traffic routed to 12.3.158.0/24
  * Can visualize with BGPlay
  * Can prevent with anomaly detection

### BGP in practice
* Preference (attr)
* Filtering (inbound/outbound filter)
* Tagging (COMMUNITY attr)
* Applications
  * relations
    * influence process
    * control route export
  * traffic engineering
    * inbound
    * outbound
    * remote control 

### Peer 2 Peer
* Client/server = assymetric
  * Extension: iteratively/recursively delegate other servers to do task 
    * e.g. like DNS, a tree structure
* Pure P2P
  * No central entity
  * All entities directly communicate
  * No structure; flat architecture
  * Unreliable; how to stay connected or lookup?
<details><summary>Template</summary><p>
</p></details>