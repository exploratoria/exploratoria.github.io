[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Heat & Temperature]( http://exploratoria.github.io/exhibits/heat/ ) &raquo;

<center>
# Random Walk
</center>

<span style=display:none>_View as a web page to see the content of this iframe_</span>
<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/heat/random-walk/random-walk.html width=100% height=500px></iframe>

A random walk is the name for the movement of particles in <a href="https://en.wikipedia.org/wiki/Brownian_motion">Brownian motion</a>. At each step of the motion a random vector is added to the line being traced. Since the motion is completely random it can take any shape. The particle could stay right near its initial point the whole time or move away rapidly in any direction. These kinds of motion are possible but statistically unlikely, and the particle generally moves little by little out from the origin.

### Things to Try

* Click "Update View" several times to see different random paths

* Decrease the "countBeforeNewStep" variable in the code to make the motion faster
 
### About the Code

Once a geometry is added to a scene in Three.js it cannot be modified. That is why all vertices of the line are created at once. At each step all vertices but one are moved by the same random vector.

<span style=display:none; >[You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/heat/random-walk/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view as source code' onclick=window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/heat/random-walk/'; />

### A Little Math

The end point of the line can be written as the vector sum \\( \textbf{L} = \sum\limits\_{i} \textbf{l}\_i \\) over the individual random steps of the path. The squared length of this vector is

\\[ \begin{align}
\textbf{L} \cdot \textbf{L} &= \left\[ \sum\_i \textbf{l}\_i \right\] \cdot \left\[ \sum\_j \textbf{l}\_i \right\] \\\\
&= \sum\_i \textbf{l}\_i \cdot \textbf{l}\_i + \sum\_{ i \neq j } \textbf{l}\_i \cdot \textbf{l}\_j \\\\
\textbf{L} \cdot \textbf{L} &= \sum\_i \textbf{l}\_i \cdot \textbf{l}\_i + \sum\_{ i \neq j } | \textbf{l}\_i | | \textbf{l}\_j | \cos \gamma\_{ ij }
\end{align} \\]

Since all directions are equally likely, the angle-dependent terms vanish in an average over angular variables

\\[ \langle \textbf{L} \cdot \textbf{L} \rangle = \sum\_i \langle \textbf{l}\_i \cdot \textbf{l}\_i \rangle \\]

For <i>N</i> steps of equal length <i>l</i>&nbsp;, the average path length is

\\[ L = \sqrt{ \langle \textbf{L} \cdot \textbf{L} \rangle } = \sqrt{ N l^2 } = \sqrt{ N } l \\]
