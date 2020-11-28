---
title: Network
---


## Inter-domain Routing
* 2 types of routing algos
  
Comparison | Link State algo | Distance Vector algo
-|-|-
**Router knowledge** | All know full network topology & link cost info | Only know connected neighbors & link costs (to all nodes)
**Algo type** | Global / Centralized e.g. Djikstra | Decentralized, iteratively by exchanging info with neighbours. Only determines next hop
**Algo impl** | Open Shortest Path First (OSPF) | Routing Info Prtcl (RIP)

**Link State Routing Limitations**
* High bandwidth: 
  * Topology info is flooded (to other routers)
* Sensitive info released by nodes
* High processing overhead: Everything computed locally by node
* Unit representing distance is not the same for all nodes

**Distance Vector**
* Send distance metric per destination 
* **Adv**
  * Hide details of topology
  * Only next hop determined per node
* **Disadv**
  * Inconsistent units representing distance
  * Slow convergence due to counting-to-infinity
    *  Counting to infinity: (14:00) A - B - C, if link BC is cut, B will still think A can reach C and increment path cost, A will still think B can reach and increment path cost etc

**Path Vector** = Extension of distance vector
  * Send entire path for each destination d 
  * **Adv**:
    * Avoid count-to-infinity problem
    * Detect and Avoid loops
  * In terms of ASes, average of only 3 hops needed (flattening of the internet as they seek to shorten the path for customers)

## Border Gateway Protocol (BGP)
* Inter-domain routing protocol (Slide 13)
  * Allows subnet to advertise to rest of Internet
  * Allows ASes to determine “good” routes to other networks
* **Main goals:**
  * 1) Fulfil agreements with other ISPs
    * Define who provide transit for what (based on **relationship**)
      * **Customer-Provider Relationship**
        * AS defined as **Provider**: Provide transit service to customer
        * AS defined as **Customer**: Pay provider for internet routing
          * Types:
            * "**multi-homing**" if customers has multiple providers. **dual-homed** if has 2.
            * **Nontransit AS**: Provider never flows traffic through customer.
              * **May not need BGP**: If no need to route traffic, can just use provider's static IP, no need IDR (Slide 36)
            * **Selective Transit**: Allows some AS to flow traffic through, others deny. 
              * Unless defined, customers never route traffic through themselves
      * **AS Peer to peer Relationship**
        * AS defined as **Peering**
        * 2 (big) ASes agree to transit between their customers
          * Only between the 2 ASes; relationship is not transitive
        * Usually don't pay each other
        * Usually confidential
        * **Traffic Exchange Ratio** should be roughly balanced
        * **Pros**:
          * Reduce costs
          * Improve end-to-end performance
          * May be the only way
        * **Cons**:
          * No profit
          * Peers are competition
          * Peering requires periodic renegotiation
      * **Sibling to Sibling Relationship**
        * AS-AS belong to same company
        * Share everything
  * 2) Minimize costs
  * 3) Ensure good performance for customers
* **Tiers**:
  * **Tier 1 AS / ISP**: Top of the customer-provider hierarchy
    * only have peers (no upstream)
    * Don't have to pay anyone
    * P2P with other T1s to form a full-mesh
      * Around 10-12 ASes (AT&T etc)
    * Lower layer: **National / regional scope**
    * Stub ASes: **Customers**
    * List at CAIDA AS RANK
