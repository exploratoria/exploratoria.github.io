[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Engineering & Structure]( http://exploratoria.github.io/exhibits/engineering/ ) &raquo;

# Rotating Tesseract

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/engineering/rotating-tesseract/rotating-tesseract.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/engineering/rotating-tesseract/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/enginnering/rotating-tesseract/'" />

A tesseract is the four-dimensional equivalent of a three-dimensional cube. This one is rotating in four dimensions in the _xw_-plane. Since we cannot see four-dimensional objects as they really might be, a projection down to our three physical dimensions is necessary. The one used here is a stereographic projection of the vertices of the four-dimensional object, which are then connected by cylinders.

### Things to Try

* Change the rotation to one in the _yw_-plane or _zw_-plane by altering the vector indices of the transformation

* Implement more complex four-dimensional rotations to see the effect on the dynamic structure

### About the Code

Rather than explicitly writing out all sixteen vertex positions, the one with all positive signs is hard coded and those with combinations of minus signs added in successive steps. The process is cumulative, taking all previous combinations and changing one sign for additional vertex positions.

Rather than hard coding the pairs of vertices representing edges, successive pairs are accumulated in accordance with how the vertices are defined. You can see the pattern employed by writing out the vertex values explicitly.

Rather than creating cylinders for the edges once and then modifying their geometries on the fly, they are removed from the scene and recreated on each render loop. This makes the code considerably simpler mathematically, but the constant recreation can lead to sluggish browser behavior.

### A Little Math

The rotation in the _xw_-plane alters the _x_ and _w_ components of the the four-dimensional vectors representing vertices of the tesseract. At time _t_ the transformed coordinates are given by

\\[ \begin{align} x' &= x \cos t - w \sin t \\\ y' &= y \\\ z' &= z \\\ w' &= x \sin t + w \cos t \end{align} \\]

The four-dimensional vectors are then reduced to three-dimensional positions with the stereographic projection

\\[ \left[ \frac{x'}{1-w'} \;,\; \frac{y'}{1-w'} \;,\; \frac{z'}{1-w'} \right] \\]

The transformed vertices are connected by straight geometric structures to finish the visualization. This is not completely accurate, since straight-line edges of the original four-dimensional object generally become curves under stereographic projection. The shortcut is used here to match visualizations one commonly encounters on the Internet.
