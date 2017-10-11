[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Mathematics & Patterns]( http://exploratoria.github.io/exhibits/mathematics/ ) &raquo;

# Plane Cutting Ellipsoid

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/mathematics/plane-cutting-ellipsoid/plane-cutting-ellipsoid.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/mathematics/plane-cutting-ellipsoid/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/mathematics/plane-cutting-ellipsoid/'" />

A plane cutting an ellipsoid always produces an ellipse!

### Things to Try

* One
* Two
* Three
 
### About the Code


### A Little Math

The ellipsoid parametrization is
	
\\[ \left( \frac{x}{\text{scaleX}} \right)^2 + \left( \frac{y}{\text{scaleY}} \right)^2 + \left( \frac{z}{\text{scaleZ}} \right)^2 = 1 \\]

The normal to the plane is the z-axis rotated by eulerX and eulerY. The plane parametrization is

\\[ n_x x + n_y y + n_z z = 0 \\]

Their intersection is the solution of the quadratic equation

\\[ \left[ \frac{1}{\text{scaleX}^2} + \frac{n_x^2}{n_z^2 \text{scaleZ}^2} \right] x^2 \\\\
  + \frac{2 n_x n_y}{n_z^2 \text{scaleZ}^2} x y \\\\
  + \left[ \frac{1}{\text{scaleY}^2} + \frac{n_y^2}{n_z^2 \text{scaleZ}^2} \right] y^2 - 1 = 0 \\]

formed by eliminating the z-variable.
