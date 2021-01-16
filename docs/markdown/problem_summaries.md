---
title: Problems
---

A quick reference to known problems and their solutions, ordered by the type of problem.

[Verify if list of items can be represented by blocks of items](https://leetcode.com/explore/featured/card/january-leetcoding-challenge-2021/579/week-1-january-1st-january-7th/3589/)
* **Inputs**: 
  * A: List of **unique** integers
  * B: List of integer sequences (e.g. `[1,3]`) comprising of **unique** integers
* **Task**:
  * Verify A can be created by only concatenating the sequences in B
* **Solution**: Amortized Time & Space O(n)
  1. Assume uniqueness of items and correctness of input (e.g. A and B's contents are of the same length, all items unique)
  2. Create an index lookup for A using a hashtable.
  3. $\forall$ blocks in B, verify that $\forall$ items, `index > -1` and items have consecutive indexes (i.e. `index == prevIndex + 1` except the first index)