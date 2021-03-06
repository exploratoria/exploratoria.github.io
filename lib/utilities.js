
// simple method for importing external JavaScript files
// idea from @theo-armour

function include( pathToScript ) {

	var script = document.createElement( 'script' );
	script.src = pathToScript;
	document.body.appendChild( script );

}

// method to disable MathJax for Firefox users

function disableMathJax() {

	var check = requestAnimationFrame( noMathJax );

	function noMathJax() {

		check = requestAnimationFrame( noMathJax );

		if ( typeof InstallTrigger !== 'undefined' && MathJax ) {
			MathJax.Hub.config.skipStartupTypeset = true;
			cancelAnimationFrame( check );

		}

	}

}

