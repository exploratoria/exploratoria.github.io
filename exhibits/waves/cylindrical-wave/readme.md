[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Waves & Resonance]( http://exploratoria.github.io/exhibits/waves/ ) &raquo;

<center>
# Cylindrical Wave
</center>

<span style=display:none>_View as a web page to see the content of this iframe_</span>
<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/waves/cylindrical-wave/cylindrical-wave.html width=100% height=500px></iframe>

A <a href=http://scienceworld.wolfram.com/physics/CylindricalWave.html>cylindrical wave</a> is
an oscillatory motion of all particles with respect to an infinite line, in this case the <i>z</i>-axis. Since all particles move towards and away from the same line, the wave consists of cylinders. A cylindrical wave is a solution to the <a href=https://en.wikipedia.org/wiki/Wave_equation#Scalar_wave_equation_in_two_space_dimensions>wave equation</a> with two dimensions of space.

A cylindrical wave is a mathematical idealization because infinite lines do not exist in reality.

### Things to Try

* Rotate the graphic by holding down your mouse and dragging to see that the wave has a distinct axis

* Click "random" to see the wave traveling through a random distribution of particles

* Change the variable named "amplitude" in the displacement() function to alter the size of the oscillations

* Change the minus sign before the time variable to plus to make the wave move in the opposite direction
 
### About the Code

Since it is easier to modify a geometry in Three.js rather than recreate it, the updateScene() function moves the vertices of the geometry. Clicking "lattice" moves them to the orderly positions of the lattice array, while clicking "random" moves them to arbitrary positions. The variable named "balls" is one less than the number of particles along each edge of the geometry.

<span style=display:none; >[You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/waves/cylindrical-wave/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view as source code' onclick=window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/waves/cylindrical-wave/'; />

### A Little Math

Writing the distance from the <i>z</i>-axis with the coordinates \\( \rho = \sqrt{ x^2 + y^2 } \\), cylindrical waves can be written as the functions

\\[ \frac{ \sin ( kx \pm \omega t ) }{ \rho } \hspace{.5in} \text{or} \hspace{.5in} \frac{ \cos ( kx \pm \omega t ) }{ \rho } \\]

where <i>k</i> is the wave number and &omega; is the frequency of the wave. The first function is used in the code, with a wave number of one and a frequency of one. The plus part of the plus-or-minus symbol indicates a wave traveling inwards and the minus part a wave traveling outwards.
