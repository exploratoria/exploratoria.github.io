[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Mathematics & Patterns]( http://exploratoria.github.io/exhibits/mathematics/ ) &raquo;

# Plane Cutting Ellipsoid

<iframe src=https://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/mathematics/plane-cutting-ellipsoid/plane-cutting-ellipsoid.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/mathematics/plane-cutting-ellipsoid/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/mathematics/plane-cutting-ellipsoid/'" />

[Plane Cutting Ellipsoid - Full Screen](http://exploratoria.github.io/exhibits/mathematics/plane-cutting-ellipsoid/plane-cutting-ellipsoid.html)

A plane cutting an ellipsoid always produces an ellipse!

### Things to Try

* After altering values with the sliders, toggle the ellipsoid off and back on to verify the intersection

* With the ellipsoid toggled off, rotate the plane to inspect the intersection as values are altered further

* Replace the ellipsoid with a cone geometry to define other conics by their intersections with the plane
 
### About the Code

The ellipsoid starts out as a sphere that is then scaled individually in each direction.

While the line of intersection is easily evaluated algebraically, this example uses a raycaster from the origin to determine the points of intersection. That means the method will work for any arbitrary shape intersecting the plane. It is important that the material of the object is double sided for the raycasting to work from the inside of the object.

### A Little Math

With scale variables represented by the letter "s", the ellipsoid parametrization is

\\[ \left( \frac{x}{s\_x} \right)^2 + \left( \frac{y}{s\_y} \right)^2 + \left( \frac{z}{s\_z} \right)^2 = 1 \\]

The normal to the plane is the z-axis rotated by the two angle values. The plane parametrization is

\\[ n\_x x + n\_y y + n\_z z = 0 \\]

Their intersection is the solution of the quadratic equation

\\[ \left[ \frac{1}{s\_x^2} + \frac{n\_x^2}{n\_z^2 s\_z^2} \right] x^2 + \frac{2 n\_x n\_y}{n_z^2 s\_z^2} x y + \left[ \frac{1}{s\_y^2} + \frac{n\_y^2}{n\_z^2 s\_z^2} \right] y^2 - 1 = 0 \\]

formed by eliminating the z-variable, and a quadratic equation in general represents a conic section.
