<center>
# Random Walk
</center>

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/heat/random-walk.html style='width: 100%; height: 50%'></iframe>

A random walk is the name for the random movement of particles subject to <a href="https://en.wikipedia.org/wiki/Brownian_motion">Brownian motion</a>. At each step of the motion a random vector is added to the line being traced.

### Things to Try

* Click "Update View" several times to see different random paths

* Try decreasing the "countBeforeNewStep" variable in the code to make the motion faster
 
### About the Code

Once a geometry is added to a scene in Three.js it cannot be modified. That is why all vertices of the line are created at once. At each step all vertices but one are moved by the same random vector.

### A Little Math

Math test:

<math><mfrac><msqrt><mi>&gamma;</mi></msqrt><msup><mi>x</mi><mn>2</mn></msup></mfrac></math>
