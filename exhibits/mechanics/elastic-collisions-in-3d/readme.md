[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Mechanics, Dynamics & Motion]( http://exploratoria.github.io/exhibits/mechanics/ ) &raquo;

# Elastic Collisions in 3D

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-3d/elastic-collisions-in-3d.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-3d/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/mechanics/elastic-collisions-in-3d/'" />

A bunch of bouncing balls elastically colliding with the walls and one another!

The word "elastic" in this context means that total linear momentum, the measure of the motion of objects in straight lines, is conserved and does not change. This simulation will run on and on and on.

### Things to Try

* Click "Update View" several times to see different sets of balls

* Change the variables "count", "radius" and "speed" to alter the initial parameters of the graphic
 
### About the Code

Ball sometimes stick together...

### A Little Math

A collision in two or three dimensions can be treated like the one-dimensional case by working with quantities "normal" to the collision. For collisions with the walls, that just means along the regular Cartesian coordinate directions. For collisions between balls, that mean quantities with respect to the line joining the centers of the two balls.

If positions are denoted by vectors <b>x</b><sub>1</sub> and <b>x</b><sub>2</sub>, the normal vector between two balls is

\\[ \mathbf{n} = \frac{\mathbf{x}\_1 - \mathbf{x}\_2}{| \mathbf{x}\_1 - \mathbf{x}\_2 |} \\]

With velocities denoted by vectors <b>v</b><sub>1</sub> and <b>v</b><sub>2</sub>, the relative velocity is

\\[ \mathbf{v}\_\text{relative} = \mathbf{v}\_1 - \mathbf{v}\_2 \\]

and the relative velocity along the normal direction is

\\[ \mathbf{v}\_\text{normal} = ( \mathbf{v}\_\text{relative} \cdot \mathbf{n} ) \mathbf{n} \\]

At the time of collision, normal components of momentum are interchanged while tangential components are left alone. For balls of equal mass, momentum and velocity are interchangeable. The collision condition can then be written

\\[ \mathbf{v}\_1 \rightarrow \mathbf{v}\_1 - \mathbf{v}\_\text{normal} \qquad \qquad \qquad \mathbf{v}\_2 \rightarrow \mathbf{v}\_2 + \mathbf{v}\_\text{normal} \\]

If the balls had unequal masses, those values would need to appear in these equations.
