[Exploratoria]( http://exploratoria.github.io ) &raquo;
Notes
===


## Coding Style & Colophon

### Style

The coding style of an app should follow the style of the most-used library of the app.

In the instance of a [Three.js]( http://threejs.org ) script, the style generally follows [Mr.doob Coding Style]( https://github.com/mrdoob/three.js/wiki/Mr.doob%27s-Code-Style%E2%84%A2 ).

* Code generally follows the Three.js examples coding style more than the source code style
	* Functions are functions not variables
	* Uses init() and animate() functions
	* Loads libraries from GitHub via a CDN
	* No external js or css files other then standard Three.js files
	* In other words, code for dummies

Absolute URLs are recommended for items that would otherwise have issues with loading into Code-Edit-View.


### Browser Support

Many of the scripts in Exploratoria are built using the Three.js library which in turn is based on WebGL.

WebGL runs only on relatively recent computers and browsers

See: <http://caniuse.com/#feat=webgl> for current browser support.

Given the dependence on WebGL, it makes little sense for Exploratoria to support browsers that are not WebGL-enabled.

Furthermore, the intent of Exploratoria is to entice youngsters and oldsters into the joys of programming.

Writing scripts that contain work-arounds to support old browsers is one of the anti-joys of programming.

Thus, we will write scripts for devices and OSs and browsers that support WebGL.

We will leave out the cruft required by old browsers. We will code in a style that is as fresh and as modern as possible.



### Markdown

[Markdown]( https://en.wikipedia.org/wiki/Markdown ) is used extensively with the [Showdown converter]( https://github.com/showdownjs/showdown ).

See [Markdown Basics]( https://help.github.com/articles/markdown-basics/ )


### Fonts

The font used here is the the default 'monospace' font as determined by your browser. This is because it is the most common font used to write scripts.


### Versioning

* Trying out [semantic versioning]( http://semver.org/ )
* See [Version Manage]( http://exploratoria.github.io/sandbox/sandbox/version-manage/index.html ) project for more details


### Content Delivery Networks (CDN)

In order to prevent scripts breaking due to changes in new revsions, Exploratorion links libraries that are used to CDN

CDNs used:

* [CDNJS]( https://cdnjs.com/ )
	* <https://cdnjs.com/libraries/three.js>
* [RawGit]( https://rawgit.com/ )
	* Example: <https://rawgit.com/mrdoob/three.js/r70/examples/js/controls/OrbitControls.js>

As in:

```
<script src=http://rawgit.com/mrdoob/three.js/r71/build/three.min.js ></script>  
<script src=http://rawgit.com/mrdoob/three.js/r71/examples/js/controls/OrbitControls.js ></script>
<script src=http://rawgit.com/mrdoob/three.js/r71/examples/js/libs/stats.min.js ></script>  
```


## Links of Interest

Who and what do we like in terms of content, appearance and behavior?



### JavaScript-based source code editors

[Wikipedia: Comparison of JavaScript-based source code editors]( https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_source_code_editors )

[Ace]( https://ace.c9.io/ )

	* [Projects using Ace]( https://ace.c9.io/#nav=production )

[Orion]( https://orionhub.org/ )

[CodeMirror]( http://codemirror.net/ )
	* Supports [HTML mixed mode]( http://codemirror.net/mode/htmlmixed/ ) highlighting 
	* [Real World Users]( http://codemirror.net/doc/realworld.html )

[Google Trends Report]( https://www.google.com/trends/explore#q=%2Fm%2F0h3lvnt%2C%20orion%20open%20source%2C%20codemirror%2C%20codeenvy%2C%20codeanywhere&cmpt=q&tz=Etc%2FGMT%2B7 )

See also these text editors

[TinyMCE]( http://www.tinymce.com/ )

[CK Editor]( http://ckeditor.com/ )



### Bricks and Mortar Science

[Wikipedia List of Science Museums]( https://en.wikipedia.org/wiki/List_of_science_museums )

[List of science centers in the United States]( https://en.wikipedia.org/wiki/List_of_science_centers_in_the_United_States )

[List of citizen science projects]( https://en.wikipedia.org/wiki/List_of_citizen_science_projects)





### Online Science

<http://www.msichicago.org/online-science/>

<http://scienceonline.com/>

<https://www.time4learning.com/science.shtml>

<https://phet.colorado.edu/>

<http://www.edheads.org/>

<https://lagunita.stanford.edu/courses/Engineering/CS101/Summer2014/about>

<https://www.khanacademy.org/>

<https://www.codecademy.com/>

<http://www.go-lab-project.eu/frontpage>

<http://www.golabz.eu/>

<https://www.zooniverse.org/>

<http://www.citizensciencealliance.org/index.html>

<http://www.planetseed.com/>

<http://www.sciencebuddies.org/science-activities>

<https://www.googlesciencefair.com/en/>

<http://www.informedbynature.org/science-fair-projects/index/>

<https://www.madewithcode.com>

<https://code.org/>

<https://scratch.mit.edu/>

