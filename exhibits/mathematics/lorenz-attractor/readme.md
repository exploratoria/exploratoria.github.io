[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Mathematics & Patterns]( http://exploratoria.github.io/exhibits/mathematics/ ) &raquo;

# Lorenz Attractor

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/mathematics/lorenz-attractor/lorenz-attractor.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/mathematics/lorenz-attractor/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/mathematics/lorenz-attractor/'" />

[Lorenz Attractor - Full Screen](http://exploratoria.github.io/exhibits/mathematics/lorenz-attractor/lorenz-attractor.html)

The famous <a href=https://en.wikipedia.org/wiki/Lorenz_system>Lorenz attractor</a>, a chaotic system that resembles a butterfly.

### Things to Try

* Click the "Update View" button to see several instances of the attractor. The curve starts at a random point each time but the resulting figure looks the same. This is what is meant by an attractor.

* Increase the variable named "multiplier" to see the curve develop faster

* Change the values of the parameters named "beta" (&beta;), "rho" (&rho;) and "sigma" (&sigma;) to alter the nature of the attractor. You may also need to change the value of "scale" in order to see the developing curve, or zoom the view out.
 
### About the Code

Intergration of the differential equations is done with a simple Euler method with a small step size. It is important to calculate all of the changes in spatial coordinates before evaluting the coordinates themselves, since the changes are determined by more than one coordinate value at each step.

Rather than recreate all of the geometry at each step, the JavaScript function shift() is used to remove the first vertex in the geometry on each interation. That saves a lot of computation.

### A Little Math

The Lorenz attractor is the solution of the coupled differential equations

\\[ \begin{align}
\frac{ dx }{ dt } &= \sigma ( y - x ) \\\\
\frac{ dy }{ dt } &= x ( \rho - z ) - y \\\\
\frac{ dz }{ dt } &= x y - \beta z
\end{align} \\]

The fractions are derivatives that describe the rate of change of coordinates along the curve. If you don't know what that means then not to worry! Use this trick: move the denominators of the fractions to the other sides of the equations

\\[ \begin{align}
dx &= \sigma ( y - x ) dt \\\\
dy &= ( x ( \rho - z ) - y ) dt\\\\
dz &= ( x y - \beta z ) dt
\end{align} \\]

and think of the "d" as meaning difference or change in the coordinates. This is how the solution to the equation is found in the code.

The "critical points" of the system are found by setting the right-hand sides of the differential equations equal to zero:

\\[ \begin{split}
\sigma ( y - x ) &= 0 \\\\
x ( \rho - z ) - y &= 0 \\\\
x y - \beta z &= 0
\end{split}
\hspace{.5in} \to \hspace{.5in}
\begin{split}
x = y &= \pm\sqrt{ \beta ( \rho - 1 ) } \\\\
z &= \rho - 1
\end{split} \\]

The locations of the two butterfly wings are most strongly determined by the parameter &rho;.
