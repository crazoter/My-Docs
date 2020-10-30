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
      * Peer to peer
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

<details><summary>Template</summary><p>
</p></details>