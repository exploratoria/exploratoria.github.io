var content;

init();

function init() {

	document.body.style.cssText = ' font: 12pt monospace; left: 0; margin: 0 auto; max-width: 900px; position: absolute; right: 0; ';

	content = document.body.appendChild( document.createElement( 'div' ) );

	var reader = document.body.appendChild( document.createElement( 'script' ) );
	reader.onload = function() {

		hashChange();

	}

	reader.src = 'https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.7/showdown.min.js';

	window.addEventListener( 'hashchange', hashChange, false );

}

function hashChange() {

	var fileName = location.hash ? location.hash.split( '#' )[1] : 'readme.md';

	document.title = document.title ? document.title : fileName;

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.responseType = 'text';
	xmlHttp.open( 'GET', fileName, true );

	xmlHttp.onload = function() {

		content.innerHTML = new showdown.Converter().makeHtml( xmlHttp.responseText );

	};

	xmlHttp.send( null );

}
