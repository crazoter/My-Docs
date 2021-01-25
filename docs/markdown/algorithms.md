---
title: Tips & Tricks
---

## Sorting


## Array Traversal
### Unsorted
#### Find kth rank item
##### T:O(lg n), S:O(1): Quickselect
#### Find element repeated more than n/2 times
##### T:O(n), S:O(1): Counter + Number
```
int ctr, num = 0;
fori A[]:
  if ctr == 0:
    num = A[i];
  if num == A[i]: ctr++;
  else: ctr--;
return num;
// src: https://stackoverflow.com/questions/7059780/find-the-element-repeated-more-than-n-2-times
```

#### Maximum subarray Problem
##### T:O(n), S:O(1): Current & Max Sum
```
// Kadane's algorithm
// Modify w/ if statements to record subarray A[a, b]
int best_sum = 0, curr_sum = 0;
fori A[]:
  curr_sum = max(0, curr_sum + A[i]);
  best_sum = max(best_sum, curr_sum);
return best_sum;
// src: https://en.wikipedia.org/wiki/Maximum_subarray_problem
```

#### Find min / max item
##### T:O(n), S:O(1): Linear search

### Sorted
#### Find kth rank item
##### T:O(1), S:O(1): Lookup

### Misc
#### Find k shifts (to the right) of sorted array
##### T:O(nlgn), S:O(1): Find 1st inversion with mergesort
##### T:O(lgn), S:O(1): Find 1st inversion with binary search (Untested)
```
int L = 0, R = A.len - 1, k = 0;
while (R >= L): // While Search space > 0
  int mid = (R - L) / 2;
  if (A[mid] < A[0]):
    if (mid < k): 
      k = mid;
    R = mid - 1; // Trim Right if mid val 
  else:
    L = mid + 1; // Trim Left 
return k;
```

