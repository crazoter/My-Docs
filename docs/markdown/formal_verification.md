---
title: Formal Verification
---

## DARWIN approach
* For regression testing
  * Given an old test input t that used to succeed but now fails
  1. Set of inputs that once fulfilled the same path condition is now split
  2. Compute the first path condition f
    * Path condition refers to all the "ANDs" in the conditions the path takes
  3. Compute the 2nd path condition f'
  4. Solve for $f \wedge \neg f'$ (followed by old program but not followed by new program)
     1. If I say "not of this path" or neg f' then I can consider all the paths that deviate from f' (take another path at at any branch)
     2. e.g. highlighting potential problem paths
        1. f = con1
        2. f' = con1 n con4 n con5
        3. f n -f' = iterate through all possibilities
           1. con1 n -con1 (not satisfiable)
           2. con1 n -con4 (satisfiable, check this branch)
           3. ...etc
  5. Create a new input that fulfils the path condition for $f \wedge \neg f'$
  6. Compare the path followed at step 5 and the path taken by the buggy program to get diagnostics

## Cause Clue Clauses
* Convert entire failing test trace into a SAT problem
  * Since it's failing, it's unsatisfiable
  * Use MAXSAT solver to find the smallest set of constraints that can be removed to make it satisfiable
    * Also specify some hard constraints: constraints that cannot be removed 
    * In doing so, find the error causing the SAT to fail

## Error Invariants
* What must always be unsatisified (i.e. never clause)

## Programs
1. I am interested in seeing how formal verification can be applied to practical use. Of course I can write my own model in promela, then specify my rules and then model check based on that. But I am curious: is there a way to automatically generate a model from my code?
  * Are there tools in place that will automatically perform the tasks described in class?
  * What are the tools I can use to formally verify a model?
    * Promela:
      * [SPIN, obviously](https://github.com/nimble-code/Spin)
  * Given a program in a given language:
    * What are the tools I can use to automatically generate a model (of my program)?
      * Text
        * [FSMGenerator](http://fsmgenerator.sourceforge.net/)
          * Last Updated: 2008
        * 
    * What are the tools I can use to automatically generate test cases for it?
      * http://www.cs.ru.nl/~lf/publications/BFS05.pdf
      * C
        * [CBMC](https://www.cprover.org/cbmc/)
          * Properties verified using assertions. See [here](http://www.cprover.org/cprover-manual/properties/)
          * CMBC can also be used to convert a C program into a SAT formula. See https://cs.stackexchange.com/questions/99685/is-there-a-way-to-convert-a-program-into-a-boolean-formula
      * Java
        * [JBMC](http://www.cprover.org/jbmc/), [GitHub](https://github.com/diffblue/cbmc)
          * Properties verified using assertions. See [here](http://www.cprover.org/cprover-manual/properties/)
      * Given a FSM model, generate test cases
        * [JPlavisFSM](https://www.scielo.br/scielo.php?script=sci_arttext&pid=S2175-91462014000400447)
    * What are the tools I can use to convert it (or portions of it) into a SAT formula (which can then be solved by a SAT solver if necessary)?
    * What are the tools I can use to automatically find errors in my program?
      * LLVM
        * [Symbiotic (Dynamic Program Slicing)](https://github.com/staticafi/symbiotic) 
        * [Giri (Dynamic Program Slicing)](https://github.com/liuml07/giri), last updated 2018?
      * Java
        * [JavaSlicer (limited dynamic program slicing)](https://github.com/backes/javaslicer)
      * C
        * [MOPS](http://people.eecs.berkeley.edu/~daw/mops/)
          * Java executable for C programs
          * Last Updated: 2002
          * Descript: MOPS is a tool for finding security bugs in C programs and for verifying conformance to rules of defensive programming.
          * [Paper](http://people.eecs.berkeley.edu/~daw/papers/mops-ccs02.pdf)
            * See also: https://people.eecs.berkeley.edu/~daw/papers/mops-ndss04.ps
          * Usage: User defines a Finite State Automaton (FSA), or a product of multiple FSAs which they call "meta-FSA", in text file(s).

* Other tools: https://spinroot.com/static/
* https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis#Python

defect detection
statistical fault localizer e.g. Tarantula
Dynamic Slicing JSlice (not used so often anymore)
NCDC coverage
Trace comparison & delta debugging

## Test-driven repair
* as long as I do my job you don't care
  * Given a test suite T and buggy program P
    * Find P' s.t.
      * Passes T
      * Is syntactically closest to P
* One way: genetic programming
  * SAP fix by facebook
  * Look for mutations of the program
    * Look for the mutations that are effective
* Search-based repair
* Semantic program repair
  * Use synthesizers
  * infer conditions from test suite