[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Mathematics & Patterns]( http://exploratoria.github.io/exhibits/mathematics/ ) &raquo;

# Hopf Fibration

<iframe src=https://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/mathematics/hopf-fibration/hopf-fibration.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/mathematics/hopf-fibration/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/mathematics/hopf-fibration/'" />

The Hopf fibration is a mapping that associates a point on a two-dimensional spherical surface with a circle on a three-dimensional spherical surface. Since the three-dimensional surface exists in a four-dimensional space, it cannot be visualized directly. Instead the circles in four dimensions are brought down to our three-dimensional space using stereographic projection. This is the same mechanism as how a point light produces shadows of objects, so this method of visualizing four-dimensional objects is analogous to casting shadows down into our physical space.

If a single point corresponds to a circle with the Hopf fibration, a collection of points around a circle corresponds to a collection of interlocking circles. That is what you are seeing right now!

### Things to Try

* Change the value of the variable "ratio" to see its effect on the shape

* Replace the variable "r" multiplying the coordinates of the vertices of the geometry with the combination "1/(1-w)" to see a standard stereographic projection

* Reduce the number of interlocking circles and stop the rotation to see that each circle links with all other circles: any two circles form a [Hopf link](https://en.wikipedia.org/wiki/Hopf_link)
 
### About the Code

Parametrizations are taken from a combination of these two sources:

[An Elementary Introduction to the Hopf Fibration](https://nilesjohnson.net/hopf-articles/Lyons_Elem-intro-Hopf-fibration.pdf)  
[Parametrization of Fibers](https://nilesjohnson.net/hopf-production.html)

The modified stereographic projection in the second source keeps the resulting graphic about the same size when input parameters change.

### A Little Math

See the second source for all the lovely details!
