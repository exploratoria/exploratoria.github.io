<center>
# Random Walk
</center>

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/heat/random-walk.html style='width: 100%; height: 500px'></iframe>

A random walk is the name for the random movement of particles subject to Brownian motion. At each step of the motion a random vector is added to the line being traced.

Things to try:

* Click "Update View" several times to see different random paths. If the motion appears to have stopped, then zoom out to find where the end of the path has gone.

* Try decreasing the "countBeforeNewStep" variable in the code to make the motion faster.
 
About the code:

Once a geometry is created in Three.js it cannot be altered. That is why all vertices of the line are created at once, and at each step all vertices but the first are moved by the same random vector.

Math test:

<math><mfrac><msqrt><mi>&gamma;</mi></msqrt><msup><mi>x</mi><mn>2</mn></msup></mfrac></math>
