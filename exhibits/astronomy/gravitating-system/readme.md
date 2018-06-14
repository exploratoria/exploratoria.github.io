[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Astronomy]( http://exploratoria.github.io/exhibits/astronomy/ ) &raquo;

# Gravitating System

<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/astronomy/gravitating-system/gravitating-system.html width=100% height=500px></iframe>

<span style="display: none">_View as a web page to see the content of this iframe_</span>

<span style="display: none"> [You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/astronomy/gravitating-system/index.html 'View file as a web page' ) </span>
<input type=button value="You are now in GitHub web page view - Click here to view as source code" onclick="window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/astronomy/gravitating-system/'" />

This is an <i>n</i>-body system where the masses interact through gravitational forces. It can represent a group of planets, stars or globular galaxies, all of equal mass.

Since there are no external forces acting on the system, the displayed total energy should remain constant. It does not do so exactly due to errors inherent in any numerical approximation of an exact system. The difference of the current energy from the initial value is a measure of the accuracy of the numerical evaluation.

### Things to Try

* Change the number of bodies for a more complex system.

* All masses are assumed to be equal to unity. How would you handle unequal masses in the code?

* Increase the velocity scale and note the change in the energy. When does the system become unbound?

* This exhibit does not account for collisions of the bodies. Adapt the code from [another](http://exploratoria.github.io/exhibits/mechanics/elastic-collisions-in-3d/) exhibit to make the bodies bounce apart at a collision.

### About the Code

The method of integration used here goes by the name of [leapfrog](https://en.wikipedia.org/wiki/Leapfrog_integration). In other methods of integration, the changes to positions and velocities are all calculated at the same time before updating variables. In leapfrog integration, the updates are staggered: first the positions are updated from current velocities, then the velocities from the updated positions. This produces a more stable result for gravitational systems.

### A Little Math

The gravitational potential between two spherically symmetric bodies is

\\[ U\_{ij} = -\frac{ G m\_i m\_j }{ | \mathbf{r}\_i - \mathbf{r}\_j | } \\]

and the force between the two bodies is

\\[ \mathbf{F}\_{ij} = -\nabla U\_{ij}
= -\frac{ G m\_i m\_j }{ | \mathbf{r}\_i - \mathbf{r}\_j |^3 } ( \mathbf{r}\_i - \mathbf{r}\_j ) \\]

With masses set equal to one, this expression is used to evaluate the vector changes in velocity for all pairs of bodies.
