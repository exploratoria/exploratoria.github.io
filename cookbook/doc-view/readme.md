[Exploratoria]( http://exploratoria.github.io ) &raquo; [Cookbook]( http://exploratoria.github.io/cookbook/ )
docView Read Me
===
<span style=display:none; >[View docView Read Me as web page]( http://exploratoria.github.io/cookbook/doc-view/ "View file as a web page." ) </span>
<input type=button value='View file as source code on GitHub' onclick=window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/cookbook/doc-view/'; />

[docView Full Screen Demo]( http://exploratoria.github.io/cookbook/doc-view/build/index.html )

## Concept

* Provide a very simple JavaScript viewer for HTML web pages, Markdown files and other file formats along with a menu for selecting files
* Menu is always visible

## Features

* Under 150 lines of code
* Beginner/intermediate level JavaScript
* Should work on most types of devices including mobile and tablet
* Use of iframes means content can be almost anything from anywhere
	* Loads HTML files into an IFRAME
	* Example loads STL files into an IFRAME
	* Load MD files into a DIV
		* MD Files are loaded into a DIV so that MD links work in the expected manner because Links in an MD file embedded in an IFRAME cannot break out of the IFRAME
* Menus created using [Markdown]( https://en.wikipedia.org/wiki/Markdown ) markup language
	* Markdown is well supported by GitHub, StackOverflow, Reddit and other sites
	* Menus may contain text and images and more
	* Uses [Showdown]( https://github.com/showdownjs/showdown ) converter 
* If no file is selected, the default Read Me file is opened

## Examples of Usage

[NASA 3D Objects Viewer]( )  
[Three.js Examples](  )  

## Roadmap

* More suitable app name
* More examples of usage

## Notes

The goal here is to establish a simple, standard view/menu system that is flexible enough to support a variety of exhibition types and yet simple enough that it can be adapted by entry level JavaScript programmer

This system is not intended to be a home page or a top page for a particular category of items.

### See also the following similar efforts

* <http://mrdoob.github.io/three.js/examples/>
* <http://stemkoski.github.io/Three.js/>
* <http://www.smartjava.org/content/all-109-examples-my-book-threejs-threejs-version-r63>
* <http://scenejs.org/examples/index.html#scenegraph_firstExample>
* <http://www.babylonjs.com/>

