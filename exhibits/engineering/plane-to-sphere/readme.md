[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Engineering & Structure]( http://exploratoria.github.io/exhibits/engineering/ ) &raquo;

# Plane to Sphere

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/engineering/catenoid-to-helicoid/plane-to-sphere.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/engineering/catenoid-to-helicoid/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/engineering/catenoid-to-helicoid/'" />

A plane can be related to a sphere by [stereographic projection](https://en.wikipedia.org/wiki/Stereographic_projection#Definition), but a direct interpolation between the two looks rather funny. A much nicer animation results from using [involutes](https://en.wikipedia.org/wiki/Involute#Involutes_of_a_circle) of a circle!

### Things to Try

* Change the rate at which the transformation occurs

* Add pauses at the right moments of the transformation to show both the plane and sphere longer

* Experiment with colorings other than the checkerboard

* Add a global map as a texture to map the world to a plane

### About the Code

The parameter that controls the transition between shapes ranges between zero and unity. The first value corresponds to \\( t = \pi \\) and the second to \\( t = a \\). This provides a smooth interpolation for all points that moves them proportionately between the plane and the sphere.

The checkerboard is determined by adding integers representing the centers of <i>x</i>- and <i>y</i>-coordinates, which can be found using either Math.floor or Math.ceil (but not Math.trunc). The sum of these two integers is either even or odd.

### A Little Math

The symmetrical parametrization of the involutes as used here is

\\[ [ r, z ] = [ \sin t - (t-a) \cos t, \cos t + (t-a) \sin t ] \\]

The axial symmetry of the object means that <i>x</i>- and <i>y</i>-coordinates can be evaluated from <i>r</i> and the stored precalculated angle <i>&phi;</i>.

The other precalculated parameter <i>a</i> corresponds to setting \\( t = \pi \\) in the first coordinate of the parametrization and finding <i>r</i> from the coordinates on the plane. This value must be normalized because the parametrization assumes a unit sphere, which corresponds to a maximum <i>r</i>-value of <i>&pi;</i>.
