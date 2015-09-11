[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Waves & Resonance]( http://exploratoria.github.io/exhibits/waves/ ) &raquo;

<center>
# Plane Wave
</center>

<span style=display:none>_View as a web page to see the content of this iframe_</span>
<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/waves/plane-wave/plane-wave.html width=100% height=500px></iframe>

### Things to Try

* Click "lattice" to see the wave traveling through a random distribution of particles

* Change the code in the `displacement()` function and see the effect on the wave
 
### About the Code

Since it is easier to modify a geometry in Three.js rather than recreate it, the `updateScene` function
Once a geometry is added to a scene in Three.js it cannot be modified. That is why all vertices of the line are created at once. At each step all vertices but one are moved by the same random vector.

<span style=display:none; >[You are now in GitHub source code view - click here to view as a web page]( http://exploratoria.github.io/exhibits/waves/plane-wave/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view as source code' onclick=window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/waves/plane-wave/'; />

### A Little Math
