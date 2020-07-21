[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Waves & Resonance]( http://exploratoria.github.io/exhibits/waves/ ) &raquo;

# Spherical Wave

<iframe src=https://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/waves/spherical-wave/spherical-wave.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/waves/spherical-wave/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/waves/spherical-wave/'" />

A <a href=http://scienceworld.wolfram.com/physics/SphericalWave.html>spherical wave</a> is
is an oscillatory motion of all particles with respect to a central point, in this case the origin. Since all particles move move towards and away from the same point, the wave consists of spheres. A spherical wave is a solution to the <a href=https://en.wikipedia.org/wiki/Wave_equation#Scalar_wave_equation_in_three_space_dimensions>wave equation</a> with three dimensions of space.

Spherical waves can exist in reality as the energy radiated from a single point, such as a light bulb or small radio antenna.

### Things to Try

* Rotate the graphic by holding down your mouse and dragging to see that the wave looks the same from all directions

* Click "random" to see the wave traveling through a random distribution of particles

* Change the variable named "amplitude" in the displacement() function to alter the size of the oscillations

* Change the minus sign before the time variable to plus to make the wave move in the opposite direction

* Change the code in the displacement() function to distort the spherical nature of the wave
 
### About the Code

Since it is easier to modify a geometry in Three.js rather than recreate it, the updateScene() function moves the vertices of the geometry. Clicking "lattice" moves them to the orderly positions of the lattice array, while clicking "random" moves them to arbitrary positions. The variable named "balls" is one less than the number of particles along each edge of the geometry.

### A Little Math

Writing the distance from the center point with the coordinates \\( r = \sqrt{ x^2 + y^2 + z^2 } \\), spherical waves can be written as the functions

\\[ \frac{ \sin ( kx \pm \omega t ) }{ r } \hspace{.5in} \text{or} \hspace{.5in} \frac{ \cos ( kx \pm \omega t ) }{ r } \\]

where <i>k</i> is the wave number and &omega; is the frequency of the wave. The first function is used in the code, with a wave number of one and a frequency of one. The plus part of the plus-or-minus symbol indicates a wave traveling inwards and the minus part a wave traveling outwards.
