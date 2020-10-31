---
title: AI Planning (Reinforcement Learning)
---

Last Update: 2020

## Bellman Equation

* Apply concept of dynamic programming and optimal substructure to do **policy evaluation**

#### R(s):
$V(s) = R(s) + γ \max_{a ∈ A(s)}( \sum_{s'} P(s'|s,a)V(s')$

* **Value of a state** = **its value** + (Exploration Factor) x **best value of next state**
  * How to get best value of next state?
    * By choosing best action: the action that maximizes expected next state value
      * Given (s, a), an action has the value of the sum of (value of next states) x (probability of reaching them).

|Var|Descript|
|-|-|
|s | Any possible state
|s' | Any possible next state from s
|a | Any possible action at s
|V(s) | Value of s
|R(s) | Reward of s (for staying on it)
|A(s) | All possible actions at state s
|γ | Exploration Factor
|P(s'\|s,a) | Probability of s' given (s, a)

### Bellman Equation Variants

#### R(s,a,s'):
$V(s) = \max_{a\in A} \sum_{s'\in S} T(s,a,s')[R(s,a,s') + \gamma V(s')]$

* Reward for transiting from s to s' via a
* Choose the action that has gives the highest (transition reward + discounted future value of that next state)

#### R(s,a):
$V(s) = \max_{a\in A}R(s,a) + \gamma \sum_{s'\in S} T(s,a,s')V(s')$

* Reward for taking action a at state s
* Choose the action that has gives the (highest reward + discounted value of all possible next states using said action)

### Converting between reward functions

#### R(s,a,s') -> R(s,a):
$R'(s,a) = \sum_{s'\in S}T(s,a,s')R(s,a,s')$

* The reward for taking an action is the sum of (all its possible transitions) x (related transition rewards)

#### R(s,a) -> R(s):
R'(post(s,a)) = \gamma^{-1/2}R(s,a)

* s' is abstracted out to "post(s,a)", which refers to the "post-state" for every (s,a). In this R:
```
// (s,a) always goes to post(s,a)
T'(s,a,post(s,a)) = 1
// The probability is factored in here
T'(post(s,a),b,s') = T(s,a,s')
// The states themselves don't have rewards
R'(s) = 0
// The reward for taking the action is put into the pseudo "post-state"
R'(post(s,a)) = gamma^(-1/2)R(s,a)
gamma' = gamma^(1/2)
```

## Value Iteration Algorithm

* Repeatedly update the Utility function U(s) with bellman update.

$U_{t+1}(s) = R(s) + \gamma \max_{a\in A(s)} \sum_{s'} P(s'|s,a)U_t(s')$
* U is only updated after every single state has been looped through.

```
// Returns Utility function U(s)
function Value-Iteration(mdp, err_threshold)
    loop:
        U_t = U_t+1, max_delta = 0
        for all states s in S:
            Update U_t+1 with bellman equation.
            Update max_delta if abs(U(s) - U_t+1(s)) exceed max_delta
        break loop if max_delta less than err_threshold(1-gamma)/gamma 
    return U_t
```

## Policy Evaluation Algorithm
* Same as Value Iteration.
  * But we want to **evaluate a given policy pi_i**. Thus, **we don't need to take the max, we just need to use the policy.**
  * Hence: Instead of taking the best action, take the action based on the policy

$U_i(s) = R(s) + \gamma \sum_{s'} P(s'|s,\pi_i(s))U_i(s')$
    
## Policy Iteration Algorithm

* We don't need to calculate U(s) so accurately if we just want to find the optimal policy
* Two step approach:
1. **Init**: Start with initial policy pi_0
1. **Policy Evaluation**: Calculate Utility function U_i given current policy. See Policy Evaluation above.
2. **Policy Improvement**: Calculate new policy pi_i+1 using U_i.
3. **Termination**: Repeat until the new and old policy are the same (no change).

```
// Returns policy pi
function Policy-Iteration(mdp)
    U = set all to 0
    pi = random policy
    loop
        unchanged = true
        U_i = Policy-Evaluation(pi, U, mdp)
        for all states s in S:
            If the best action at s is different from pi[s]:
                Update pi[s]
                unchanged = false
        break if unchanged
    return pi
    
```
The check for the best action is done as follows:

$\max_{a\in A(s)} \sum_{s'} P(s'|s,a)U_i(s') > \sum_{s'} P(s'|s,\pi_i(s))U_i(s')$

* Identify the action with highest utility at s
* Check if it is the same action taken in the policy

## Modified Policy Iteration
* Only do k iterations (i.e. up to a horizon) instead of until no change

## Types of tasks in RL
* Prediction: Given a policy, measure how well it performs.
* Control: Policy not fixed, find optimal policy.
* See this [StackExchange post](https://stats.stackexchange.com/questions/340462/what-is-predicted-and-controlled-in-reinforcement-learning)

## Model-Based Prediction
* Prediction: Given traces of a policy and the final reward, learn the utility function (based on policy) by constructing the model from the data using an agent:
  * Learn **transition model** and **reward function** using an **Adaptive Dynamic Programming** (ADP) agent.
  * **Calculate the Utility function.**

```

// persistent variables
s_prev
pi: policy
mdp: current constructed model, rewards and discount
U: table of utilities
Nsa: Table keeping count of number of times at state s, action a was taken
Nsas': Table keeping count of number of times the next state was s' given (s,a) (thus s,a,s')

// Called everytime a new percept is observed by the agent
// Percept: (previous state s, current state s', current reward r')
function PASSIVE-ADP-AGENT(percept)
    // Initialize U[s] and R[s] with its observed reward
    if s_curr is new:
        U[s_curr] = r_curr
        R[s_curr] = r_curr

    // If the state was arrived from a transition, update the transition function
    if s_prev not null:
        // Increment # of times event happened
        Nsa[s_prev,a]++
        Ns'sa[s_curr,s_prev,a]++
        
        // Update transition function for every known reachable state by (s,a)
        for every state where Ns'sa[state,s,a] > 0:
            // Update probability of transition
            T(s,a,s') = Ns'as[s,a,s'] / Nsa[s,a]

    // Update U based on new transition function
    U = Policy-Evaluation(pi, U, mdp)

    // If the policy is terminal, then don't recommend new actions
    if s_curr is terminal:  s_prev,a = null
    else:                   s_prev,a = s_curr, pi[s_curr]
    return a
```


## Model-Based Control
* Learn the policy, not the utility
* Just replace Policy-Evaluation with Policy-Iteration
* The policy no longer stays fixed but changes as transitions and rewards learnt
* Note that however the algorithm is greedy and may not return the optimal value
* Hence must do e-greedy exploration (choose a greedy action with 1-e probability and random action with e probability)
  * Greedy in the Limit of Infinite Exploration (GLIE), e = 1/t
  * Start with a high epsilon, then slowly reduce the number of random actions you take (by reducing the value of e) with every policy iteration as you become more and more certain you have an optimal algorithm

## Monte Carlo Learning


* Monte Carlo Learning (Direct Utility Estimation)
  * Given a series of states as a "trial" e.g. this is a trial: (1)-.04->(2)-.04->(2)-.04->(3)-.04->(4)-.04...->(5)+1
  * Keep a running reward average for every state; after infinite trials, sample average will converge to expected value
    * e.g. for the above trial, maybe state (1) has a sample total reward of 0.72
      * Calculate by taking sum of rewards from that state to the end)
    * If a state is visited multiple times in a trial e.g. state (2):
      * first-visit: take the sum of rewards from only on the first visit per trial 
      * every visit: take multiple sums for every time the state was visited in a trial.

Assume state s encountered k times with k returns, and each summed reward is stored in G_i(s). 

* Note that G_i(s), given infinitely many i iterations, will converge to the true value; hence G_i(s) - U_k-1(s) is the MC error, or prediction error

$U_k(s) = \frac{1}{k}\sum_{i=1}^{k}G_i(s)$

$= \frac{1}{k}G_k(s) + \frac{1}{k}\sum_{i=1}^{k-1}G_i(s)$

$= \frac{1}{k}G_k(s) + \frac{1}{k}*(k-1)U_{k-1}(s)$

$= \frac{k}{k}U_{k-1}(s) - \frac{1}{k}U_{k-1}(s) + \frac{1}{k}G_k(s)$

$U_k(s) = U_{k-1}(s) + \frac{1}{k}(G_k(s) - U_{k-1}(s))$

* The difference between the current U_k(s) and the previous U(s) is the prediction error (if you want to mnimize absolute loss, you can use median instead of average)
* Note that U(s) here can also apply to U(s,a), and can also be renamed as Q(s) and Q(s,a)

```
# Calculating "value sum": Sum the values from s to the end in the trial

# Monte Carlo Prediction (Learning U(s))
After every trial:
    Take every state (or first state occurence) and calculate its value sum 
    Increment Ns
    # Update U(s) after every trial
    U_k(s) = U_k-1(s) + 1/k(sum - U_k-1(s))
    
# Monte Carlo Control (Learning pi)
After every trial:
    Take every (s,a):
        newR(s,a) = take every/1st (s,a) and calculate its value sum
        Increment Ns
        # Update Q(s) after every trial
        Q(s,a) = Q_k-1(s,a) + 1/k(newR(s,a) - Q_k-1(s,a))
    For every s:
        pi(s) = Take action that maximizes Q(s,a)
```

Advantages
* Simple
* Unbiased estimate

Disadvantages
* Must wait until a full trial is done in order to perform learning
* High variance (reward is the sum of many rewards along the trial), so need many trials to get it right

## Temporal Difference Learning i.e. TD(0)
* Very similar to Monte Carlo Learning
* Replace the prediction error with the temporal difference error

$U^\pi(s) = U^\pi(s) + \alpha(R(s) + \gamma U^\pi(s') - U^\pi(s))$

* Transition from state s to s'.
* Alpha is the learning rate.
  * Converges if alpha decreases with the number of times the state has been visited (think GLIE)
* $R(s) + \gamma U^\pi(s')$: **Temporal Difference target**
  * Reward of current state + Expected utility from the new state s'
  * If there is no error, this should be equal to the current utility $U^\pi(s)$
  * this is basically bellman update, policy evaluation

* $R(s) + \gamma U^\pi(s') - U^\pi(s)$: **Temporal Difference error**
  * (amount of utility change from previous state s to current state s')
  * difference between the estimated reward at any given state or time step and the actual reward received
  * Reward of current state + discounted future reward(future state) - expectedRewardWithIncludesFutureRewards(s)

```
## Prediction
TD-Agent:
for every percept (curr_state s', immediate reward r')
if s' is new:
    U[s'] = r'
if s not null:
    Ns[s]++
    # Note that alpha is a function that takes in Ns[s]
    # It steadily decreases over # of iterations
    U[s] = U[s] + alpha(Ns[s])*(r+gamma*U[s']-U[s])
if s' terminal:
    s,a,r = null
#else: # update prev data
    s,a,r = s',pi[s'],r'
return a
```

Advantages

* Can learn with every step (in a trial)
* Usually converges faster in practice


Disadvantages
* Online; lower variance, but estimate on how good your estimate is; biased
* Assumes MDP
* Error can go in any direction

### SARSA
SARSA uses TD learning w.r.t. a specific policy:

$U^\pi(s,a) = U^\pi(s,a) + \alpha(R(s,a) + \gamma U^\pi(s',\pi((s')) - U\pi(s,a))$

### Q-Learning
Q-Learning uses TD learning w.r.t. the optimal policy (s' is the next state after (s,a) is taken):

$Q(s,a) = Q(s,a) + \alpha(R(s,a) + \gamma \max_{a\in A(s')} Q(s',a) - Q(s,a))$

## n-step TD
Alister Reis has written a very good [blog post](https://amreis.github.io/ml/reinf-learn/2017/11/02/reinforcement-learning-eligibility-traces.html) on this

* n-step: n is the # of steps you use in your temporal difference.
    * 1-step (or $G_t^{(1)}$): 
      * $R(s) + \gamma U^\pi(s')$: **Temporal Difference target**
      * $R(s) + \gamma U^\pi(s') - U^\pi(s)$: **Temporal Difference error**
    * 2-step (or $G_t^{(2)}$): 
      * $R(s) + \gamma R(s') + \gamma^2 U^\pi(s'')$: **Temporal Difference target**
      * $R(s) + \gamma R(s') + \gamma^2 U^\pi(s'') - U^\pi(s)$: **Temporal Difference error**
      * s: the state you stepped into, R(s) is the reward for that state, s' and s'' are s_t+1 and s_t+2 respectively in that trial
      * The reason why gamma stacks is because it is multiplicatively stacked with every iteration (think of it as "unpacking" U(s))
      * 3-step and beyond is just continued "unpacking"

## TD($\lambda$)
Alister Reis has written a very good [blog post](https://amreis.github.io/ml/reinf-learn/2017/11/02/reinforcement-learning-eligibility-traces.html) on this
* Basically you want to do n-step but you don't want to choose n
* i.e. instead of calculating n-step return $G_t^{(n)}$, you want to calculate $G_t^{(\infty)}$
* So you take a $\lambda \in [0,1]$ and use it to multiplicatively weight all the $G_t^{(n)}$
  * i.e. $\lambda^0 G_t^{(1)} + \lambda^1 G_t^{(2)} + ... + \lambda^{\infty-1} G_t^{(\infty)}$
  * If you remember your geom progression, $\sum_{n=0}^{\infty}\lambda^n = \frac{1}{1-\lambda}$
  * So to normalize all this to 1, we need to multiply it by $(1 - \lambda)$
* We get this cursed formula $G^\lambda_t = (1-\lambda)(\lambda^0 G_t^{(1)} + \lambda^1 G_t^{(2)} + ... + \lambda^{\infty-1} G_t^{(\infty)})$
* Which is equal to $G^\lambda_t = (1-\lambda)\sum_{n=0}^{\infty}\lambda^{n-1} G_t^{(n)}$
* Now you're probably wondering how to calculate this without calculating to the end
  * Because I know I was wondering about it since my prof didn't talk about it
* So that's why some geniuses used something called **eligibility trace $e$** which keeps track of how "fresh" each state is (based on frequency and last visit) ([img src](https://www.researchgate.net/figure/This-figure-shows-the-eligibility-trace-for-four-different-algorithms-Sarsal-1_fig1_221456594)).
  * Since it sums to infinity (or at least, sums to the end of the trial), They use this eligibility trace to iteratively calculate $G^\lambda_t$ with each timestep as opposed to calculating it all in 1 shot at the end

![pic](https://www.researchgate.net/profile/Michael_James16/publication/221456594/figure/fig1/AS:393919742398465@1470929193135/This-figure-shows-the-eligibility-trace-for-four-different-algorithms-Sarsal-1.png)
  * i.e. every state has an eligibility trace, init at 0
  * when state is visited at that timestep, its $e(s)$ adds 1
    * This is called an **accumulating eligibility trace**.
    * If just reset to 1, it's called a **replacing eligibility trace**.
  * at every timestep these values are multiplied by lambda and gamma (they "deteriorate")
* With this eligibility trace system, you no longer just update the U(s) of 1 state with every timestep, you run the update for *every* state, but the TD error is weighted by each state's own eligibility trace.
  * So for every timestep, update all eligibility traces:
    * `eligibility *= lamb * gamma`
    * `eligibility[state] += 1.0`
  * Then get the TD error for the current timestep: `td_error = reward + gamma * state_values[new_state] - state_values[state]`
  * Then finally update U(s) for all states: `state_values = state_values + alpha * td_error * eligibility` 
  * As per Alister


See also?
* https://towardsdatascience.com/reinforcement-learning-td-%CE%BB-introduction-686a5e4f4e60#:~:text=random%20walk%20example-,The%20Idea%20of%20TD(%CE%BB),0.5*Gt%3At%2B4