* **BGP Implementation**: 2 BGP routers (between ASes) exchange messages
  * Depends on policy of AS (Slide 57)
    * **Import policy**: Don't record prefixes that you don't want your AS to help route
      * Rank customer routes over peer routes
    * **Export policy**: Don't advert routes you don't want neighbour ASes to use
      * Providers advertises with everyone it services
      * e.g. if AS is Customer in Customer-Provider relationship:
        * Customer don't want route traffic through itself
          * Won't announce route to its peers
      * e.g. P2P:
        * Don't want peers to route stuff through them to another peer:
          * AS exports only customer routes to a peer
          * AS exports a peer's routes only to its customers
    * **Manipulate route preferences**: Artificially make routes look longer / shorter to make external ASes prefer certain routes
      
  * Application layer, TCP port 179
  * Advertise paths to different destination network prefixes
  * **Procedure**: Slide 14
  * 1) BGP routers (2 AS, 1 in each AS) start session on TCP port 179, by sending **OPEN** BGP msgs and ACK by **KEEPALIVE**.
    * 1.1) BGP Router also learns of prefix-port mappings from BGP route adverts from iBGPs
  * 2) Exchange all active routes in their routing tables by sending **UPDATE** BGP msgs
  * 3) Exchange incremental updates using **UPDATE**, and correct errors using **NOTIFICATION**.
    * **UPDATE message format**: Slide 19
      * Marker (16b), Length (2b), Type (1b), Withdrawn Routes Length (2b), Withdrawn Routes  (variable), Path Attribute Length (2b), **Path Attributes**  (variable), **Network Layer Reachability Information (NLRI)**  (variable)
      * Can withdraw many routes in 1 message
      * **NLRI**: Reachable IP prefixes (IP subnet mask) using route defined by **Path Attribute**
        * e.g. Prefix: 138.16.64/22
      * **A route consists of NLRI (prefixes) + path (defined by path attr)**
      * Thus, can only advertise 1 route per message
      * Defining Path Attributes: Slide 21
        * **well-known mandatory**: must be included if defining new route, and must be forwarded (S23)
          * **ORIGIN**: Origin of prefix
          * **AS-PATH**: Sequence of ASes in route (e.g. AS 79, AS 11)
          * **NEXT-HOP**: IP Addr of BGP router in next-hop AS
        * **well-known discretionary**
        * **optional transitive**
        * **optional non-transitive**: only to adjacent AS
    * **No timeout on routes**: Invalid routes are removed with **UPDATE** message
  * 3.1) **If multiple routes to same prefix**: Tie-break BGP routes by:
    * 1) Shortest AS-PATH
    * 2) **Hot Potato Routing**: Get it out of AS ASAP (S30)
      * Use OSPF to choose closest NEXT-HOP AS router
  * 3.2) Update RIB (Slide 56) and forwarding table (Slide 31) using inbound UPDATEs
    * Build a database: Routing Information Base (RIBs)
      * Adj-RIBs-In: unprocessed inbound UPDATEs
        * Between Adj-RIB-In and Loc-RIB: Route selection. Tie break by (Slide 65):
          * 1) Largest LOCAL_PREF: 4-byte unit (default 100) for BGP to indicate route preference. *This is not forwarded.*
          * 2) Smallest AS_PATH
          * 3) Smallest ORIGIN number
          * 4) Smallest MULTI_EXIT_DISC (optional non-transitive). In use if peer AS has many BGP entry-points.
          * 5) Routes from eBGP are preferred over iBGP
          * 6) Smallest interior cost based on NEXT_HOP
          * 7) COMMUNITY: for influencing neighbor's neighbors, used to group destinations
      * Loc-RIB: selected best routes.
      * Adj-RIBs-Out: selected routes for advertisement to peers 
        * propagate inbound UPDATE as outbound UPDATE to peers
    * Maintain forwarding table of prefix-port entries (e.g. 138.16.64/22, port 4)
  * 4) Repeat 3 forever. Close connection with **NOTIFICATION** BGP msg.
    * **Connection down:** Invalidate all routes through disconnected peer
* **BGP/IGP model used by ISPs** (Slide 15)
* **Types of BGP: eBGP and iBGP**
  * **exterior BGP peering (eBGP): Between ASes** Slide 16 
    * exchange reachability info between ASes
    * Directly connected
    * ASes advertise their network prefix
    * No expiration timer for routes
    * All routes through peer become invalid if it goes down
  * **interior BGP peering (iBGP): Within AS**: Slide 17
    * Propagate reachability info to other border routers within AS
    * Don't have to be directly connected
    * MUST be (logically) fully meshed
      * Each iBGP router pass on prefixes they learn from the other AS
      * Does not pass on prefixes learnt from other iBGP speakers
        * Info not repeated, reduce overhead, scalable
  * **Interior Gateway Protocol (IGP)**: The normal network routing
### BGP Prefix Hijacking (S69)
* 2 ASes share the same prefix
* Some traffic lost to fake prefix holder:
  * **Blackhole**: data traffic discarded
  * **Spoofing / Impersonation**: Data traffic inspected and redirected

### BGP Subprefix Hijacking (S70)
* Exploit of **Longer prefix matching**
* 1 AS with shorter (more general) prefix hijacked by longer (more specific) prefix
  * e.g. 12.34.0.0/16 hijacked by 12.3.158.0/24
    * All traffic routed to 12.3.158.0/24
  * Can visualize with BGPlay
  * Can prevent with anomaly detection, checking prefix ownership

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
* **Client/server = asymmetric**
  * Extension: iteratively/recursively delegate other servers to do task 
    * e.g. like DNS, a tree structure
* **Pure P2P**
  * No central entity
  * All entities directly communicate
  * No structure; flat architecture
  * Unreliable; how to stay connected or lookup?
* **Napster: Central index server**
    * People register with this server
    * Central server knows all peers and files in network
    * Search peers by keyword
      * Delegation; delegate downloading to P2P
    * **Pros**
      * Single server: consistent view of network
      * Fast and efficient searching
      * Guarantee correct search results
    * **Cons**
      * Single point of failure
      * Large computation to handle queires
      * Downloading from a single peer only
      * Unreliable content
      * Vulnerable to attacks
      * Copyright issues
* **Gnutella: Peers are switches, flood queries**
  * Only peers
    * People register by connecting to another active peer
      * Switch topology
        * Queries are flooded in the network
        * Once joined, they learn about others and learn topology
      * Download directly from peer
  * **Pros**
    * Fully distributed
    * Open protocol
    * Robust against node failures
    * Robust to DOS
  * **Cons**
    * Inefficient queries flooding
    * Poor network management: Nodes need to keep probing 
