---
title: Python Cheatsheet
---

Legend:
* #: Number, used for differentiating variables
* L#: List.
* D#: Dictionary. 
* itr#: Iterable.
* DF#: Dataframe
* mltIdx#: MultiIndex
* idx: Index
* int#: Integer variable


## Pure Python
* Iterables
  * **Loop with Index**: for idx, val in enumerate(itr)
  * **Generators (lazy loading iteration)**
    * Creation: 
      * `gen = iter(L / D / *range(i)*)`
      * `gen = (x for x in list)`
      * `gen = def fx(param): ... for x in param: yield x ...`
    * Use:    val = next(itr)
* Lists
  * **Init with List Comprehension**
    * Format: `[ (value) for (var_name) in (iterable) if (predicate) ]`
      * e.g. [L[0] for elem in list]
  * List of tuples:
    * **Convert L to L of indexed tuples:**
      * `enumerate(itr, start=int1) = [(int1,itr[0]), (int1+1,itr[0])...]`
    * Merge two lists into a list of tuples:
      * `zip(*L1*,*L2*)`
        * returns zipObject: [ (L1[0],L2[0]),  (L1[1],L2[1])... ]
        * Access zipObject contents: (*zipObj)
      * Unzip: `zip(*zipObj)`
* Dictionaries
  * **Init with Dictionary Comprehension**
    * Format: `{ (key : value) for (var_name) in (iterable) if (predicate) }`
      * e.g. {x : len(x) for x in list}
  * **Init from list of tuples**
    * `dict(zip(L1,L2))`
* Functions:
  * Default params: x=default
  * Flexible list param: `f(*args)`
    * Usage: f(v1,v2,v3...)
  * Flexible dict param: `f(**kwargs)`
    * Usage: f(k1=v1,k2=v2,k3=v3...)
  * Multiple output: 
    * def fx(): return (x, y)
    * Multiple assignment:
      * x,y = fx()
  * Global variables: `global varname`
  * Nested functions:
    * Variables & params of external f() is accessible
    * The function itself can be returned
    * Modify variables from nested f(): `nonlocal varname`
* Functional Programming
  * `map((lambda a: (transformation)), L)`
  * `filter((lambda a: (predicate)), L)`
  * `reduce((lambda a,b: ...), L) = result`
    * Import: `from functools import reduce`
  * The lambda can be replaced with a concrete function
* Lambdas
  * `(lambda (params): (body))`
  * e.g. (lambda a: a+1) ≡ def f(a): return a+1
  * No "return"
  * No multi-line
* Exception Handling
  * try: ... 
  * except: ... 
  * raise *Error*(*msg*)
    * Error = {ValueError, TypeError, YourOwnErrClass}
* I/O
  * Open file:
    * `with open('filepath') as file_var`
      * `file_var.readline()`: returns None if empty
  * Get script directory:
    * `dir_path = os.path.dirname(os.path.realpath(__file__))`
  * Get path to file relative to script directory:
    * `local_file = os.path.join(dir_path, 'path', 'to', 'local_file')`
* Datetime
  * Req: `import datetime as dt`
  * `dt.date.today()`

## Libraries / Modules
### Recordlinkage
* `import recordlinkage`
* Purpose: **Join different datasets when they don't share a unique identifier.** See [Documentation](https://recordlinkage.readthedocs.io/en/latest/ref-index.html)
  1. **Init an indexer**
    * `idxr = recordlinkage.Index()`
  2. Blocking: only **choose pairs of entries that have the same value under specified column** (e.g. "cuisine_type")
    * `idxr.block("col_name")`
  3. **Generate said pairs of indexes** which agree on the equal columns
    * `mltIdx_pairs = idxr.index(df1, df2)`
      * Example pair: MultiIndex([(0,0),(0,1),(0,7),(1,0),(1,4)...])
  4. **Specify the columns to compare** with a Compare object
    * `comp = recordlinkage.Compare()`
      * Then, specify the columns to compare by:
        * `comp.exact('col_nm_in_df1', 'col_nm_in_df2', label='new_lbl_in_new_df')`
          * Entries must **exact match** in the columns
          * e.g. comp.exact('city', 'city', label='city')
        * `comp.string('col_nm_in_df1', 'col_nm_in_df2', label='new_lbl_in_new_df', threshold = dbl_frm_0-1)` (threshold usually 0.8)
        * Entries must be **similar** (in terms of string) in the columns
  5. Apply the Compare object to **get a dataframe highlighting potential matches**
    * `df_pttl_mtchs = comp.compute(mltIdx_pairs, df1, df2)`
      * Structure of df_pttl_mtchs:
        * Index / Col 0: mltIdx_pairs
        * Columns: columns used for comparison
          * exact: 1 if equal else 0
          * string: 1 if threshold met, else 0
  6. **Filter matches** from potential matches
    * `df_mtchs = df_pttl_mtchs[df_pttl_mtchs.sum(axis=1) >= 3]`
      * If the val == 1 then there's a match on that column. This counts the number of matched columns, and filters by that.
      * In this case there were 3 columns so 3 was chosen
  7. **Select matched indexes** for one of the DFs (in this case df2)
      * `idx_df2_mtched = df_mtchs.index.get_level_values(1)`
        * df_pttl_mtchs & df_mtchs use a MultiIndex. 
        * df_mtchs.index.get_level_values(0) = df1's indexes, (1) = df2's indexes
  8. **From df2, remove entries that match df1's entries**
    * `df2_notInDf1 = df2[~df2.index.isin(idx_df2_mtched)]`
  9. **Join df1 and the new df2 entries**
    * `df1.append(df2_notInDf1)`


## Pandas


<!-- https://gist.github.com/pierrejoubert73/902cc94d79424356a8d20be2b382e1ab -->
<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>