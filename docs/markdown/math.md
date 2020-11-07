---
title: Math
---

<details><summary>Matrices</summary><p>

* Converting a linear function into a matrix
  * If we have set of linear equations that follow the same equation pattern, we call it a **system of linear equations** which we can represent as a matrix
    * https://www.varsitytutors.com/hotmath/hotmath_help/topics/solving-systems-of-linear-equations-using-matrices
    * http://math.mit.edu/~gs/linearalgebra/ila0403.pdf
  * Given your equations, map it to Ax = b or [Ax|b]: 
    * Identify your "data", or the variables that are unique per equation (represented by matrix A)
    * Identify the variables that remain constant regardless of the equation index (represented by matrix x)
    * Identify the single value (unique to each equation) the equation equates to (represented by matrix b) that is not tied to a constant.
  * Let i be the ith equation of the line equation above
  * General Method:
    * Given an Equation: (DATA VARIABLES MULTIPLYING CONSTANTS) + (CONSTANTS WITHOUT DATA VARIABLES) = (SINGLE VALUE)
      * Merge the (CONSTANTS WITHOUT DATA VARIABLES) into (DATA VARIABLES MULTIPLYING CONSTANTS) by setting the data variables to 1 for such instances
        * If you have multiple of such constants, you can potentially merge them into a single constant
      * Let N_e = # of eqns, N_c = # of constants, N_v = # of data variables
      * Matrix A: [N_e x N_v] matrix containing all the data variables for every row
      * Matrix x: [N_c x 1] vector containing all constants as a variable
      * Matrix b: [N_e x 1] vector of single values
  * Example 1: Equation y = ax + c. We can rearrange this to Ax + By = C.
    * Matrix A: Each row is [x_i, y_i] (as they are variables unique to the equation)
    * Matrix x: [A, B]^T (the multipliers of the points x and y are substituted into the system of equations as a constant)
    * Matrix b: Each row is [C_i] (as this is the single value that is unique to each eqn that it equates to)
  * Example 2: Equation (x - x_0)^2 + (y - y_0)^2 = r^2
    * x, y = coordinates of point (on the circle)
    * x_0, y_0 = coordinates of center of circle
    * r = radius
    * Expansion: x^2 - x_0^2 - 2x_0*x + y^2 - y_0^2 - 2y_0*y = r^2
      * Rearrange: (-2x_0*x -2y_0*y) + (x_0^2 + y_0^2 - r^2) = -y^2 -x^2
      * In this case, x and y are data; they are specific to each equation
      * x_0, y_0 and r are going to be the same if we're referring to the same circle.
      * Here we can see x^2 and y^2 are not tied to constants, thus they are the unique value
      * Ax|b: (after cleaning up the negative signs)
        * A_i: [x, y, 1]
        * x: [x_0, y_0, c]^T, where c = r^2 -x_0^2 -y_0^2
        * b: [y^2, x^2]
      * https://math.stackexchange.com/questions/2110244/least-squares-method-to-find-radius-of-a-circle
      * https://math.stackexchange.com/questions/214661/circle-least-squares-fit
* The Matrix Cookbook
  * https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf
  
</p></details>

<details><summary>Jacobian</summary><p>

* Related topics:
  * Derivative of Multivariable functions
  * [pyTorch Autograd](https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html)
    * Jacobian-vector product is just talking about the Jacobian matrix multiplied by a vector

* Pre-req: 
  * [Linear Transformations in matrix](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/jacobian/v/jacobian-prerequisite-knowledge)
    * i.e. Representing a basis as a matrix and how it works
    * e.g. [a, b; c, d] [x, y]^T = [(a+c)x, (b+d)y]^T where (a+c)x and (b+d)y are the x and y coordinates with f1(x,y) and f2(x,y) as the basis (2D basis and linear transformation)
    * Note that [x,y]^T can become f([x,y]^T); that is, [f1(x,y), f2(x,y)]^T e.g. [x+sin(y), y+sin(x)]^T which isn't linear (but linear on a local scale; think of integration)
  * [Determinant w.r.t. Linear Transformations](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/jacobian/v/the-jacobian-determinant)
    * See 1:08 
      * "Think of the determinant has how much this transformation stretches or squishes space"
      * It gets stretched out by a factor of the determinant
      * e.g. determinant = 6, Any area will get stretched out by a factor of 6

