[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Engineering & Structure]( http://exploratoria.github.io/exhibits/engineering/ ) &raquo;

# Catenoid to Helicoid

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/engineering/catenoid-to-helicoid/catenoid-to-helicoid.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/engineering/catenoid-to-helicoid/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/engineering/catenoid-to-helicoid/'" />

A catenoid is formed by rotating the path of a chain suspended from two points, a caternary, about the vertical axis. A helicoid is a screw-like shape consisting of concentric helixes. The two surfaces have the same intrinsic geometry, and as a result can be transformed into each other without changing the curvature of the surface.

### Things to Try

* Change the rate at which the transformation occurs

* Add pauses at the right moments of the transformation to replicate this [animated image](https://en.wikipedia.org/wiki/Catenoid#/media/File:Helicatenoid.gif)

* Alter the scaling of the parameter _v_ to see how it affects the surface

### About the Code

The parameter that controls the transition between shapes technically has the domain \\( -\pi \lt \theta \lt \pi \\), but since it only occurs as the argument of circular functions, which are periodic on the same domain, it can be allowed to grow indefinitely to make the code simpler.

The modifications to the geometry in the render loop replicate how the parametric surface is constructed by the [source code](https://github.com/mrdoob/three.js/blob/dev/src/geometries/ParametricGeometry.js).

### A Little Math

The parametrization of the [transformation](https://en.wikipedia.org/wiki/Catenoid#Helicoid_transformation) is

\\[ \begin{align} x &= \cos \theta \sinh v \sin u + \sin \theta \cosh v \cos u \\\ y &= -\cos \theta \sinh v \cos u + \sin \theta \cosh v \sin u \\\ z &= u \cos \theta + v \sin \theta \end{align} \\]

where one parameter \\( -\pi \lt u \lt \pi \\)  lies in a compact domain, while the other \\( -\infty \lt v \lt \infty \\) can have an infinite extent.
