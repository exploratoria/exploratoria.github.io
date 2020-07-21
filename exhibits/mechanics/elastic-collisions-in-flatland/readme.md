[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Mechanics, Dynamics & Motion]( http://exploratoria.github.io/exhibits/mechanics/ ) &raquo;

# Elastic Collisions in Flatland

<iframe src=https://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#https://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-flatland/elastic-collisions-in-flatland.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-flatland/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/mechanics/elastic-collisions-in-flatland/'" />

A bunch of bouncing balls elastically colliding in three dimensions, as seen by the two-dimensional occupants of [Flatland]( https://en.wikipedia.org/wiki/Flatland ).

The word "elastic" in this context means that total kinetic energy, the measure of the motion of objects, is conserved and does not change. This simulation will run on and on and on.

### Things to Try

* Change the location of Flatland in the z-direction

* Make the balls visible to understand what is seen in the Flatland cross section of the larger three-dimensional world
 
### About the Code

This exhibit is a modification of [Elastic Collisions in 3D](http://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-3d/index.html). All of the math for the collisions is identical: what is changed is the graphic displayed from the same underlying data. This shows how you can repurpose code in three dimensions to fit other problems.

The intersections are calculated algebraically rather than attempting to find them by raytracing from the origin of each sphere. This process of display is not only much simpler than raytracing but better behaved in a rapidly changing dynamic system.

### A Little Math

The cross sections of spheres are circles with a radius determined by the difference between the center of the sphere and the plane of intersection. A sphere of radius \\( r \\) at an arbitrary position \\( (x\_0,y\_0,z\_0) \\) satisfies the equation

\\[ (x-x\_0)^2 + (y-y\_0)^2 + (z-z\_0)^2 = r^2 \\]

When the plane of Flatland passes through the sphere, the third term on the left-hand side can be moved to the right-hand side to define the circles:

\\[ (x-x\_0)^2 + (y-y\_0)^2 = r^2 - (z\_\text{flatland}-z\_0)^2\\]

The circles change in radius as the three-dimensional spheres move through the plane.
