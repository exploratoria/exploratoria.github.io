
// simple method for importing external JavaScript files
// idea from @theo-armour

function include( pathToScript ) {

	var script = document.createElement( 'script' );
	script.src = pathToScript;
	document.body.appendChild( script );

}


