[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Chemistry]( http://exploratoria.github.io/exhibits/chemistry/ ) &raquo;

# Buckyball

<iframe src=https://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/chemistry/buckyball/buckyball.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/chemistry/buckyball/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/chemistry/buckyball/'" />

A buckyball, or more formally [Buckminsterfullerene](https://en.wikipedia.org/wiki/Buckminsterfullerene), is a molecule made up of sixty carbon atoms. The atoms are located at the vertices of a [truncated icosahedron](https://en.wikipedia.org/wiki/Truncated_icosahedron), which is the same shape as a soccer ball.

### Things to Try

* Change the size of spheres representing atoms and the cylinders representing bonds

* Write out all atom positions by hand to see how the code simplifies the process
 
### About the Code

Rather than explicitly writing out all sixty vertex positions for the atoms, the ones with all positive signs are hard coded and those with combinations of minus signs added in successive steps. The process is cumulative, taking all previous combinations and changing one sign for additional vertex positions. A similar process is used to add the even permutations, except that this must be done in one step to avoid adding too many new vertex positions.

Rather than hard coding the ninety cylinders representing bonds, a simple distance test is applied between pairs of atoms. Only when the distance is equal to two is a cylinder added.

### A Little Math

With the notation \\( \phi = \frac{ 1 + \sqrt{5} }{2} \\) for the [golden ratio](https://en.wikipedia.org/wiki/Golden_ratio), the vertices of a truncated icosahedron are located at the positions

\\[ [ 0, \pm1, \pm3\phi ] \; , \; [ \pm1, \pm(2+\phi), \pm2\phi ] \; , \; [ \pm2, \pm(1+2\phi), \pm\phi ] \\]

and all of their "even permutations", which just means shifting all of the vector components to the right or left once, then once more. All of the vertices lie on a sphere of radius \\( \sqrt{ 9\phi + 10 } \\). The edges are all of length two.