* [Local Linearity of a multivariable function](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/jacobian/v/local-linearity-for-a-multivariable-function)
  * See: 4:20
  * Looking around some specific point x0 and y0, there should be some kind of really-zoomed-in **locally linear** transformation (represented by a 2x2 matrix i.e. the **Jacobian Matrix**) that represents the transformation performed by a much more complicated function

* [Jacobian Matrix]
  * See 1:07 - 2:21
  * [df1/dx, df1/dy; df2/dx, df2/dy] (See 6:13)
  * If you understand local linearity, the Jacobian Matrix just represents what a transformation looks like when you zoom in near a specific point s.t. it becomes a linear transformation

* [Jacobian Determinant]
  * See 8:31 (and talk about determinant above)
  * "Look at a tiny local neighbourhood around a point and see if the transformation stretches or squishes that region"

</p></details>

<details><summary>pyTorch Autograd</summary><p>

* https://www.youtube.com/watch?v=MswxJw-8PvE
  * Explains the autograd system 
  * 2:46: backward pass, 3:37 for more complicated scenario
  * Why do we need the gradients of each tensor?
    * https://stackoverflow.com/a/47026836 by jdhao
      * Neural network use loss (scalar) to assess how well the network has learned. 
      * In order to update the parameters of the network, we need to calculate the gradient of loss w.r.t to the parameters, which is actually leaf node in the computation graph (by the way, these parameters are mostly the weight and bias of various layers).
      * According to chain rule, in order to calculate gradient of loss w.r.t to a leaf node, we can compute derivative of loss w.r.t some intermediate variable, and gradient of intermediate variable w.r.t to the leaf variable, do a dot product and sum all these up.
        * Concrete example on this chain rule application: https://blog.paperspace.com/pytorch-101-understanding-graphs-and-automatic-differentiation/
      * The gradient arguments of a Variable's backward() method is used to calculate a weighted sum of each element of a Variable w.r.t the leaf Variable. These weight is just the derivate of final loss w.r.t each element of the intermediate variable.
* References
  * https://www.kaggle.com/residentmario/pytorch-autograd-explained

</p></details>

### Differentiate by vector
* See [video](https://www.youtube.com/watch?v=iWxY7VdcSH8)
* Example:
* $\frac{\delta W(x;p)}{\delta p}$ = Jacobian Matrix (Matrix of Partial Derivatives)
  * $x = \begin{bmatrix}x \\ y\end{bmatrix}$, $p=\{p_1,...,p_N\}$
    * x is shorthand for the coordinates
    * p is a vector of parameters
  * $W(x;p) = \begin{bmatrix}W_x(x,y;p) \\ W_y(x,y;p)\end{bmatrix}$
    * $W(x;p)\equiv W(x,y;p)$ and it is a linear transformation of the coordinates.
    * $W_x(x,y;p)$ refers to the transformation to the x-axis position by $W(x,y;p)$.
  * $\frac{\delta W(x;p)}{\delta p} = \begin{bmatrix}\frac{\delta W_x}{\delta p_1} & \frac{\delta W_x}{\delta p_2} & ... & \frac{\delta W_x}{\delta p_N} \\ \frac{\delta W_y}{\delta p_1} & \frac{\delta W_y}{\delta p_2} & ... & \frac{\delta W_y}{\delta p_N}\end{bmatrix}$
    * Derivative of this transformation w.r.t. p is equivalent to obtaining a vector of the equations differentiated by each parameter $p_i$

### Hessian Matrix
* See [video](https://www.khanacademy.org/math/multivariable-calculus/applications-of-multivariable-derivatives/quadratic-approximations/v/the-hessian-matrix)
  * Descript 0:37
  * Full example 4:02
  * N dimensional 4:30

<details><summary>Template</summary><p>
</p></details>