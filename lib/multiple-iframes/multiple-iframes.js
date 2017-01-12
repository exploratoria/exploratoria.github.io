
    var MIF = {};

    MIF.iframes = [];
    MIF.renderers = [];
    MIF.renderersLimit = 3;

    MIF.animate = function() {

        requestAnimationFrame( MIF.animate );

        for ( var i = 0, iframe, rect; i < MIF.iframes.length; i++ ) {

            iframe = MIF.iframes[ i ];

            rect = iframe.getBoundingClientRect();

            if ( rect.bottom > 0 && rect.top < window.innerHeight ) { MIF.updateView( iframe ); }

        }

    }


    MIF.updateView = function( iframe ) {

        var views, furthestView;

        views = document.getElementsByClassName( 'inView' );

        if ( views.length > MIF.renderersLimit ) {

            furthestView = MIF.renderers.pop();
            furthestView.className = '';
            furthestView.src = '';

        }

        if ( iframe.className == '' ) {

            iframe.src = iframe.sourceFile;
            iframe.className = 'inView';

            MIF.renderers.unshift( iframe );

        }

    }


    MIF.init = function() {

        MIF.iframes = document.getElementsByTagName( 'iframe' );

        for ( var i = 0, iframe; i < MIF.iframes.length; i++ ) {

            iframe = MIF.iframes[ i ];
            iframe.sourceFile = iframe.src;
            iframe.src = '';

        }

        MIF.animate();

    }

    MIF.init();