## Directed Graph / Linked List
### Find Cycle (& start node)
#### T:O(n), S:O(1): p=->next, q=->->next
Ptrs p, q. Start at head. p=->next, q=->next->next. Loop found when p=q, end when q=null (Floyd's Tortoise & Hare).

Find start node: q = head. p=->next, q=->next. end when p=q. 

#### T:O(n), S:O(n): Hashset
Check collision. Start node = collision.

### Get Cycle size
#### T:O(n), S:O(1): Find pt in loop, use 2nd ptr to iterate
Ptrs p, q. Find point in loop (See loop detection). q=->next, ctr++, stop if p=q.

== Union Find Disjoint Set (Amortized O($[\alpha](n)) ~= O(1)$)
#### MakeSet(x)
```
if x is not present:
  add x to the tree
  x.parent <- x
  x.rank <- 0 // rank refers to height
  x.size <- 1
```
#### Find(x) (with path reduction)
```
// 3 Options:
// Path Compression (recurse path, make node point to its root)
// Recall that if x.parent == x, x is the root. 
if x.parent != x: // If current node is not the root, recurse
  x.parent <- find(x.parent)
return x.parent

// Path Halving (Make every even/odd node point to its grandparent)
while x.parent != x:
  x.parent <- x.parent.parent // parent is now grandparent
  x <- x.parent // move to grandparent
return x

// Path Splitting (Make every node point to its grandparent)
while x.parent != x:
  next <- x.parent
  x.parent <- next.parent
  x <- next
return x
```
#### Union(x, y)
```
// By rank or size: Merge smaller subtree into larger subtree
rootOfX <- find(x)
rootOfY <- find(y)
return if rootOfX == rootOfY

// Ensure rootOfX is always of equal/higher rank
else if [rank:(rootOfX.rank < rootOfY.rank)] [size:(rootOfX.size < rootOfY.size)]
  swap rootOfX and rootOfY

rootOfY.parent <- rootOfX // Merge rootOfY into rootOfX
[rank:
if rootOfX.rank == rootOfY.rank // If they have the same rank, increment rank of root by 1
  rootOfX.rank += 1
]
[size: rootOfX.size += rootOfY.size]
```

## Divide & Conquer
### Closest Pair of Euclidean Points
1. Sort points by x-coordinate.
2. Split the points into two equal-sized subsets by median point.
3. Solve the two subsets recursively. This results in left-side and right-side minimum distances dLmin and dRmin.
4. Find the minimal distance dLRmin among the set of pairs of points in which one point lies on the left of the dividing vertical and the other point lies to the right.
. Observation shows smallest distance, d, must be $\leq$ min{dLMin, dRmin}.
. for each point pLeft in the left subset, take points in the right subset, pRight, that lie in the rectangle of dimensions (d, 2 ⋅ d) in the right subset and calculate dLRmin = min{dist(pLeft, pRight), d}
1. Return min{dLmin, dRmin, dLRmin}.


Working:

${distance}_{eggs}(trials)$

$t\geq 2: d_n(t) = 1 + d_{n-1}(t-1) + d_n(t-1)$

$t\geq 1: d_1(t) = 1$

$t\geq 1: d_2(t) = t(t+1)/2$

$t \lt n: d_n(t) = d_t(t)$

//
// file: Algorithms.adoc
//
= Algorithms & Code (Java)
:sectnums:
:toc: left
:toclevels: 3

:toc!:
:stem: asciimath

== Search
=== Binary Search
* For sorted arrays
* O(lg(n))

```
// Refactored from: https://www.geeksforgeeks.org/binary-search/

public static int binsearch(int[] arr, int val) {
    int left = 0, right = arr.length - 1, mid = 0;
    while (right >= left) { 
        int mid = left + (right - left) / 2; 
        if (arr[mid] == val) {      return mid; }
        else if (arr[mid] > val) {  right = mid - 1; }
        else {                      left = mid + 1; }
    } 
    return -1; 
}
```

== Sorting
=== Merge Sort
* Time & Space Complexity: O(nlog(n))
* Not in-place
* Stable
* Comparison based sorting algorithm
* Extra Notes:
** Can be used to count inversions
** Example of divide & conquer

```
// Refactored from: https://www.geeksforgeeks.org/java-program-for-merge-sort/

public static void merge(int[] arr, int l, int m, int r) { 
    // Find sizes of two subarrays to be merged 
    int L_N = m - l + 1; 
    int R_N = r - m; 

    /* Create temp arrays */
    int L[] = new int [L_N]; 
    int R[] = new int [R_N]; 

    /*Copy data to temp arrays*/
    for (int i=0; i<L_N; ++i) L[i] = arr[l + i]; 
    for (int j=0; j<R_N; ++j) R[j] = arr[m + 1 + j]; 

    /* Merge the sorted sub-arrays */
    int i = 0, j = 0; 
    int k = l;      // Index of current sub-arr
    while (i < L_N && j < R_N) { 
        if (L[i] <= R[j])   { arr[k++] = L[i++]; } 
        else                { arr[k++] = R[j++]; } 
    } 

    /* Copy remaining elements of L[] and R[] if any */
    while (i < n1) { arr[k++] = L[i++]; } 
    while (j < n2) { arr[k++] = R[j++]; } 
} 

// Usage: merge_sort(arr, 0, arr.length - 1);
public static void merge_sort(int arr[], int left, int right) { 
    if (left < right) { 
        int mid = (left + right) / 2; 
        merge_sort(arr, left, mid); 
        merge_sort(arr, mid + 1, right); 
        merge(arr, left, mid, right); 
    } 
} 
```
=== Heap Sort
=== Quick Sort

```
public static void swap(int arr[], int i, int j) {
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

public static int partition(int arr[], int l, int r, int pivot) { 
    int i = l; // index of smaller element 
    for (int j = l; j < r; ++j) { 
        if (arr[j] <= pivot) 
            swap(arr, i++, j); 
    } 

    // swap arr[i] with pivot at arr[r]
    swap(arr, i, r);
    return i;
} 

// Usage: quickSort(arr, 0, arr.length - 1);
public static void quickSort(int arr[], int l, int r) { 
    if (l < r) { 
        // Swap random pivot to right
        swap(arr, rand.nextInt(r - l) + l, r);
        
        // Get pivot index
        int pivotIdx = partition(arr, l, r, arr[r]); 
        
        // Recursively sort elements on left & right 
        quickSort(arr, l, pivotIdx - 1); 
        quickSort(arr, pivotIdx + 1, r); 
    } 
}
```

### Counting Sort
### Radix Sort
### Bucket Sort

## Testing
1. **Identify the *Equivalence Partitions (EP)*:**
    * EP: A group of test inputs that are likely to be processed by the SUT in the same way.
2. **Use *Boundary Value Analysis (BVA)*:**
    * When picking test inputs from an equivalence partition, values near boundaries (i.e. boundary values) are more likely to find bugs.
    * [Examples](https://nus-cs2103-ay2021s1.github.io/website/se-book-adapted/chapters/testCaseDesign.html#how)
3. **Handling multiple parameters:**
    * Each valid input at least once in a positive test case
    * No more than one invalid input in a test case
4. **Edge cases to consider:**
      * NULL / UNDEFINED
      * Empty / Length = 0
      * Negative values
      * Larger than Integer / Int Overflow 
          * (+-2,147,483,647, uint 4,294,967,295)

### JUnit
* https://www.vogella.com/tutorials/JUnit/article.html

### BDD with Cucumber
* Gherkin syntax: https://cucumber.io/docs/gherkin/reference/
* Implementation example: https://www.testim.io/blog/cucumber-js-for-bdd-an-introductory-tutorial-with-examples/

### GUI Testing
* https://reqtest.com/testing-blog/gui-testing-tutorial/

## Datastructures
### Trie
* https://en.wikipedia.org/wiki/Trie

## Divide and Conquer
* Recursively break down problem into two or more subproblems of the same type until they can be solved directly

## When to use Dynamic Programming
* **Optimal substructure**: Problem can be solved recursively -> can be broken into smaller problems
* **Overlapping subproblems**: Solutions to smaller problems can be cached to be re-used later
* Think of it as search space for an agent's actions (take item / ignore etc)
* Heuristics:
  * Can be drawn out into a tree
  * Is problem Maximization, Minimization or Counting?
  * If problem can be solved by enumerating through all possible solutions and finding best one
  * problem can be solved by enumerating through all subproblems and getting best subproblem solution

## Greedy Algorithms
* Always choose the best available option (e.g. Djkstra, Fractional Knapsack)
* Not always optimal, and proving it is optimal is difficult