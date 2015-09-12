[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Waves & Resonance]( http://exploratoria.github.io/exhibits/waves/ ) &raquo;

<center>
# Plane Wave
</center>

<span style=display:none>_View as a web page to see the content of this iframe_</span>
<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/waves/plane-wave/plane-wave.html width=100% height=500px></iframe>

A <a href=https://en.wikipedia.org/wiki/Plane_wave>plane wave</a> is

### Things to Try

* Click "random" to see the wave traveling through a random distribution of particles

* Change the variable named "speed" in the `displacement()` function to alter the rate at which the wave moves
 
### About the Code

Since it is easier to modify a geometry in Three.js rather than recreate it, the `updateScene()` function moves the vertices of the geometry. Clicking "lattice" moves them to the orderly positions of the lattice array, while clicking "random" moves them to arbitrary positions. The variable named "balls" is one less than the number of particles along each edge of the geometry.

<span style=display:none; >[You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/waves/plane-wave/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view as source code' onclick=window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/waves/plane-wave/'; />

### A Little Math

\\( -b \pm \sqrt{b^2 - 4ac} \over 2a \\)
