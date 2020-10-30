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

<details><summary>L7,L8,L9 Keypoints notes</summary><p>

* Combining 2 images: 
  1. Find keypoints / interest points / corners / Harris Corners
    * Preferably Invariant to transformations (if it is affected = equivariant)
      * Geometric (warping img transformation): 
        * Translation & Rotation: KP Location not invariant, Harris Corner resp. invariant
        * Scale: Corner response not invariant
          * To counter: slowly scale image from small to big and find scale for which response R is the largest
            * Instead of continuous scales, we can use the gaussian pyramid method
            * Instead of using Harris Corner response (expensive to run on all pixels), we can use LoG as a response on the image to find the scale (note: only to find the scale, LoG looks for edges not corners specifically)
              * https://automaticaddison.com/how-the-laplacian-of-gaussian-filter-works/
              * Find 1st derivative of image to find gradients 
                * Sensitive to noise, so instead use 2nd derivative of image (edge at 0)
                  * Both sensitive to noise, so apply gaussian filter first, then Laplacian (thus LoG)
                    * Extra: Found in W4 L4 gradients.pdf
                  * Approximate LoG using Difference of Gaussian (using Gaussian pyramid)
      * Photometric (filtering img transformation): 
        * Intensity changes:
          * Difference is the same: response invariant
          * Otherwise response not invariant (is heavily dependent on gradient intensity due to thresholding, L7S38)
    * Distinct from other descriptors (Harris Corners)
      * Look for corners (significant gradient in all directions)
        * Find pixel I(x,y) with highest intensity difference w.r.t. all surrounding pixels I(x+u,y+v) based on window [Slide 15]
          * In practice, weighted by distance from center pixel (L7S31)
        * Approximate I(x+u,y+v) from I(x,y) using Taylor Series expansion up to 1st order approximation (L7S16)
        * Thus obtaining the 2nd moment matrix H at S17 and S18
        * Then, diagonalize the matrix and get its eigenvalues. These eigenvalues represent the horizontal and vertical gradient. We want both to be strong (thus response R = min(lambda1, lambda2))
          * **Harris Operator:** Since det(H) = lambda1 * lambda2 and trace(H) = lambda1 + lambda2, R is approximated by det(H) - k*trace^2(H), if > 0 we call it a corner
        * **Non-maximum suppression** Get local maximum (maybe by window S28), then pick the maxima of the local maxima within a radius (S30)
    * Efficient (Don't want too many)
    * Small (robust to clutter and occlusion)
  2. Compute feature descriptors (vectors) to mathematically represent these keypoints and their surrounding region
    * Vector of pixel intensities: sensitive to any change
    * Vector of gradients: sensitive to deformations
    * Color histogram: invariant to scale & rotation, but more false matches
      * Spatial histograms: compute different histograms on patch split into grid: some invariance to deformations
        * To make sure rotation invariant, normalize orientation by finding dominant orientation (overall gradient), then rotate patch to that direction
          * Multi-Scale Oriented Patches (MOPS): To reduce effect of deformations, subsample parts of the patch, normalize then wavelet transform.
          * GIST: Compute Gabor filter bank histogram from each square in patch split into a grid
          * SIFT: 4 Steps
            * Benefits
              * Invariant to scale and rotation
            1. Find best scale for keypoints: Multi-Scale Extrema (Blob) Detection
              * Gaussian Pyramid (each level is an "octave" with scale decreasing by 1/2 per level)
              * At each level, discretely vary the sigma to calculate the difference of gaussian (to approx. LoG) and find local maxima
            2. Refine keypoint location to sub-pixel accuracy
              * Compute Harris Corner response (Hessian) of DoG image and keep maxima if HC response above threshold
            3. Rotate keypoints based on their dominant orientation
            4. Create descriptor
               * Re-weight gradient magnitudes for each pixel based on gaussian centered on keypoint, discard pixels with low magnitude
               * Split patch into grid, then create gradient orientation histogram (8 bins, 45deg per bin) for each square
               * Make sure descriptors aligned to dominant orientation, then normalize vector, clamp values, etc
  3. Perform keypoint / feature matching
    * Simple: Minimum SSD between the feature vectors
    * Better: ratio distance 1stDiff:2ndDiff (smaller the better)
      * dist(kp_in_imgA - bestKp_in_imgB) / dist(kp_in_imgA - 2ndBestKp_in_imgB)
    * Test this feature in img_A with all other features in img_B using indexing structure
    * Set a threshold, which affects
      * Precision: % of matches being true matches [TP / (TP + FP)]
        * Higher threshold = more lax = lower precision
      * Recall: % of all true matches found [TP / (TP + FN)]
        * Higher threshold = more lax = higher recall
      * Specificity: % of all false matches discarded [TN / (TN + FP)]
        * Higher threshold = more lax = lower specificity
  4. Perform a transformation on img_B to merge it with img_A using the keypoint matches {p,p'}
    * If {p,p'} is a correct match, then p = a * H * p'
      * p = [x, y, z]^T where z=1, .: [x, y, z]^T
      * a is an unknown scale factor
      * H is a 3x3 homography matrix (See L9 S10)
        * See what is a [homography](https://www.cs.ubc.ca/grads/resources/thesis/May09/Dubrofsky_Elan.pdf)
          * [Isometric transformations (just skip through)](https://www.youtube.com/watch?v=IDKNuHr6XVM)
            * [How it is related to the matrix](http://www1.spms.ntu.edu.sg/~frederique/lecture1ws.pdf)
            * Last row (0,0,1) to preserve z = 1
          * Similarity: same as isometric but with scale
          * Affine: skew
          * Projective / homography: 
          * Perspective transformation: 1 level above
      * 4 pairs needed to calculate a concrete H matrix as it has 8 degrees of freedom
        * Solve using normalized DLT
      * Outliers (bad matches) will significantly affect the DLT, so do Random Sampling Consensus (RANSAC)
        * RANSAC: General algorithm to estimate best parameters to fit model to inliners (S20)
          * Randomly sample minimum points required to fit model
          * Solve for model parameters using samples
          * Count number of points (inliers) that are covered by the model (using a threshold) using the params found
          * Choose the params that cover the most points after iterating N times
          * Formula for N based on % of inliers and confidence % of iteration without outliers on S24

* Gaussian: Standard distribution but on 3D space (imagine x-axis now on x and y axis)
* Laplacian of Gaussian = 2nd derivative of gaussian
  * See https://i.stack.imgur.com/u8I01.png
  * https://automaticaddison.com/how-the-laplacian-of-gaussian-filter-works/
* Difference of Gaussian: Difference of image blurred with gaussians of different sigma
  * Approximation for the LoG
  * See https://en.wikipedia.org/wiki/Difference_of_Gaussians

</p></details>

<details><summary>Template</summary><p>
</p></details>