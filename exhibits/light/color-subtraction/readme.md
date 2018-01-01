[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Light & Color]( http://exploratoria.github.io/exhibits/light/ ) &raquo;

# Color Subtraction

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/light/color-subtraction/color-subtraction.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/light/color-subtraction/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/light/color-subtraction/'" />

Primary colors and black are created by subtraction of frequencies. That's how paint works!

### Things to Try

* Alter the speeds with which the spots move or set them on other parametric paths

* Change the colors of the spots and the background for other mixing results
 
### About the Code

The colored spots start at the corners of an equilateral triangle. It is important that they are displaced in the z-direction to avoid [z-fighting](https://en.wikipedia.org/wiki/Z-fighting).

Rotation in three dimensions is inhibited by a setting on the controls. This shows how three-dimensional software can be adapted to two-dimensional displays.

### A Little Math

For an equilateral triangle with sides of length _l_ centered at the origin with one vertex pointed up, the coordinates of the vertices are

\\[ \left[ 0, \frac{l}{\sqrt{3}} \right] \; , \;
    \left[ -\frac{l}{2}, -\frac{l}{2\sqrt{3}} \right] \; , \;
    \left[ \frac{l}{2}, -\frac{l}{2\sqrt{3}} \right]\\]

It is easy to verify from these coordinates that all sides are equal.
