[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Heat & Temperature]( http://exploratoria.github.io/exhibits/heat/ ) &raquo;

# Brownian Motion

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/heat/brownian-motion/brownian-motion.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/heat/brownian-motion/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/heat/brownian-motion/'" />

Brownian motion is the random movement of a relatively large particle suspended in a fluid. It results from the many collisions of the small particles of the fluid with the large particle. In this exhibit the large particle starts off at the origin and moves slowly about the box on a random path.

### Things to Try

* Decrease the size of the large radius to make the large particle more like the others. How does this affect its speed?

* Change the overall speed of the particles of the fluid. A faster speed corresponds to a higher temperature, a slower speed to a lower one. How does this affect the speed of the large particle?
 
### About the Code

Much of the code for this exhibit is identical to that of [Elastic Collisions in 3D](http://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-3d/). Since the collision condition here must account for different radii and masses of the particles, additional attributes are stored for each ball and the render loop is modified accordingly.

### A Little Math

The basics of elastic collisions are described in [Elastic Collisions in 3D](http://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-3d/). The difference here is that masses must be explicitly included in the collision condition. Remembering that the normal vector between two balls is

\\[ \mathbf{n} = \frac{\mathbf{x}\_1 - \mathbf{x}\_2}{| \mathbf{x}\_1 - \mathbf{x}\_2 |} \\]

the collision condition for unequal masses is

\\[ \mathbf{v}\_1 \rightarrow \mathbf{v}\_1 + \left[ \mathbf{n} \cdot \left(
  \frac{ m\_2 }{ m\_1 } \mathbf{v}\_2 - \mathbf{v}\_1 \right) \right] \mathbf{n}
  \qquad \qquad \qquad
  \mathbf{v}\_2 \rightarrow \mathbf{v}\_2 + \left[ \mathbf{n} \cdot \left(
  \frac{ m\_1 }{ m\_2 } \mathbf{v}\_1 - \mathbf{v}\_2 \right) \right] \mathbf{n} \\]

At the time of collision, normal components of momentum are interchanged while tangential components are left alone. This information is used to derive the collision condition.
