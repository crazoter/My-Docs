---
title: CS4226 Cheatsheet
---

## Performance Metrics
* **Bandwidth / Link Rate / Capacity**
  * Maximum Theoretical amount
* **Throughput**
  * Maximum Feasible amount
    * Carries additional End-to-end delays
      * **transmission**: (packet size) / (link rate)
      * **propagation**: travel time in link
      * **processing**
      * **queueing**
        * **Little's Law**: $L = \lambda W$
          * E[# of customers] = Rate x E[time in system]
          * L = E[# of customers] (LENGTH)
          * $\lambda$: Arrival RATE 
          * W: E[time in system] (WAITING / sojourn TIME)
        * Model difference between arrival times ($T$) as continuous independent RV (**exponentially distributed**)
          * $P(T > t) = e^{-\lambda t}$
          * $P(T \leq t) = 1-e^{-\lambda t}$
          * **Mean difference**: $\frac{1}{\lambda}$
          * **Memoryless**: $P\{T>s+t|T>s\} = P\{T>t\}$ (W2 Slide 7)
            * Given s time has elapsed, $P(T>t)$ is the same as $P(T>t+s)$
            * Proof: Tut2 Q2
            * Time elapsed doesn't affect probability
          * **Merging**: Expected waiting time of multiple flows
            * $E[\min(T_1, T_2)]$
            * $P(\min(T_1, T_2) > t) = P(T_1 > t \wedge T_2 > t) = e^{-\lambda_{1} t} e^{-\lambda_{2} t} = e^{-(\lambda_{1} + \lambda_{2}) t}$
            * * **Mean**: $\frac{1}{\lambda_1 + \lambda_2}$
          * **Comparison**: Probability that exponential RV X > exponential RV Y (i.e. P(X > Y)):
            * $\frac{\lambda_y}{\lambda_x+\lambda_y}$
          * **Poisson Distribution**: Number of times event occurs in an interval of time $\operatorname{Pr}(X=k)=\frac{\lambda^{k} e^{-\lambda}}{k !}$
            * $\lambda$: rate (of arrival)
            * k: number of occurences
        * **M/M/1**: 
          * Arrival Rate $\lambda = \mu - \frac{1}{E[W]}$
          * Server Processing Rate $\mu = \lambda + \frac{1}{E[W]}$
          * Utilization $\rho = \frac{\lambda}{\mu}$
            * % of time stable state server is busy (1 item in svr)
            * Probability that server is busy (1 item in svr)
            * Derivation of $E[L] = \lambda E[W_s]$, where $E[W_s] = \frac{1}{\mu}$
          * Exact number of customers $\pi_i = P(L=i) = \rho^i(1-\rho)$
            * % of time that there is i things in queue + server
            * Probability that there is i things in queue + server
          * E[# things in queue + server]: $E[L]=\frac{\rho}{1-\rho}$
          * E[# things in queue]: $E[Q]=E[L] - \rho = \frac{\rho^2}{1-\rho}$
          * E[time in queue + server]: $E[W]=\frac{1}{\mu-\lambda}$
          * E[time in server]: $E[W_s] = \frac{1}{\mu}$
          * E[time in queue]: $E[D]=E[W] - \frac{1}{\mu}$
          * Server stability requirement: $\lambda < \mu$
          * Burke's Theorem: Outgoing $\lambda$ = Incoming $\lambda$
          * Jackson Network
            * 1) Define each arrival rate in terms of each other
            * 2) Solve all rates, starting with the rate that relies on constants first
            * 3) Calculate what you need to calculate

## Resource Management
* **Max-Min Fairness**: Maximize smallest flow
* **Resource R is Bottleneck** iff both: 
  * resource R is at 100% usage
  * more resource R cannot be allocated to the largest flow at R without hurting total flow for others (usually the case if there are multiple flows)
    * Note: doesn't matter if largest flow is already maxed out; assume largest flow can increase further
* **Water filling algo**: Calculating theoretical max-min fairness for all resources
  * Given a resource and multiple flows for that resource:
  * Allocation to flow = capacity x $flow_{weight} / \sum_\forall flow_{weight}$
  * Blockages do not "carry over"; recalculate each resource with the initial flow amount.
* **Generalized Process Sharing (GPS)**: Calc max-min fairness for 1 router
  * Router can process many packets at the same time
  * Same as water filling algo but on a time basis. At any time unit:
    * 1 packet: 100% resources to process packet
    * M packets: Weighted allocation to all M packets (larger weight = more compute priority)
  * **Backlogged Flow**: Has data in queue
    * GPS formalized (W3 Slide 18): Data processed is proportional to weight
  * **Weight Definition** $\emptyset_1:\emptyset_2 = a:b$: Larger weight = more compute priority
* **Weighted Fair Queueing (WFQ)**: Calc max-min fairness for 1 router (more realistic) (W3 Slide 23)
  * Router processes 1 packet at a time
  * Work-Conserving: Don't plan for future arrivals
  * Concept: Ensure packets finish as close as possible to GPS
  * **Weight Definition** $a\emptyset_1=\emptyset_2 = b$: Larger weight = more compute priority
    * Equate $\emptyset_2 = b$, $\emptyset_1=\frac{a}{b}$
  * **Virtual Time**: # of time units completed so far if the system is running GPS
    * Global variable, 1 V(t) variable for all flows
    * Reset to 0 when all flows are empty
    * **Calculate Virtual Finishing/Departure Time** $F_{pkt}$: 
      * Actual Arrival/Current time $t_{pkt}$
      * Virtual Arrival/Current time $V(t_{pkt})$
      * Processing time $S_{pkt}$
      * Virtual Finishing time:
        * if $F_{pkt} \leq V(t_{pkt}): F_{pkt} = V(t_{pkt}) + S_{pkt}$
          * Intuition: Packet is overdue, process it soon
        * else: $F_{pkt} = F_{prev} + S_{pkt}$
          * Intuition: Packet is not due yet
      * Actual Finishing time: Just order the packets
    * See W3 Slide 38
    * init) $V(t) = 0, \forall flows: F_{prev} = 0$
    * 1) Track packets in flows and get all **Active Flows** (flows with active packets)
    * 2) **Slope** = 1 / (sum all active flow weights)
      * Treat Slope as V(t) to t conversion rate
      * A real second elapses for every Slope virtual time
    * 3) If event is arrival:
      * **Virtual processing time** = [(packet size) / (full processing rate)] / (flow weight)
      * 4) $F_i$ = $\max(F_{prev}, V(t_{arr}))$ + (Virtual processing time)
    * 5) Use Slope to increment V(t) to next arrival / departure time, then repeat step (1)

