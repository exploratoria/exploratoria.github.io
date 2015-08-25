docView Read Me
===
<span style=display:none; >[View docView Read Me as web page]( http://exploratoria.github.io/doc-view/ "View file as a web page." ) </span>

<!--

Remember: you need html anchor with target="_blank" to bust out of iframe...

<input type=button value='View file as source code on GitHub' onclick=window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/doc-view/'; />
-->

<a href=http://exploratoria.github.io/doc-view/latest/ target=_blank >docView Full Screen Demo</a>

## Concept

* Provide a very simple JavaScript web page viewer and menu script
* Menu is always visible

## Features

* Under 100 lines of code
* Beginner/intermediate level JavaScript
* Should work on most types of devices including mobile and tablet
* Use of iframes means content can be almost anything from anywhere
* Menus created using [Markdown]( https://en.wikipedia.org/wiki/Markdown ) markup language
	* Markdown is well supported by GitHub, Reddit and other sites
	* Menus may contain text and images and more
* If no file is selected, the default Read Me file is opened


## Roadmap

* More suitable app name
* Ability to read and reformat Markdown files directly
* Enhance Code Snippet Example
	* Break out into separate cookbook example
	* Enhance xem.html
		* De-minify
		* Toggle auto-update
		* Save file to hard disk
		* Provide a variety of samples dedicated to solving different types of problems
* Add 'view source code'?


## Notes

* Links in Markdown files embedded in iframes cannot 'pop-out' of the iframe. Doing so requires use of the more complicated HTML anchor. Solution: docView should be able to read Markdown files and display in a DIV or in an iframe vis srcdoc=.

## See Also

* <http://mrdoob.github.io/three.js/examples/>
* <http://stemkoski.github.io/Three.js/>
* <http://www.smartjava.org/content/all-109-examples-my-book-threejs-threejs-version-r63>
* <http://scenejs.org/examples/index.html#scenegraph_firstExample>
* http://www.babylonjs.com/