* **KaZaA: Peers only, but some peers delegated as local server**
  * 2 types of nodes
    * **Ordinary Node (ON)**: peer
    * **Supernode (SN)**: peer with more resources & responsibilities
      * Promoted from ON if it has enough resources (bandwidth & uptime)
      * Promotion is consensual with user
      * Avg lifetime of 2.5 hours
      * Don't cache info from disconnected ON
  * **SN - ON : One - Many relationship**
    * ON only connected to one SN (and nothing else) which acts as their gateway
  * SN acts as local server for all connected ON
  * SN do not form a complete mesh
* **Skype: Similar to KaZaA with priorietary stuff**
  * Similar infrastructure to KaZaA
  * P2P with proprietary application-layer encryption
  * ON and SN infrastrcuture; distributed SNs help map usernames to IP addresses
  * Problem of NAT
    * NAT prevents peers outside of network to directly connect
    * SNs are used to keep track of relay nodes
    * Relay nodes used to handle NATs
* **BitTorrent: Seed split data into chunks, tracker help leechers download from each other** S23
  * A network (swarm) to distribute a file
    * 1 main server (seed) has the original copy broken into 256KB chunks
    * Seed starts tracker server
      * tracker keeps track of seeds and peers in the network (swarm)
    * Seed creates torrent-file (metadata on chunks with checksums) and hosts it on a webserver somewhere
    * Client obtains torrent-file
    * Client contacts tracker and connects to peers
    * Client downloads/exchange data with peers
      * **Download rarest chunk first from neighbors**
      * **Uploading chunks to neighbors**: Tit-for-tat
        * Send to top 4 neighbors currently sending her chunks at the highest rate, re-eval/10s
        * Send to random peer every 30s to optimistically unchoke top 4
  * **Pro**
    * Can send ".torrent" link which always refer to same file
  * **Con**
    * Hard to identify and find particular files

## P2P lookup services
  * **Searching VS Addressing**
  * How network is constructed
    * **Unstructured**: cannot use addressing
      * But peers can join anyone and objects can be stored anywhere
    * **Structured**
      * Structured to define object locations
      * Allow deterministic routing & addressing
      * e.g. Key-value pairs, hashtables
      * Massive index: Create a **distributed hash table**
        * Every node handles multiple buckets (change as nodes join and leave)
        * Nodes communicate with each other to maintain table
  * How objectives are placed
  * How efficient objects can be found
  * **Addressing**
    * Uniquely ID objects and maintain indexing structure
  * Searching
    * Need to make objects searchable
* **Distributed Hashtable**
  * **Chord** S38
    * You have nodes and you have objects, SHA-1 Hash both of them
        * **Node ID: Hash Node's IP addr**
        * **Obj ID:  Hash Object's name**
    * Store Node IDs in circular linked list S39
      * Each node in array keeps track of predecessor and successor in circular array (clockwise)
      * **To store an object**: Hash the object to get its object ID, then step clock-wise from ID until you find a node (i.e. **immediate successor**). That node stores the object
      * Circular linked list: O(n) time to for a node to access an object in another node
        * **Finger table**: every node has shortcut links to non-neighbor nodes S43
          * At most m shortcuts
          * **Interval**: ith finger at least $2^{i-1}$ apart 
            * 1st:1, 2nd:2, 3rd:4, 4th:8...
            * Defined as [start, end)
            * Exponential until it loops back O(log(n))
          * **Start**: starting node of the interval (assuming all node IDs are occupied)
          * **Node**: The actual node used. If there is no node with that node ID, finger points to its immediate successor; however, the interval definition is not affected; this variable tracks that
            * i.e. if [4,6) but shifted to 5, it's still defined as [4,6) and next interval is still 4 spaces
          * **When a node leaves**: S50
            * All nodes periodically ping successors and keep track of 2nd successor
            * Predecessor will detect leave event and change its immediate sucessor
          * **Efficiency**
            * Search: O(log(n))
            * Responsibility N nodes and K objects: O(K/N) objects per node
            * Node joining / leaving: O(logN x logN) messages to:
              * re-establish routing and finger tables
              * initialize finger tables for new node
  * **CAN** S54
    * Think of Chord as a 1 dimensional donut (torus)
      * 1 dimensional donut: predecessor and successor
    * CAN: d-dimensional donut (torus)
    * Doesn't use finger tables, can just use neighbors (since it's d-dimensional)
      * the stuff in the slides is 2D; neighbors can go up down left right.
        * When a new node joins:
          * Cut area of responsibility by cutting vertically before cutting horizontally
        * Object IDs are coordinates
      * Slide 64: state refers to information maintained per node
      * Avg path length: since we know predecessor and successor, we can cut the circular path in half and take the shorter path

## CDN
* Traffic has to go through internet (middle-mile) which can be congested
  * Distance between user and server negatively affects latency, throughput
  * Solutions: connect to a machine closer to client
    * Big data center CDNs
    * Highly distributed CDNs
    * P2P

<details><summary>Template</summary><p>
</p></details>