---
title: CS4246 Cheatsheet
---

### POMDP
* **Updating belief' given (b, a, e)**
* $b'(s_{curr})=normalized\ Pr(e | s_{curr}) * E[(s_{prev}, a, s_{curr})]$
  * $E[(s_{prev}, a, s_{curr})] = Pr(s_{curr} | s_{prev},a) * b(s_{prev})$
1. Set initial belief state
2. **Do action**: $\forall$ next_state, $\sum$ all Pr(you were in prev_state) x Pr(transit)
3. **Use evidence**: $\forall$ state, x Pr(evidence seen at state)
4. **Normalize** s.t. $\sum$ all state beliefs = 1
* **Value of plan** $a_1,...,a_n$
  * $\alpha_{[a_1,...,a_{n-step}]}(s_{start})=R(s_{start}) + \gamma(E[\alpha(s_{next})])$
  * Evaluate E[value] after executing plan from $s_{start}$
  * Plan: Pre-planned sequence of steps
* **Optimal Plan**: 
  * x-axis: 0 to 1 (Pr($s_{curr} = s$)), y-axis: value 9$\alpha_p(s)$)
  * Plot: All possible values of plans w.r.t. Pr(s) ($\alpha_{[\forall permutations]}(s)$)
  * Optimal: Always switch to plan that offers highest $\alpha_p(s)$