## SDN: Software Defined Networking
* Networking **paradigm**
  * Without SDN (W4 Slide 5)
    * High Hardware & Software Coupling (Vendor-specific, proprietary)
    * Slow protocol standardization
    * Hard to innovate
    * Network admin is expensive and hard to debug
  * Goal: Abstract functionalities of router
    * +ve: Control plane can change independent of hardware
      * Competitive technology development
    * +ve: Control plane is now high-level, logically centralized
      * Easier network management
  * Router tasks:
    * **Data Plane**: "Switch fabric"; Processing and delivery of packets based on router's rules and endpoints
    * **Control Plane**: "Routing processor"; Determines how and where packets are forwarded
  * **Infrastructure** (W4 Slide 27)
    * **Network Application**: (Control Plane)
      * Uses Northbound Interface API specified by
    * **Network Abstractions** (Control Plane)
      * Gets Global network view from
    * **SDN Controllers** (Control Plane)
      * Uses Southbound Interface API specified by
    * **Real Switches** (Data Plane)
  * **Abstraction Layers**:
    * 1) **Specification**: Allow net app to express network behavior without having to implement it
    * 2) **Distribution**: SDN apps make decisions from a logically centralized POV of the network
    * 3) **Forwarding**: Implement any forwarding behavior, hiding hardware
  * **OpenFlow Protocol:** 
    * Packet flow through OpenFlow Switch: 34-36. High level: 31
    * Flow Table: Slide 36