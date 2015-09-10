[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Heat & Temperature]( http://exploratoria.github.io/exhibits/heat/ ) &raquo;

<center>
# Random Walk
</center>

<span style='display: none'>*View as a web page to see the content of this iframe*</span>
<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/heat/random-walk/random-walk.html style='width:100%; height:500px'></iframe>

A random walk is the name for the movement of particles in <a href="https://en.wikipedia.org/wiki/Brownian_motion">Brownian motion</a>. At each step of the motion a random vector is added to the line being traced. Since the motion is completely random it can take any shape. The particle could stay right near its initial point the whole time or move away rapidly in any direction. These kinds of motion are possible but statistically unlikely, and the particle generally moves little by little out from the origin.

### Things to Try

* Click "Update View" several times to see different random paths

* Try decreasing the "countBeforeNewStep" variable in the code to make the motion faster
 
### About the Code

Once a geometry is added to a scene in Three.js it cannot be modified. That is why all vertices of the line are created at once. At each step all vertices but one are moved by the same random vector.

<span style=display:none; >[You are now in GitHub source code view - click here to view as a web page]( http://exploratoria.github.io/exhibits/heat/random-walk/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view as source code' onclick=window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/heat/random-walk/'; />

### A Little Math

The end point of the line can be written as the vector sum
<nobr><math displaystyle="true">
<mi mathvariant="bold">L</mi>
<mo>=</mo><mo>&sum;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>i</mi></msub>
</math></nobr>
over the individual random steps of the path. The squared length of this vector is

<span style='display: none'>*View as a web page to see the content of this iframe*</span>
<iframe style="text-align: center" srcdoc='
<math displaystyle="true"> 
<mtable displaystyle="true" columnalign="left"><mtr><mtd>
<mi mathvariant="bold">L</mi><mo>&middot;</mo>
  <mi mathvariant="bold">L</mi>
<mo>=</mo><mrow><mo>[</mo><mo>&sum;</mo><msub>
  <mi mathvariant="bold">l</mi><mi>i</mi></msub>
  <mo>]</mo></mrow><mo>&middot;</mo><mrow><mo>[</mo><mo>&sum;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>i</mi></msub><mo>]</mo></mrow>
</mtd></mtr><mtr><mtd>
<mphantom><mi mathvariant="bold">L</mi><mo>&middot;</mo>
  <mi mathvariant="bold">L</mi></mphantom>
<mo>=</mo><mo>&sum;</mo>
<msub><mi mathvariant="bold">l</mi><mi>i</mi></msub><mo>&middot;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>i</mi></msub>
<mo>+</mo><munder><mo>&sum;</mo><mrow><mi>i</mi><mo>&ne;</mo><mi>j</mi></mrow></munder>
<msub><mi mathvariant="bold">l</mi><mi>i</mi></msub><mo>&middot;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>j</mi></msub>
</mtd></mtr><mtr><mtd>
<mi mathvariant="bold">L</mi><mo>&middot;</mo>
  <mi mathvariant="bold">L</mi>
<mo>=</mo><mo>&sum;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>i</mi></msub><mo>&middot;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>i</mi></msub>
<mo>+</mo><munder><mo>&sum;</mo><mrow><mi>i</mi><mo>&ne;</mo><mi>j</mi></mrow></munder>
  <mo stretchy="false">&verbar;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>i</mi></msub>
  <mo stretchy="false">&verbar;</mo>
  <mo stretchy="false">&verbar;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>j</mi></msub>
  <mo stretchy="false">&verbar;</mo>
  <mo>cos</mo><msub><mi>&gamma;</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub>
</mtd></mtr></mtable>
</math>'></iframe>

Since all directions are equally likely, the angle-dependent terms vanish in an average over angular variables

<p style="text-align: center">
<math displaystyle="true">
<mrow><mo>&lang;</mo><mi mathvariant="bold">L</mi><mo>&middot;</mo>
  <mi mathvariant="bold">L</mi><mo>&rang;</mo></mrow>
<mo>=</mo><mo>&sum;</mo><mrow><mo>&lang;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>i</mi></msub><mo>&middot;</mo>
  <msub><mi mathvariant="bold">l</mi><mi>i</mi></msub>
  <mo>&rang;</mo></mrow>
</math></p>

For <i>N</i> steps of equal length <i>l</i>&nbsp;, the average path length is

<p  style="text-align: center">
<math displaystyle="true">
<mi>L</mi><mo>=</mo><msqrt><mrow><mo>&lang;</mo>
  <mi mathvariant="bold">L</mi><mo>&middot;</mo>
  <mi mathvariant="bold">L</mi><mo>&rang;</mo></mrow></msqrt>
<mo>=</mo><msqrt><mi>N</mi><msup><mi>l</mi><mn>2</mn></msup></msqrt>
<mo>=</mo><msqrt><mi>N</mi></msqrt><mspace width=".3em"/><mi>l</mi>
</math></p>
