var x, y, z;
var pi = Math.PI;

//equations = {

var equations = function() { this.equations = {
	'apple-surface-i' : {
		'title' : 'Apple Surface I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite54.html',
		'scale' :  5,
		'a' : 4,
		'aMin' : -5,
		'aMax' : 10,
		'aStep' : 0.05,
		'b' : 3.8,
		'bMin' : -5,
		'bMax' : 10,
		'bStep' : 0.05,
		'c' : 10,
		'cMin' : -5,
		'cMax' : 20,
		'cStep' : 0.5,
		'd' : 7.5,
		'dMin' : -5,
		'dMax' : 10,
		'dStep' : 0.05,
		'curve' : function( u, v ) {

			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5);

			x = scale * ( cos( u ) * ( a + b * cos( v ) )  );
			z = scale * ( sin( u ) * ( a + b * cos( v ) )  );
			y = scale * 0.6 * ( ( cos( v ) + sin( v ) * -1 ) * ( 3 + sin( v ) ) * log( 1 - pi * v / c ) + d * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'apple-surface-ii' : {
		'title' : 'Apple II Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite100.html',
		'scale' :  5,
		'a' : 20,
		'aMin' : -10,
		'aMax' : 30,
		'aStep' : 1,
		'b' : 0.25,
		'bMin' : -1,
		'bMax' : 2,
		'bStep' : 0.01,
		'c' : 5,
		'cMin' : -10,
		'cMax' : 20,
		'cStep' : 0.1,
		'd' : 2.3,
		'dMin' : -5,
		'dMax' : 8,
		'dStep' : 0.1,
		'e' : 6,
		'eMin' : -10,
		'eMax' : 10,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -10,
		'fMax' : 5,
		'fStep' : 0.1,
		'R1' : 5,
		'R1Min' : -5,
		'R1Max' : 8,
		'R1Step' : 0.1,
		'R2' : 4.8,
		'R2Min' : -5,
		'R2Max' : 8,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( cos( u ) * ( R1 + R2 * cos( v ) ) + pow( v / pi, a ) );
			z = scale * ( sin( u ) * ( R1 + R2 * cos( v ) ) + b * cos( c * u ) );
			y = scale * ( - d * log( 1 - v * 0.3157 ) + e * sin( v ) + f * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'bell' : {
		'title' : 'Bell',
		'link1' : 'http://www.3d-meier.de/tut3/Seite130.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -10,
		'aMax' : 10,
		'aStep' : 0.1,
		'b' : 2.2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -20,
		'cMax' : 20,
		'cStep' : 2,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 5 * ( v - 0.5 );

			R1 = sqrt( pow( u, c ) + pow( v, c ) );

			x = scale * ( u );
			y = scale * ( b * exp( - pow( a * R1, 2 ) ) );
			z = scale * ( v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'bell-polar' : {
		'title' : 'Bell Polar',
		'link1' : 'http://www.3d-meier.de/tut3/Seite131.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -10,
		'aMax' : 10,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -10,
		'bMax' : 10,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -10,
		'cMax' : 20,
		'cStep' : 2,
		'd' : 2,
		'dMin' : -10,
		'dMax' : 10,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 5 * ( v - 0.5 );

			s = v * cos( u );
			t = v * sin( u );
			R1 = sqrt( pow( s, c ) + pow( t, c) );

			x = scale * ( s );
			y = scale * ( b * exp( - pow( a * R1, d ) ) );
			z = scale * ( t );

			return new THREE.Vector3( x, y, z );
		}
	},


	'bell-wave' : {
		'title' : 'Bell Wave',
		'link1' : 'http://www.3d-meier.de/tut3/Seite132.html',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -2,
		'aMax' : 2,
		'aStep' : 0.01,
		'b' : 1,
		'bMin' : -2,
		'bMax' : 10,
		'bStep' : 0.1,
		'c' : 5,
		'cMin' : -5,
		'cMax' : 8,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -10,
		'dMax' : 10,
		'dStep' : 2,
		'e' : 2,
		'eMin' : -10,
		'eMax' : 10,
		'eStep' : 2,
		'f' : 2,
		'fMin' : -10,
		'fMax' : 10,
		'fStep' : 2,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 5 * ( v - 0.5 );

			R1 = sqrt( pow( u, d )+ pow( v, e) );

			x = scale * ( u );
			y = scale * ( cos( c * R1 ) * b * exp( - pow( a * R1, f ) ) );
			z = scale * ( v );

			return new THREE.Vector3( x, y, z );

		}
	},


	'bent-horns' : {
		'title' : 'Bent Horns',
		'link1' : 'http://www.3d-meier.de/tut3/Seite49.html',
		'scale' :  10,
		'a' : 2,
		'aMin' : -10,
		'aMax' : 10,
		'aStep' : 0.01,
		'b' : 3,
		'bMin' : -10,
		'bMax' : 10,
		'bStep' : 0.05,
		'c' : 2,
		'cMin' : -10,
		'cMax' : 10,
		'cStep' : 0.05,
		'd' : 3,
		'dMin' : -10,
		'dMax' : 10,
		'dStep' : 0.05,
		'e' : 4,
		'eMin' : -10,
		'eMax' : 9,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -10,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -10,
		'gMax' : 5,
		'gStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 4 * pi * ( v - 0.5 );

			x = scale * ( ( a + cos( u ) ) * ( v / b - sin( v ) )  );
			y = scale * ( ( a + cos( u + c * pi / d) ) * ( cos( v ) - f ) + e );
			z = scale * ( ( a + cos( u - c * pi / d) ) * ( cos( v ) - g ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'bicorn-surface' : {
		'title' : 'Bicorn Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite180.html',
		'scale' :  50,
		'a' : 2,
		'aMin' : -10,
		'aMax' : 10,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.01,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( sin( v ) * cos( u ) );
			y = scale * ( cos2( v ) * ( a + cos( v ) ) / ( b + sin2( v ) )  );
			z = scale * ( sin( v ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'bohemian-dome' : {
		'title' : 'Bohemian Dome',
		'link1' : 'http://www.3d-meier.de/tut3/Seite5.html',
		'link2' : 'http://paulbourke.net/geometry/',
		'link3' : 'http://mathworld.wolfram.com/BohemianDome.html',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.01,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( a * cos( u ) );
			y = scale * ( b * cos( v ) + d * sin( u ) );
			z = scale * ( c * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'bonan-jeener-klein-surface' : {
		'title' : 'Bonan Jeener Klein Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite109.html',
		'scale' :  15,
		'a' : 4,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.01,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.01,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.01,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.05,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.05,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.05,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.05,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.05,
		'u' : 80,
		'v' : 50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			W = sin(( a - d ) * u ) + b;

			x = scale * ( a * cos( u ) - cos( a * u ) - ( ( a - e ) / a ) * W * sin( ( a + g ) * u / c ) * cos( v ) );
			y = scale * ( W * sin( v ) );
			z = scale * ( a * sin( u ) - sin( a * u ) + ( ( a - f ) / a ) * W * cos( ( a + h ) * u / c ) * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'borromean-rings' : {
		'title' : 'Borromean Rings',
		'link1' : 'http://www.3d-meier.de/tut3/Seite160.html',
		'scale' :  10,
		'R1' : 1.5,
		'R1Min' : -10,
		'R1Max' : 10,
		'R1Step' : 0.1,
		'R2' : 8,
		'R2Min' : -2,
		'R2Max' : 15,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) - 0.5 * R2 );
			y = scale * ( R1 * sin( v ) + 3 * sin( 3 * u + pi / 2 ) );
			z = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) - R2 * sqrt( 3 ) / 6 );

			return new THREE.Vector3( x, y, z );
		}
	},


	'bow-curve' : {
		'title' : 'Bow Curve',
		'link1' : 'http://www.3d-meier.de/tut3/Seite171.html',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.05,
		'curve' : function( u, v ) {
			u = 1 * ( u - 0.5 );
			v = 1 * ( v - 0.5 );

			x = scale * ( ( b + a * sin( 2 * pi * u ) ) * sin( 4 * pi * v ) );
			y = scale * ( ( c + a * sin( 2 * pi * u ) ) * cos( 4 * pi * v ) );
			z = scale * ( a * cos( 2 * pi * u ) + 3 * cos( 2 * pi * v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'boy-surface' : {
		'title' : 'Boy\'s Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite6.html',
		'link2' : 'http://paulbourke.net/geometry/',
		'scale' :  35,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 3,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 40,
		'v' : 40,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = -pi * ( v - 0.5 );

			R1 = sqrt( a );
			s = b - R1 * sin( c * u ) * sin( d * v );

			x = scale * ( R1 * cos ( v ) * cos( v ) * cos( f * u ) + cos( u ) * sin( g * v ) / s );
			y = scale * ( e * cos ( v ) * cos( v ) / s - 1 );
			z = scale * ( R1 * cos ( v ) * cos( v ) * sin( h * u ) + cos( u ) * sin( h * v ) / s );

			return new THREE.Vector3( x, y, z );
		}
	},


	'breather-surface' : {
		'title' : 'Breather Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite176.html',
		'scale' :  16,
		'a' : 0.4,
		'aMin' : -1,
		'aMax' : 1,
		'aStep' : 0.05,
		'b' : 1,
		'bMin' : 0.01,
		'bMax' : pi,
		'bStep' : 0.05,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.4,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.05,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'u' : 30,
		'v' : 120,
		'curve' : function( u, v ) {
			u = 30 * ( u - 0.5);
			v = 90 * ( v - 0.5 );

			t = b - pow( a, c );
			R1 = sqrt( t );
			s = a * ( ( R1 * cosh( a * u) ) * (R1 * cosh( d * u)) + (a * sin(R1 * v)) * (a * sin(R1 * v)) );

			x = scale * ( - u + ( e * t * cosh( a * u ) * sinh( a * u ) / s ) );
			y = scale * ( f * R1 * cosh( a * u ) * ( - ( R1 * cos( v ) * cos( R1 * v ) ) - ( sin( v ) * sin( R1 * v ) ) ) / s );
			z = scale * ( g * R1 * cosh( a * u ) * ( - ( R1 * sin( v ) * cos( R1 * v ) ) + ( cos( v ) * sin( R1 * v ) ) ) / s );

			return new THREE.Vector3( x, y, z );
		}
	},


	'bullet-nose' : {
		'title' : 'Bullet Nose',
		'link1' : 'http://www.3d-meier.de/tut3/Seite183.html',
		'scale' :  50,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 0.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1.207 * ( v ) + 0.30;

			x = scale * ( a * cos( v ) * cos( u ) );
			y = scale * ( -b / tan( v ) + 1 );
			z = scale * ( a * cos( v ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'catalan-surface' : {
		'title' : 'Catalan Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite29.html',
		'scale' :  15,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : -4,
		'bMin' : -9,
		'bMax' : 5,
		'bStep' : 0.5,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 6 * pi * ( u - 0.5 );
			v = 2.6 * ( v - 0.5 );

			x = scale * ( u - cosh( v ) * sin( u ) );
			y = scale * ( a * cos( u ) * cosh( v ) );
			z = scale * ( -b * sin( u /  c ) * sinh( v /  d) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'catenoid' : {
		'title' : 'Catenoid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite23.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( a * cosh( v / c ) * cos( u ) );
			y = scale * ( b * cosh( v / d ) * sin( u ) );
			z = scale * ( v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cone' : {
		'title' : 'Cone',
		'link1' : 'http://www.3d-meier.de/tut3/Seite85.html',
		'scale' :  25,
		'a' : 0.8,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 0.8,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( a * u * sin( v ) );
			z = scale * ( b * u * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cornucopia' : {
		'title' : 'Cornucopia',
		'link1' : 'http://www.3d-meier.de/tut3/Seite7.html',
		'link1' : 'http://web.eecs.utk.edu/~djacks36/www-home/cs594/hw01/',
		'link1' : 'http://mathworld.wolfram.com/Cornucopia.html',
		'scale' :  10,
		'a' : 0.7,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 0.9,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'c' : 0.7,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.05,
		'd' : 0.9,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.05,
		'e' : 0.7,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.05,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( exp( b * v ) * cos( v ) + exp( a * v ) * cos( u ) * cos( v ) );
			y = scale * ( exp( d * v ) * sin( v ) + exp( c * v ) * cos( u ) * sin( v ) );
			z = scale * ( exp( e * v ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cosine-surface' : {
		'title' : 'Cosine Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite39.html',
		'scale' :  70,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( a * cos( u ) );
			y = scale * ( b * cos( v ) );
			z = scale * ( c * cos( u + v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cosine-surface-ii' : {
		'title' : 'Cosine Surface II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite186.html',
		'scale' :  50,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( a * cos( u ) );
			y = scale * ( b * -cos2( u + v ) + 1);
			z = scale * ( c * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cosine-wave' : {
		'title' : 'Cosine Wave',
		'link1' : 'http://www.3d-meier.de/tut3/Seite128.html',
		'scale' :  50,
		'a' : 0.2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 10,
		'bMin' : -5,
		'bMax' : 15,
		'bStep' : 0.5,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( a * cos( b * sqrt( pow( u, c ) + pow( v, d ) ) )  );
			z = scale * ( v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'costa-surface' : {
		'title' : 'Costa Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite80.html',
		'link1' : 'http://mathworld.wolfram.com/CostaMinimalSurface.html',
		'link1' : 'http://virtualmathmuseum.org/Surface/costa-h-m/costa-h-m.html',
		'link1' : 'http://www.indiana.edu/~minimal/essays/costa/',
		'link1' : 'http://geometrygym.blogspot.com/2010/03/costa-minimal-surface.html',
		'link1' : 'http://demonstrations.wolfram.com/TheTopologyOfCostasMinimalSurface/',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( cos( u ) * ( 2 * v / pi - tanh( v ) )  );
			y = scale * ( cos( u + 2 * pi / 3 ) / cosh( v ) );
			z = scale * ( cos( u - 2 * pi / 3 ) / cosh( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'crescent' : {
		'title' : 'Cresent',
		'link1' : 'http://www.3d-meier.de/tut3/Seite52.html',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 4,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * ( v - 0.5 );

			x = scale * ( ( a + sin( b * pi * u ) * sin( b * pi * v ) ) * sin( c * pi * v ) );
			y = scale * ( ( a + sin( b * pi * u ) * sin( b * pi * v ) ) * cos( c * pi * v ) );
			z = scale * d * ( cos( b * pi * u ) * sin( b * pi * v ) + e * v - f );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cross-cap' : {
		'title' : 'Cross Cap',
		'link1' : 'http://www.3d-meier.de/tut3/Seite8.html',
		'link1' : 'http://paulbourke.net/geometry/crosscap/',
		'scale' :  50,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( c * cos( u ) * sin( a * v ) );
			y = scale * ( d * sin( u ) * sin( b * v ) );
			z = scale * ( pow( cos( v ), e ) - pow( cos( u ), f ) * pow( sin( v ), g )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cross-cup' : {
		'title' : 'Cross Cup',
		'link1' : 'http://www.3d-meier.de/tut3/Seite8.html',
		'scale' :  50,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'curve' : function( u, v ) {
			u = 1 * ( u );
			v = 2 * pi * ( v );

	//			x = scale * ( 1 - u * u + u * u sin( v ) sin( v ) );
	//			y = scale * ( u * u sin( v ) sin( v ) + 2 u * u sin( v ) cos( v ) );
	//			z = scale * ( sqrt( ( 1 - u * u ) / 2) u ( sin( v ) + cos( v ) )  );

			x = scale * ( 1 - pow( u, a ) + pow( u, b ) * pow( sin( v ), c ) );
			y = scale * ( pow( u, d ) * pow( sin( v ), e ) + 2 * pow( u, f ) * sin( v ) * cos( v ) );
			z = scale * ( sqrt( ( 1 - pow( u, g ) ) / h ) * u * ( sin( v ) + cos( v ) ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder' : {
		'title' : 'Cylinder',
		'link1' : 'http://www.3d-meier.de/tut3/Seite103.html',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( a * cos( d * u ) );
			y = scale * ( b * sin( e * u ) );
			z = scale * ( c * v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-cissoid' : {
		'title' : 'Cylinder Cissoid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite155.html',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 3,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( ( R1 + a * pow( v, d )  / ( 1 + pow( v,  e) ) ) * cos( u ) );
			y = scale * ( b * pow( v, f ) / ( 1 + pow( v, 2) ) );
			z = scale * ( ( R1 + c * pow( v, g ) / ( 1 + pow( v, h ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-epicycloid' : {
		'title' : 'Epicycloid Cylinder',
		'link1' : 'http://www.3d-meier.de/tut3/Seite151.html',
		'scale' :  5,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1.5,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 5,
		'R2Min' : -5,
		'R2Max' : 15,
		'R2Step' : 0.5,
		'curve' : function( u, v ) {
			u = 6 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );

			x = scale * ( ( R2 + R1 ) * cos( u ) - a * cos( ( ( R2 + R1 ) / R1 ) * u ) );
			y = scale * ( b * v );
			z = scale * ( ( R2 + R1 ) * sin( u ) - c * sin( ( ( R2 + R1 ) / R1 ) * u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-gauss' : {
		'title' : 'Cylinder Gauss',
		'link1' : 'http://www.3d-meier.de/tut3/Seite157.html',
		'scale' :  15,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 1,
		'R1' : 3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( ( R1 + b * exp( -( pow( a, d ) * pow( v, e ) ) ) ) * cos( u ) );
			y = scale * ( c * v );
			z = scale * ( ( R2 + b * exp( - ( pow( a, f ) * pow( v, g )) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-hypocycloid' : {
		'title' : 'Cylinder Hypocycloid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite152.html',
		'scale' :  5,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 4,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 10,
		'R2Min' : -5,
		'R2Max' : 15,
		'R2Step' : 0.5,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( ( R2 - R1 ) * cos( u ) + a * cos( ( ( R2 - R1 ) / R1 ) * u ) );
			y = scale * ( b * v );
			z = scale * ( ( R2 - R1 ) * sin( u ) - c * sin( ( ( R2 - R1 ) / R1 ) * u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-lemniscate' : {
		'title' : 'Cylinder Lemniskate',
		'link1' : 'http://www.3d-meier.de/tut3/Seite153.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1 * ( v - 0.5 );

			x = scale * ( R1 * cos( u ) / ( 1 + pow( sin( u ), b ) )  );
			y = scale * ( a * v );
			z = scale * ( R2 * sin( u ) * cos( u ) / ( 1 + pow( sin( u ), c ) ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-strophoid' : {
		'title' : 'Cylinder Strophoid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite154.html',
		'scale' :  10,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 1,
		'R1' : -6,
		'R1Min' : -15,
		'R1Max' : 5,
		'R1Step' : 0.5,
		'R2' : -6,
		'R2Min' : -15,
		'R2Max' : 5,
		'R2Step' : 0.5,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 4 * ( v - 0.5 );

			x = scale * ( ( R1 + a * ( pow( v, d ) - 1) / ( pow( v, e ) + 1 ) ) * cos( u ) );
			y = scale * ( b * v  * ( pow( v, f ) - 1) / ( pow( v, f ) + 1 ) );
			z = scale * ( ( R2 + c * ( pow( v, g ) - 1 ) / ( pow( v, h ) + 1 ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'cylinder-witch-of-agnesi' : {
		'title' : 'Cylinder Witch of Agnesi',
		'link1' : 'http://www.3d-meier.de/tut3/Seite156.html',
		'scale' :  5,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 1,
		'R1' : 3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( ( R1 + 2 * a / ( d + pow( v, e ) ) ) * cos( u ) );
			y = scale * ( 2 * b * v  );
			z = scale * ( ( R2 + 2 * c / ( f + pow( v, g ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'dini-surface' : {
		'title' : 'Dinis Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite9.html',
		'link1' : 'http://en.wikipedia.org/wiki/Dini\'s_surface',
		'link1' : 'http://paulbourke.net/geometry/dini/',
		'link1' : 'http://mathworld.wolfram.com/DinisSurface.html',
		'link1' : 'http://virtualmathmuseum.org/Surface/dini/dini.html &lt;&lt; more complex rendition',
		'link1' : 'http://www.geom.uiuc.edu/zoo/diffgeom/surfspace/dini/',
		'link1' : 'http://mathoverflow.net/questions/149842/geodesics-on-the-twisted-pseudosphere-dinis-surface',
		'link1' : 'https://www.vismath.eu/en/3d-models/laser-in-glass-dini-surface',
		'link1' : 'http://www.levygallery.com/inventory/hiroshi_sugimoto/03.html',
		'scale' :  35,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.2,
		'dMin' : -2,
		'dMax' : 2,
		'dStep' : 0.01,
		'e' : 2,
		'eMin' : -1,
		'eMax' : 5,
		'eStep' : 0.01,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 4 * pi * ( u );
			v = 2 * ( v ) + 0.001;

			x = scale * ( a * cos( u ) * sin( v ) );
			y = scale * ( b * sin( u ) * sin( v ) );
			z = scale * ( c * cos( v ) + log( tan( v / e ) ) + d * u );

			return new THREE.Vector3( x, y, z );
		}
	},


	'disc' : {
		'title' : 'Disc',
		'link1' : 'http://www.3d-meier.de/tut3/Seite125.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 5 * ( v - 0.5 );

			x = scale * ( a * v * cos( c * u ) );
			y = scale * ( 0 );
			z = scale * ( b * v * sin( d * u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'double-cone' : {
		'title' : 'Double Cone',
		'link1' : 'http://www.3d-meier.de/tut3/Seite113.html',
		'scale' :  50,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1 * ( v );

			x = scale * ( a * v * cos( u ) );
			y = scale * ( b * ( v - 1 ) * cos( u + 2 * pi / 3 ) );
			z = scale * ( c * ( 1 - v ) * cos( u - 2 * pi / 3 ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'drop-i' : {
		'title' : 'Drop',
		'link1' : 'http://www.3d-meier.de/tut3/Seite44.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( R1 * ( a - b * cos( u ) ) * sin( u ) * cos( v ) );
			y = scale * ( R2 * ( c - d * cos( u ) ) * sin( u ) * sin( v ) );
			z = scale * ( e * cos( f * u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'drop-ii' : {
		'title' : 'Drop II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite104.html',
		'scale' :  50,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( R1 * cos( v * b) * cos( u * c) );
			y = scale * ( sin( v * d) * cos( u * e ) );
			z = scale * ( R2 * sin( u - a ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'dupin-cyclide' : {
		'title' : 'Dupin Cyclide',
		'link1' : 'http://www.3d-meier.de/tut3/Seite68.html',
		'scale' :  5,
		'a' : 5.5,
		'aMin' : -5,
		'aMax' : 10,
		'aStep' : 0.1,
		'b' : 5,
		'bMin' : -5,
		'bMax' : 10,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 3,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );
			h = a - c * cos( u ) * cos( v )

			x = scale * ( R1 * ( d * ( c - a * cos( u ) * cos( v ) ) + b * b * cos( u ) ) / h );
			y = scale * ( R2 * ( b * sin( u ) * ( a - d * cos( v ) ) ) / h );
			z = scale * ( b * sin( v ) * ( c * cos( u ) - d ) / h );

			return new THREE.Vector3( x, y, z );
		}
	},


	'egg' : {
		'title' : 'Egg',
		'link1' : 'http://www.3d-meier.de/tut3/Seite87.html',
		'scale' :  25,
		'a' : 1.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.05,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.05,
		'c' : 1.4,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.05,
		'd' : 1.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1.4,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'R1' : 2.2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 4,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = b * ( u );  // unusual to have coefficient here...
			v = 2 * pi * ( v );

			x = scale * R1 * ( a * sqrt( u * ( u - b ) * ( u - c ) ) * sin( v ) );
			y = scale * R2 * ( u - 0.5);
			z = scale * R1 * ( d * sqrt( u * ( u - e ) * ( u - f ) ) * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'eight-surface' : {
		'title' : 'Eight Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite41.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( cos( u ) * sin( 2 * v ) );
			y = scale * ( sin( u ) * sin( 2 * v ) );
			z = scale * ( sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'ellipsoid' : {
		'title' : 'Ellipsoid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite40.html',
		'scale' :  50,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( a * cos( u ) * sin( v ) );
			y = scale * ( b * sin( u ) * sin( v ) );
			z = scale * ( c * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'enneper-surface' : {
		'title' : 'Ennepers Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite10.html',
		'link1' : 'http://en.wikipedia.org/wiki/Enneper_surface',
		'link1' : 'http://paulbourke.net/geometry/ennepers/',
		'link1' : 'https://secure.msri.org/about/sgp/jim/geom/minimal/library/ennepern/z-index.html',
		'link1' : 'http://blogs.ams.org/visualinsight/2013/11/01/enneper-surface/',
		'scale' :  8,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 5 * ( v - 0.5 );

			var x = scale * ( u - u * u * u / 3 + u * v * v );
			var y = scale * ( v - v * v * v / 3 + v * u * u );
			var z = scale * ( u * u - v * v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'enneper-surface-polar' : {
		'title' : 'Enneper Surface Polar *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite134.html',
		'scale' :  10,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 3,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 3,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 15,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2.5 * ( v );

			s = v * cos( u );
			t = v * sin( u );

			x = scale * R1 * ( s - pow( s, a ) / b + s * pow( t, c ) );
			y = scale * R2 * ( t - pow( t, d  )/ e + t * pow( s, f ) );
			z = scale * R1 * ( pow( s, g ) - h * s * t );

			return new THREE.Vector3( x, y, z );
		}
	},


	'facing-snail' : {
		'title' : 'Facing Snail',
		'link1' : 'http://www.3d-meier.de/tut3/Seite105.html',
		'scale' :  50,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 1 * pi * ( v  );

			x = scale * ( cos( v ) * cos( u ) );
			y = scale * ( sin( v ) * cos( u ) );
			z = scale * ( ( 1 - a * v ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'fish-surface' : {
		'title' : 'Fish Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite47.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = pi * ( u );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( cos( u ) - cos( 2 * u ) ) * cos( v ) / 4 );
			y = scale * ( ( sin( u ) - sin( 2 * u ) ) * sin( v ) / 4 );
			z = scale * ( cos( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'folium' : {
		'title' : 'Folium',
		'link1' : 'http://www.3d-meier.de/tut3/Seite77.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( cos( u ) * ( 2 * v / pi - tanh( v ) )  );
			y = scale * ( cos( u + 2 * pi / 3 ) / cosh( v ) );
			z = scale * ( cos( u - 2 * pi / 3 ) / cosh( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'fresnel-elastic-surface' : {
		'title' : 'Fresnel Elastic Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite158.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( ( c * c / a ) * ( ( cos( u ) * cos( u ) ) / ( sin( v ) * sin( v ) + c * c * cos( v ) * cos( v ) * ( cos( u ) * cos( u ) / a * a + sin( u ) * sin( u ) / b * b ) ) ) );
			y = scale * ( ( c * c / b ) * ( ( sin( u ) * cos( v ) ) / ( sin( v ) * sin( v ) + c * c * cos( v ) * cos( v ) * ( cos( u ) * cos( u ) / a * a + sin( u ) * sin( u ) / b * b ) ) ) );
			z = scale * ( c * ( ( sin( v ) ) / ( sin( v ) * sin( v ) + c * c * cos( v ) * cos( v ) * ( cos( u ) * cos( u ) / a * a + sin( u ) * sin( u ) / b * b ) ) ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'funnel' : {
		'title' : 'Funnel',
		'link1' : 'http://www.3d-meier.de/tut3/Seite27.html',
		'scale' :  35,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 ) + 0.0001;
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( u * cos( v ) );
			y = scale * ( u * sin( v ) );
			z = scale * ( log( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'guimard-surface' : {
		'title' : 'Guimard Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite70.html',
		'scale' :  50,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 0.5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );

			x = scale * ( ( ( 1 - u ) * a + u * b ) * cos( v )  );
			y = scale * ( b * u * sin( v ) );
			z = scale * ( c * u * sin( v ) * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'handkerchief-surface' : {
		'title' : 'Handkerchief Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite11.html',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( pow( u, 3 )/ 3 + u * pow( v, 2 ) + 2 * ( pow( u, 2) - pow( v, 2 ) ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'helicoid' : {
		'title' : 'Helicoid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite24.html',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( u * cos( v ) );
			y = scale * ( u * sin( v ) );
			z = scale * ( 1 * v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'henneberg-surface' : {
		'title' : 'Henneberg Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite32.html',
		'scale' :  2,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( 2 * cos( v ) * sinh( u ) - 0.667 * cos( 3 * v ) * sinh( 3 * u ) );
			y = scale * ( 2 * sin( v ) * sinh( u ) + 0.667 * sin( 3 * v ) * sinh( 3 * u ) );
			z = scale * ( 2 * cos( 2 * v ) * cosh( 2 * u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'horn' : {
		'title' : 'Horn',
		'link1' : 'http://www.3d-meier.de/tut3/Seite48.html',
		'scale' :  25,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 1 * ( u );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( a + u * cos( v ) ) * sin( b * pi * u ) );
			y = scale * ( ( a + u * cos( v ) ) * cos( b * pi * u ) + c * u );
			z = scale * ( u * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'hyperbolic-helicoid' : {
		'title' : 'Hyperbolic Helicoid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite26.html',
		'scale' :  90,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( sinh( v ) * cos( 3 * u ) / ( 1 + cosh( u ) * cosh( v ) )  );
			y = scale * ( sinh( v ) * sin( 3 * u ) / ( 1 + cosh( u ) * cosh( v ) )  );
			z = scale * ( cosh( v ) * sinh( u ) / ( 1 + cosh( u ) * cosh( v ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'hyperbolic-octahedron' : {
		'title' : 'Hyperbolic Octahedron *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite50.html',
		'scale' :  80,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 0,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 0,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * R1 * ( pow( ( cos( u - d ) * cos( v ) ), a ) );
			y = scale * R2 * ( pow( sin( u - e ) * cos( v ), b ) );
			z = scale * R1 * ( pow( sin( v - f ), c ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'hyperbolic-paraboloid' : {
		'title' : 'Hyperbolic Paraboloid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite99.html',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( u * v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'hyperboloid' : {
		'title' : 'Hyperboloid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite30.html',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( 1 * cosh( v ) * cos( u ) );
			y = scale * ( 1 * cosh( v ) * sin( u ) );
			z = scale * ( 1 * sinh( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'isolator' : {
		'title' : 'Isolator',
		'link1' : 'http://www.3d-meier.de/tut3/Seite86.html',
		'scale' :  15,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 0.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * 2 * ( u );
			y = scale * ( ( a + b * sin( c * u * 2 * pi ) ) * sin( v ) );
			z = scale * ( ( a + b * sin( c * u * 2 * pi ) ) * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'jeener-klein-surface' : {
		'title' : 'Jeener Klein Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite108.html',
		'scale' :  25,
		'a' : 2,
		'aMin' : 0,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 4,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
/*
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
*/
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );

			W = W = ( ( b + 1 ) / 4 ) * cos( ( d + 1 ) * u + pi / c ) + sqrt( a )

			x = scale * ( b * cos( u ) + cos( b * u ) - W * sin( ( b - 1 ) * u / 2 ) * cos( v ) );
			y = scale * ( W * sin( v ) );
			z = scale * ( b * sin( u ) - sin( b * u ) - W * cos( ( b - 1 ) * u / 2 ) * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'jet-surface' : {
		'title' : 'Jet Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite43.html',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( ( 1 - cosh( u ) ) * sin( u ) * cos( v ) / 2 );
			y = scale * ( ( 1 - cosh( u ) ) * sin( u ) * sin( v ) / 2 + 1);
			z = scale * ( cosh( u ) - 6);

			return new THREE.Vector3( x, y, z );
		}
	},


	'kappa-surface' : {
		'title' : 'Kappa Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite182.html',
		'scale' :  75,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1.01 * ( v ) + 0.5;

			x = scale * ( a * cos( v ) * cos( u ) );
			y = scale * ( - a * cos( v ) / tan( v ) );
			z = scale * ( a * cos( v ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'kidney-surface' : {
		'title' : 'Kidney Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite42.html',
		'scale' :  15,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( cos( u ) * ( 3 * cos( v ) - cos( 3 * v ) )  );
			y = scale * ( sin( u ) * ( 3 * cos( v ) - cos( 3 * v ) )  );
			z = scale * ( 3 * sin( v ) - sin( 3 * v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'klein-bottle' : {
		'title' : 'Klein Bottle *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite12.html',
		'link1' : 'http://paulbourke.net/geometry/klein/',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 40,
		'v' : 40,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * R1 * ( cos( u ) * ( a + sin( v ) * cos( u / b ) - sin( 2 * v ) * sin( u / 2 ) / c ) );
			y = scale * R2 * ( sin( u ) * ( d + sin( v ) * cos( u / e ) - sin( 2 * v ) * sin( u / 2 ) / f ) );
			z = scale * R1 * ( sin( u / g ) * sin( v ) + cos( u / 2 ) * sin( 2 * v ) / h );

			return new THREE.Vector3( x, y, z );
		}
	},


	'klein-cycloid' : {
		'title' : 'Klein Cycloid *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite111.html',
		'scale' :  5,
		'a' : 10,
		'aMin' : -5,
		'aMax' : 15,
		'aStep' : 0.1,
		'b' : 5,
		'bMin' : -5,
		'bMax' : 15,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 10,
		'dMin' : -5,
		'dMax' : 15,
		'dStep' : 0.1,
		'e' : 5,
		'eMin' : -5,
		'eMax' : 15,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 10,
		'gMin' : -5,
		'gMax' : 15,
		'gStep' : 0.1,
		'h' : 5,
		'hMin' : -5,
		'hMax' : 15,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 200,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * b * c * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * R1 * ( cos( u / c ) * cos( u / b ) * ( a + cos( v ) ) + sin( u / b ) * sin( v ) * cos( v ) );
			y = scale * R2 * ( sin( u / f ) * cos( u / e ) * ( d + cos( v ) ) + sin( u / e ) * sin( v ) * cos( v ) );
			z = scale * R1 * ( - sin( u / h ) * ( g + cos( v ) ) + cos( u / h ) * sin( v ) * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'kuen-surface' : {
		'title' : 'Kuens Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite55.html',
		'link1' : 'http://paulbourke.net/geometry/kuen/',
		'scale' :  50,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 4.3 * pi * ( u - 0.5 );
			v = 3.11 * ( v )  + 0.035;

			r = c + pow( u, a ) * pow( sin( v ), b );

			x = scale * R1 * ( ( d * ( cos( u ) + u * sin( u ) ) * sin( v ) ) / r );
			y = scale * R2 * ( ( e * ( -u * cos(u) + sin(u)) * sin( v ) ) / r );  // paul bourke's version
			z = scale * R1 * ( h * log( tan( v / f ) ) + g * cos( v ) / r );

			return new THREE.Vector3( x, y, z );
		}
	},


	'lemniscape' : {
		'title' : 'Lemniscape *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite78.html',
		'link1' : 'http://paulbourke.net/geometry/lemniscape/',
		'scale' :  100,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = pi * ( u );
			v = pi * ( v );

			x = scale * R1 * ( cos( v ) * sqrt( abs( sin( a * u ) ) ) * cos( u ) );
			y = scale * R2 * ( cos( v ) * sqrt( abs( sin( b * u ) ) ) * sin( u ) );
			z = scale * R1 * 0.00005 * ( pow( x, c ) - pow( y, d ) + e * x * y * pow( tan( v ),  f ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'lemon-surface' : {
		'title' : 'Lemon Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite135.html',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( sqrt( R2 * R2 - u * u ) - R1 ) * sin( v ) );
			y = scale * ( u );
			z = scale * ( ( sqrt( R2 * R2 - u * u ) - R1 ) * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'lochdiscus' : {
		'title' : 'Lochdiskus',
		'link1' : 'http://www.3d-meier.de/tut3/Seite119.html',
		'scale' :  75,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( sin( u ) / ( a + sin( v ) )  );
			y = scale * ( cos( v ) / b );
			z = scale * ( cos( u ) / ( a + sin( v ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'lockdisk' : {
		'title' : 'Lockdisk',
		'link1' : 'http://www.3d-meier.de/tut3/Seite114.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 3 * ( v ) + 1;

			x = scale * ( sin( u ) / ( sqrt( 2 ) + sin( v ) )  );
			y = scale * ( cos( u ) / ( sqrt( 2 ) + sin( v ) )  );
			z = scale * ( cos( u ) / ( 1 + sqrt( 2 ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'loop' : {
		'title' : 'Loop',
		'link1' : 'http://www.3d-meier.de/tut3/Seite66.html',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 1.5 * ( u );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( sin( v ) * cos( u ) );
			y = scale * ( 2 * cos( v ) );
			z = scale * ( 4 * sin( v ) * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'maeder-owl' : {
		'title' : 'Maeders Owl *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite35.html',
		'scale' :  100,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1.5,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 3,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 4 * pi * ( u - 0.5 );
			v = 1 * ( v - 0.5 );

			x = scale * R1 * ( v * cos( u ) - a * pow( v, b ) * cos( c * u ) );
			y = scale * R2 * ( -v * sin( u ) - d * pow( v, e ) * sin( f * u ) );
			z = scale * R1 * ( 0.25 * exp( g, log( v ) ) * cos( h * u / 2) / 3 );

			return new THREE.Vector3( x, y, z );
		}
	},


	'menn-surface' : {
		'title' : 'Menn Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite71.html',
		'scale' :  90,
		'a' : 5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 1 * ( u - 0.5 );
			v = 1 * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( a * u * u * u * u + u * u * v - v * v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'milk-carton' : {
		'title' : 'Milk Carton',
		'link1' : 'http://www.3d-meier.de/tut3/Seite72.html',
		'scale' :  50,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( a * ( 1 + u ) * cos( v ) );
			y = scale * ( a * ( 1 - u ) * sin( v ) );
			z = scale * ( u );

			return new THREE.Vector3( x, y, z );
		}
	},


	'mobius-band' : {
		'title' : 'Moebius Strip',
		'link1' : 'http://www.3d-meier.de/tut3/Seite13.html',
		'link1' : 'http://paulbourke.net/geometry/mobius/',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( cos( u ) + v * cos( u / 1 ) * cos ( u ) );
			y = scale * ( sin( u ) + v * cos( u / 2 ) * sin( u ) );
			z = scale * (  v *  sin( u / 2 ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'monkey-saddle' : {
		'title' : 'Monkey Saddle',
		'link1' : 'http://www.3d-meier.de/tut3/Seite14.html',
		'link1' : 'http://paulbourke.net/geometry/',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( u * u * u - 3 * u * v * v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'paper-bag' : {
		'title' : 'Paper Bag',
		'link1' : 'http://www.3d-meier.de/tut3/Seite106.html',
		'scale' :  15,
		'a' : 2.47,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : -1.26,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * ( v );

			x = scale * ( v * cos( u ) );
			y = scale * ( ( v + b * u ) * sin( u ) );
			z = scale * ( a * v * v  - 6 );

			return new THREE.Vector3( x, y, z );
		}
	},


	'paraboloid' : {
		'title' : 'Paraboloid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite25.html',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( 1 * v * cos( u ) );
			y = scale * ( 1 * v * sin( u ) );
			z = scale * ( 1 * v * v  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'pillow-shape' : {
		'title' : 'Pillow Shape',
		'link1' : 'http://www.3d-meier.de/tut3/Seite46.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = pi * ( u );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( cos( u ) );
			y = scale * ( cos( v ) );
			z = scale * ( 0.8 * sin( u ) * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'piriform-surface' : {
		'title' : 'Piriform Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite181.html',
		'scale' :  100,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 0.5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 0.5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( b * ( cos( v ) * ( c + sin( v ) ) ) * cos( u ) );
			y = scale * ( a * ( c + sin( v ) )  );
			z = scale * ( b * ( cos( v ) * ( c + sin( v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'pisot-triaxial' : {
		'title' : 'Pisot Triaxial *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite115.html',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.655866,
		'dMin' : -1,
		'dMax' : 1,
		'dStep' : 0.00001,
		'e' : 0.74878,
		'eMin' : -1,
		'eMax' : 1,
		'eStep' : 0.00001,
		'f' : 0.868837,
		'fMin' : -1,
		'fMax' : 1,
		'fStep' : 0.00001,
		'g' : 1.03002,
		'gMin' : 0,
		'gMax' : 2,
		'gStep' : 0.00001,
		'h' : 1.40772,
		'hMin' : 0,
		'hMax' : 2,
		'hStep' : 0.00001,
		'i' : 2.43773,
		'iMin' : 1,
		'iMax' : 3,
		'iStep' : 0.00001,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * R1 * ( d * cos( g + u ) * ( a + cos( v ) )  );
			y = scale * R2 * ( e * cos( h - u ) * ( b + 0.868837 * cos( 2.43773 + v ) )  );
			z = scale * R1 * ( f * cos( i + u ) * ( c + 0.495098 * cos( 0.377696 - v ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'plane' : {
		'title' : 'Plane',
		'link1' : 'http://www.3d-meier.de/tut3/Seite124.html',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 5 * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( 0 );
			z = scale * ( v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'plucker-conoid' : {
		'title' : 'Plückers Conoid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite15.html',
		'link1' : 'http://paulbourke.net/geometry/',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );

			x = scale * ( u * sqrt( 1 - v * v ) );
			y = scale * ( u * v );
			z = scale * ( 1 - v * v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'pseudo-cross-cap' : {
		'title' : 'Pseudo Cross Cap',
		'link1' : 'http://www.3d-meier.de/tut3/Seite51.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5);
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( 1 - u * u ) * sin( v ) );
			y = scale * ( ( 1 - u * u ) * sin( 2 * v ) );
			z = scale * ( u );

			return new THREE.Vector3( x, y, z );
		}
	},


	'pseudosphere' : {
		'title' : 'Pseudosphere',
		'link1' : 'http://www.3d-meier.de/tut3/Seite31.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 1 * pi * ( v ) + 0.05;

			x = scale * ( cos( u ) * sin( v ) );
			y = scale * ( sin( u ) * sin( v ) );
			z = scale * ( cos( v ) + log( tan( v / 2) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'richmond-surface' : {
		'title' : 'Richmond Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite36.html',
		'scale' :  25,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 3 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );

			x = scale * ( ( -3 * u - u*u*u*u*u + 2 * u*u*u * v*v + 3 * u * v*v*v*v ) / ( 6 * ( u*u + v*v ) ) );
			y = scale * ( ( -2 * v - 3 * u*u*u*u * v - 2 * u*u * v*v * v + v*v*v*v*v ) / ( 6 * ( u*u + v*v ) ) );
			z = scale * ( u );

			return new THREE.Vector3( x, y, z );
		}
	},


	'roman-surface' : {
		'title' : 'Steiners Roman Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite16.html',
		'link1' : 'http://curvebank.calstatela.edu/romansurfaces/romansurfaces.htm',
		'link1' : 'http://mathworld.wolfram.com/RomanSurface.html',
		'link1' : 'http://jalape.no/math/steintxt.htm',
		'link1' : 'http://paulbourke.net/geometry/steiner/',
		'scale' :  100,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 20,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

	// 3d-mieir.de
	//			x = scale * ( 2 * u * cos( v ) * sqrt( 1 - u * u ) );
	//			y = scale * ( 2 * u * sin( v ) * sqrt( 1 - u * u ) );
	//			z = scale * ( 1 - 2 * u * u * cos( v ) * cos( v ) );

	// paulburke
			x = scale * R1 * ( pow( cos( v ), a ) * sin( b * u ) / c );
			y = scale * R2 * ( sin( u ) * sin( d * v ) / e );
			z = scale * R1 * ( cos( u ) * sin( f * v ) / g );

			return new THREE.Vector3( x, y, z );
		}
	},


	'roundabout' : {
		'title' : 'Roundabout',
		'link1' : 'http://www.3d-meier.de/tut3/Seite150.html',
		'scale' :  70,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( pow( abs( u ) - 1, 2 ) * cos( v ) );
			y = scale * ( u );
			z = scale * ( pow( abs( u ) - 1, 2 ) * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'scherk-surface' : {
		'title' : 'Scherk Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite37.html',
		'scale' :  25,
//		'a' : 2,
//		'aMin' : -5,
//		'aMax' : 5,
//		'aStep' : 0.1,
//		'b' : 2,
//		'bMin' : -5,
//		'bMax' : 5,
//		'bStep' : 0.1,
		'c' : 0.99,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
//		'd' : 2,
//		'dMin' : -5,
//		'dMax' : 5,
//		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( v );
			z = scale * ( log( cos( c * u ) / cos( c * v ) ) / c );

			return new THREE.Vector3( x, y, z );
		}
	},


	'seashell' : {
		'title' : 'Seashell',
		'link1' : 'http://www.3d-meier.de/tut3/Seite18.html',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 5,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
/*
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
*/
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
//		'R2' : 1,
//		'R2Min' : -5,
//		'R2Max' : 5,
//		'R2Step' : 0.1,
		'u' : 20,
		'v' : 50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 3 * ( v - 0.5 );
			h = 1 - 0.5 * v;

			x = scale * ( a * h * cos( R1 * v * pi ) * ( 1 + cos( u * pi ) ) + c * cos( R1 * v * pi ) );
			y = scale * ( a * h * sin( R1 * v * pi ) * ( 1 + cos( u * pi ) ) + c * sin( R1 * v * pi ) );
			z = scale * ( b * 0.5 * v + a * h * sin( u * pi ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'shoe-surface' : {
		'title' : 'Shoe Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite19.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( v + 1 );
			z = scale * ( u * u * u / 3 - v * v / 2 );

			return new THREE.Vector3( x, y, z );
		}
	},


	'sievert-surface' : {
		'title' : 'Sievert Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite185.html',
		'scale' :  75,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'curve' : function( u, v ) {
			u = 1 * pi * ( u - 0.5 );
			v = 3 * ( v ) + 0.03;

			p = -u / sqrt( c + 1 ) + Math.atan( tan (u) * sqrt( c + 1 ) );
			a = 2 / ( c + 1 - c * sin( v ) * sin( v ) * cos( u ) * cos( v ) );
			R1 = a * sqrt( ( c + 1 ) * ( 1 + c * sin( u ) * sin( u ) ) ) * sin( v ) / sqrt( c );

			x = scale * ( R1 * cos( p ) );
			y = scale * ( R1 * sin( p ) );
			z = scale * ( ( log( tan( v / 2 ) ) + a * ( c + 1 ) * cos( v ) ) / sqrt( c ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'sine-cone' : {
		'title' : 'Sine Cone',
		'link1' : 'http://www.3d-meier.de/tut3/Seite136.html',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'curve' : function( u, v ) {
			u = 5 * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( u * cos( v ) );
			y = scale * ( a * u * cos( b * v ) );
			z = scale * ( u * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'sine-surface' : {
		'title' : 'Sine Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite20.html',
		'scale' :  50,
		'curve' : function( u, v ) {

			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( sin( u ) );
			y = scale * ( sin( v  ) );
			z = scale * ( sin( u + v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'sine-wave' : {
		'title' : 'Sinus Wave',
		'link1' : 'http://www.3d-meier.de/tut3/Seite127.html',
		'scale' :  25,
		'a' : 0.2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 10,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 4,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( a * sin( b * sqrt( u * u + v * v ) )  );
			z = scale * ( v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'snail-surface' : {
		'title' : 'Snail Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite38.html',
		'scale' :  8,
		'curve' : function( u, v ) {
			u = 3 * pi * ( u );
			v = 2.8 * ( v - 0.5 );

			x = scale * ( u * cos( v ) * sin( u ) );
			y = scale * ( u * cos( u ) * cos( v ) );
			z = scale * ( -u * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'soucoupoid' : {
		'title' : 'Soucoupoid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite133.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v );

			x = scale * ( cos( u ) * cos( v ) );
			y = scale * ( pow( sin( u ), 3 ) );
			z = scale * ( cos( u ) * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-double' : {
		'title' : 'Sphere Double',
		'link1' : 'http://www.3d-meier.de/tut3/Seite192.html',
		'scale' :  25,
		'a' : 25,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : -25,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 2,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( R1 * sin( u ) * cos( v ) );
			y = scale * ( R1 * cos( u ) ) + a;
			z = scale * ( R1 * sin( u ) * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-i' : {
		'title' : 'Kugel I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite120.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 1 * pi * ( v  );

			x = scale * ( sin( u ) * cos( v ) );
			y = scale * ( cos( u ) );
			z = scale * ( sin( u ) * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-ii' : {
		'title' : 'Sphere II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite121.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( cos( u ) * cos( v ) );
			y = scale * ( sin( v ) );
			z = scale * ( sin( u ) * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-iii' : {
		'title' : 'Sphere III',
		'link1' : 'http://www.3d-meier.de/tut3/Seite122.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 10 * ( u - 0.5 );
			v = 10 * ( v - 0.5 );

			x = scale * ( 2 * u / ( 1 + u * u + v * v ) );
			y = scale * ( ( u * u + v * v - 1 ) / ( 1 + u * u + v * v ) );
			z = scale * ( 2 * v / ( 1 + u * u + v * v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'sphere-iv' : {
		'title' : 'Sphere IV',
		'link1' : 'http://www.3d-meier.de/tut3/Seite123.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 10 * ( u );
			v = 20 * ( v - 0.5 );

			x = scale * ( 2 * u * ( 1 - v * v ) / ( ( 1 + u * u ) * ( 1 + v * v ) )  );
			y = scale * ( ( 1 - u * u ) / ( 1 + u * u ) );
			z = scale * ( ( 4 * u * v ) / ( ( 1 + u * u ) * ( 1 + v * v ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-archimedes' : {
		'title' : 'Spiral Archimedes',
		'link1' : 'http://www.3d-meier.de/tut3/Seite187.html',
		'scale' :  5,
		'h' : 3,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 200,
		'v' : 2,
		'curve' : function( u, v ) {
			u = 10 * pi * ( u );
			v = 1 * ( v - 0.5 );

			x = scale * ( u * cos( u ) );
			y = scale * ( h * v );
			z = scale * ( u * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-fermat' : {
		'title' : 'Spiral Fermat',
		'link1' : 'http://www.3d-meier.de/tut3/Seite189.html',
		'scale' :  25,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 200,
		'v' : 2,
		'curve' : function( u, v ) {
			u = 30 * ( u - 0.5 );
			v = 1 * ( v - 0.5 );

			x = scale * ( sqrt( u ) * cos( u ) );
			y = scale * ( h * v );
			z = scale * ( sqrt( u ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-hyperbolic' : {
		'title' : 'Spiral Hyperbolic',
		'link1' : 'http://www.3d-meier.de/tut3/Seite188.html',
		'scale' :  50,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 200,
		'v' : 2,
		'curve' : function( u, v ) {
			u = 4 * pi * u ;
			v = 1 * ( v - 0.5 );

			x = scale * ( cos( u ) / u );
			x = x > 100 ? 100 : x;
			y = scale * ( h * v );
			z = scale * ( sin( u ) / u );

			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-logarithmic' : {
		'title' : 'Spiral Logarithmic',
		'link1' : 'http://www.3d-meier.de/tut3/Seite191.html',
		'scale' :  25,
		'a' : 0.1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 200,
		'v' : 2,
		'curve' : function( u, v ) {
			u = 5 * pi * ( u - 0.5 );
			v = 1 * ( v - 0.5 );

			x = scale * ( exp( a * u ) * cos( u ) );
			y = scale * ( h * v );
			z = scale * ( exp( a * u ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-tanh' : {
		'title' : 'Spiral Tanh',
		'link1' : 'http://www.3d-meier.de/tut3/Seite190.html',
		'scale' :  35,
		'a' : 8,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'u' : 200,
		'v' : 2,
		'curve' : function( u, v ) {
			u = 1.5 * ( u );
			v = 1 * ( v - 0.5 );

			x = scale * ( sinh( 2 * u ) / ( cos( 2 * a * u ) + cosh( 2 * u ) )  );
			y = scale * ( h * v );
			z = scale * ( sin( 2 * a * u ) / ( cos( 2 * a * u ) + cosh( 2 * u ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'spiral-wave' : {
		'title' : 'Spiral Wave',
		'link1' : 'http://www.3d-meier.de/tut3/Seite129.html',
		'scale' :  10,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = pi * ( u  - 0.5 );
			v = 20 * ( v - 0.5 );

			x = scale * ( v * cos( u ) );
			y = scale * ( a * cos( b * u + c * v ) );
			z = scale * ( v * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'spring-i' : {
		'title' : 'Feder I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite82.html',
		'scale' :  10,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 5,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 120,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 12 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) );
			z = scale * ( R1 * ( sin( v ) + a * u / pi ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'spring-ii' : {
		'title' : 'Spring II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite83.html  ~ Feder II',
		'scale' :  25,
		'a' : 0.75,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 0.5,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 6 * pi * ( v - 0.5 );


			x = scale * ( ( R2 + R1 * cos( u ) ) * cos( v ) + R1 * a * sin( u ) * sin( v ) / b );
			y = scale * ( ( R2 + R1 * cos( u ) ) * sin( v ) - R1 * a * sin( u ) * cos( v ) / b );
			z = scale * ( a * v + R2 * R1 * sin( u ) / b );

			return new THREE.Vector3( x, y, z );
		}
	},


	'steinbach-screw' : {
		'title' : 'Steinbach Screw *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite21.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 0,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 0,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 0,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'i' : 1,
		'iMin' : -5,
		'iMax' : 5,
		'iStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * R1 * ( a * u * cos( b + c * v ) );
			y = scale * R2 * ( d * u * sin( e + f * v ) );
			z = scale * R1 * ( g * v * cos( h + i * u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'stiletto-surface' : {
		'title' : 'Stiletto Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite53.html',
		'scale' :  90,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 0.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'i' : 2,
		'iMin' : -5,
		'iMax' : 5,
		'iStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * R1 * ( ( a + b * cos( u ) ) * pow( cos( v ), c ) * sin( v ) );
			y = scale * R2 * ( -d + ( e + f * cos( u + 2 * pi / 3 ) ) * pow( cos( v + 2 * pi / 3 ), 2 ) * pow( sin( v + 2 * pi / 3), 2 )  );
			z = scale * R1 * ( -( g + h * cos( u - i * pi / 3 ) ) * pow( cos( v + 2 * pi / 3 ), 2 ) * pow( sin( v + 2 * pi / 3), 2 ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'swallow-surface' : {
		'title' : 'Swallow Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite33.html',
		'scale' :  50,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 0.75 * ( v - 0.5 );

			x = scale * ( u * v * v + 3 * v * v * v * v );
			y = scale * ( -2 * u * v - 4 * v * v * v );
			z = scale * ( u );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus' : {
		'title' : 'Torus',
		'link1' : 'http://www.3d-meier.de/tut3/Seite58.html',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );

			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) );
			z = scale * ( R1 * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-8' : {
		'title' : '8 Torus',
		'link1' : 'http://www.3d-meier.de/tut3/Seite67.html',
		'scale' :  20,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( cos( u ) * ( c + sin( v ) * cos( u ) - sin( 2 * v ) * sin( u ) / 2 ) );
			y = scale * ( sin( u ) * sin( v ) + cos( u ) * sin( 2 * v ) / 2 );
			z = scale * ( sin( u ) * ( c + sin( v ) * cos( u ) - sin( 2 * v ) * sin( u ) / 2 ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-astroid' : {
		'title' : 'Astroid Torus',
		'link1' : 'http://www.3d-meier.de/tut3/Seite139.html',
		'scale' :  20,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * cos(v) * cos(v) * cos(v)) * cos(u) );
			y = scale * ( R1 * sin(v) * sin(v) * sin(v) );
			z = scale * ( (R2 + R1 * cos(v) * cos(v) * cos(v)) * sin(u) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-asymmetric' : {
		'title' : 'Torus Asymmetric',
		'link1' : 'http://www.3d-meier.de/tut3/Seite59.html',
		'scale' :  15,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'R1' : 1.5,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * cos( v ) * ( a + sin( u ) ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 * cos( v ) * ( a + sin( u ) ) ) * sin( u ) );
			z = scale * ( R1 * sin( v ) * ( a + sin( u ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-bicorn-i' : {
		'title' : 'Bicorn Torus I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite163.html',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * cos2( v ) * ( 2 + cos( v ) ) / ( 3 + sin2( v ) ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) );
			z = scale * ( ( R2 + R1 * cos2( v ) * ( 2 + cos( v ) ) / ( 3 + sin2( v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-bicorn-ii' : {
		'title' : 'Torus Bicorn II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite164.html',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * sin( v ) ) * cos( u ) );
			y = scale * ( R1 * cos2( v ) * ( 2 + cos( v ) ) / ( 3 + sin2( v ) )  );
			z = scale * ( ( R2 + R1 * sin( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-braided' : {
		'title' : 'Torus Braided *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite110.html',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 0.85,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2.5,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 0.5,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 0.85,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 0.5,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 3,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'i' : 0.85,
		'iMin' : -5,
		'iMax' : 5,
		'iStep' : 0.1,
		'j' : 1.25,
		'jMin' : -5,
		'jMax' : 5,
		'jStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 8 * pi * ( u );
			v = 2 * pi * ( v );

			x = scale * ( a * cos( v ) * cos( u ) + b * cos( u ) * ( 1 + c * cos( j * u ) )  );
			y = scale * ( d * ( e * sin( v ) + f * sin( j * u ) )  );
			z = scale * ( g * cos( v ) * sin( u ) + h * sin( u ) * ( 1 + i * cos( j * u ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-cardioid-i' : {
		'title' : 'Torus Cardioid I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite165.html',
		'scale' :  10,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * ( 2 * cos( v ) - cos( 2 * v ) ) ) * cos( u ) );
			y = scale * ( R1 * ( 2 * sin( v ) - sin( 2 * v ) )  );
			z = scale * ( ( R2 + R1 * ( 2 * cos( v ) - cos( 2 * v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-cardioid-ii' : {
		'title' : 'Torus Cardioid II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite166.html',
		'scale' :  10,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * ( 2 * sin( v ) - sin( 2 * v ) ) ) * cos( u ) );
			y = scale * ( R1 * ( 2 * cos( v ) - cos( 2 * v ) )  );
			z = scale * ( ( R2 + R1 * ( 2 * sin( v ) - sin( 2 * v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-cassinian-oval-i' : {
		'title' : 'Torus Cassinian Oval I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite167.html',
		'scale' :  10,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			M = 2 * a * a * cos( 2 * v ) + 2 * sqrt( ( -a * a * a * a + b * b * b * b ) + a * a * a * a * cos2(2 * v))

			x = scale * ( ( R2 + sqrt( M / 2 ) * cos( v ) ) * cos( u ) );
			y = scale * ( sqrt( M / 2 ) * sin( v ) );
			z = scale * ( ( R2 + sqrt( M / 2 ) * cos( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-cassinian-oval-ii' : {
		'title' : 'Torus Cassinian Oval II *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite168.html',
		'scale' :  10,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 3,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			M = 2 * a * a * cos( 2 * c ) + 2 * sqrt((-a*a*a*a + b*b*b*b*b ) + a*a*a*a * cos2( 2 * c ) );

			x = scale * ( ( R2 + sqrt( M / 2 ) * sin( v ) ) * cos( u ) );
			y = scale * ( sqrt( M / 2 ) * cos( v ) );
			z = scale * ( ( R2 + sqrt( M / 2 ) * sin( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-corrugated-i' : {
		'title' : 'Torus Corrugated I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite172.html',
		'scale' :  25,
		'a' : 5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 0.85,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 2.5,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) + b * sin( a * u ) );
			z = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) );
			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-corrugated-ii' : {
		'title' : 'Torus Wavy II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite173.html',
		'scale' :  5,
		'a' : 8,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + b * cos( a * u ) + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) );
			z = scale * ( ( R2 + b * cos( a * u ) + R1 * cos( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-elliptic' : {
		'title' : 'Torus Elliptic',
		'link1' : 'http://www.3d-meier.de/tut3/Seite69.html',
		'scale' :  25,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );

			x = scale * ( ( c + cos( v ) ) * cos( u ) );
			y = scale * ( ( c + cos( v ) ) * sin( u ) );
			z = scale * ( sin( v ) + cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-epicycloid-i' : {
		'title' : 'Torus Epicycloid I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite146.html',
		'scale' :  2,
		'h' : 5,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 12,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 2,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R1 + ( R2 + R1 ) * cos( v ) - h * cos( ( ( R2 + R1 ) / R1 ) * v ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 ) * sin( v ) - h * sin( ( ( R2 + R1 ) / R1 ) * v ) );
			z = scale * ( ( R1 + ( R2 + R1 ) * cos( v ) - h * cos( ( ( R2 + R1 ) / R1 ) * v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-epicycloid-ii' : {
		'title' : 'Epicycloid Torus II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite147.html',
		'scale' :  2,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'R1' : 12,
		'R1Min' : -5,
		'R1Max' : 15,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );

			x = scale * ( ( R1 + ( R2 + R1 ) * sin( v ) - a * sin( ( ( R2 + R1 ) / R1 ) * v ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 ) * cos( v ) - a * cos( ( ( R2 + R1 ) / R1 ) * v ) );
			z = scale * ( ( R1 + ( R2 + R1 ) * sin( v ) - a * sin( ( ( R2 + R1 ) / R1 ) * v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-gear' : {
		'title' : 'Torus Gear',
		'link1' : 'http://www.3d-meier.de/tut3/Seite184.html',
		'scale' :  20,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 10,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 8,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 4,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			R1 = a + tanh( b * sin( c * v ) ) / b

			x = scale * ( ( R2 + R1 * cos( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) );
			z = scale * ( ( R2 + R1 * cos( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-hypocycloid-i' : {
		'title' : 'Hypocycloid Torus I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite148.html',
		'scale' :  5,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 20,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 15,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );

			x = scale * ( ( R1 + ( R2 - R1 ) * cos( v ) + h * cos( ( ( R2 - R1 ) / R1 ) * v ) ) * cos( u ) );
			y = scale * ( ( R2 - R1 ) * sin( v ) - h * sin(( ( R2 - R1 ) / R1 ) * v ) );
			z = scale * ( ( R1 + ( R2 - R1 ) * cos( v ) + h * cos( ( ( R2 - R1 ) / R1 ) * v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-hypocycloid-ii' : {
		'title' : 'Hypocycloid Torus II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite149.html',
		'scale' :  3,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 20,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 15,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );

			x = scale * ( ( R1 + ( R2 - R1 ) * sin( v ) - h * sin( ( ( R2 - R1 ) / R1 ) * v ) ) * cos( u ) );
			y = scale * ( ( R2 - R1 ) * cos( v ) + h * cos( ( ( R2 - R1 ) / R1 ) * v ) );
			z = scale * ( ( R1 + ( R2 - R1 ) * sin( v ) - h * sin( ( ( R2 - R1 ) / R1 ) * v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-knot' : {
		'title' : 'Torus Knot *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite175.html',
		'scale' :  10,
		'a' : 8,
		'aMin' : -5,
		'aMax' : 15,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 10,
		'bStep' : 0.1,
		'c' : 1.5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 8,
		'dMin' : -5,
		'dMax' : 15,
		'dStep' : 0.1,
		'e' : 5,
		'eMin' : -5,
		'eMax' : 10,
		'eStep' : 0.1,
		'u' : 100,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( a + b * cos( d * u ) + c * cos( v ) ) * cos( e * u ) );
			y = scale * ( c * sin( v ) + b * sin( d * u ) );
			z = scale * ( ( a + b * cos( d * u ) + c * cos( v ) ) * sin( e * u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-lemniscate-gerono-i' : {
		'title' : 'Torus Lemniscate Gerono I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite169.html',
		'scale' :  10,
		'R1' : 2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * sin( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) * cos( v ) );
			z = scale * ( ( R2 + R1 * sin( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-lemniscate-gerono-ii' : {
		'title' : 'Torus Lemniscate Gerono II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite170.html',
		'scale' :  10,
		'R1' : 2,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 6,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * sin( v ) * cos( v ) ) * cos( u ) );
			y = scale * ( R1 * sin( v ) );
			z = scale * ( ( R2 + R1 * sin( v ) * cos( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-lemniscate-i' : {
		'title' : 'Lemniskate Torus I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite144.html',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * (  ( R2 + R1 * cos(v) / ( 1 + sin(v) * sin (v))) * cos( u ) );
			y = scale * (  R1 * sin( v ) * cos( v ) / ( 1 + sin( v ) * sin( v ) ) );
			z = scale * ( ( R2 + R1 * cos( v ) / ( 1 + sin( v ) * sin( v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-lemniscate-ii' : {
		'title' : 'Lemniskate Torus II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite145.html',
		'scale' :  25,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * sin( v ) * cos( v ) / ( 1 + sin( v ) * sin( v ) ) ) * cos( u ) );
			y = scale * ( R1 * cos( v ) / ( 1 + sin( v ) * sin( v ) )  );
			z = scale * ( ( R2 + R1 * sin( v ) * cos( v ) / ( 1 + sin( v ) * sin( v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-limpet' : {
		'title' : 'Limpet Torus',
		'link1' : 'http://www.3d-meier.de/tut3/Seite112.html',
		'scale' :  25,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( cos( u ) / ( sqrt( 2 ) + sin( v ) )  );
			y = scale * ( 1 / ( sqrt( 2 ) + cos( v ) )  );
			z = scale * ( sin( u ) / ( sqrt( 2 ) + sin( v ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-nephroid-i' : {
		'title' : 'Nephroid Torus I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite142.html',
		'scale' :  20,
		'R1' : 0.3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * (  ( R2 + R1 * ( 3 * cos( v ) - cos( 3 * v ) ) ) * cos( u ) );
			y = scale * ( R1 * ( 3 * sin( v ) - sin( 3 * v ) ) );
			z = scale * ( ( R2 + R1 * ( 3 * cos( v ) - cos( 3 * v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-nephroid-ii' : {
		'title' : 'Nephroid Torus II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite143.html',
		'scale' :  25,
		'R1' : 0.3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * ( 3 * sin( v ) - sin( 3 * v ) ) ) * cos( u ) );
			y = scale * ( R1 * ( 3 * cos( v ) - cos( 3 * v ) )  );
			z = scale * ( ( R2 + R1 * ( 3 * sin( v ) - sin( 3 * v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-piriform-i' : {
		'title' : 'Torus Piriform I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite161.html',
		'scale' :  20,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + ( R1 + sin( v ) ) ) * cos( u ) );
			y = scale * ( cos( v ) * ( R1 + sin( v ) )  );
			z = scale * ( ( R2 + ( R1 + sin( v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-piriform-ii' : {
		'title' : 'Torus Piriform II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite162.html',
		'scale' :  20,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + cos( v ) * ( R1 + sin( v ) ) ) * cos( u ) );
			y = scale * ( R1 + sin( v ) );
			z = scale * ( ( R2 + cos( v ) * ( R1 + sin( v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-saddle' : {
		'title' : 'Torus Saddle',
		'link1' : 'http://www.3d-meier.de/tut3/Seite73.html',
		'scale' :  25,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );

			x = scale * ( ( 2 + cos( u ) ) * cos( v ) );
			y = scale * ( ( 2 + cos( u + 2 * pi / 3 ) ) * cos( v + 2 * pi / 3 ) );

	//		z = scale * ( ( 2 + Math.sign( F( u ) ) * sqrt( abs( F( u ) ) ) ) * Math.sign( F( v ) ) * sqrt( abs( F( v ) ) ) );
			z = scale * ( ( 2 + Math.sign( u ) * sqrt( abs( u ) ) ) * Math.sign( v  ) * sqrt( abs( v  ) ) );


			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-spiral' : {
		'title' : 'Torus Spiral *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite174.html',
		'scale' :  10,
		'a' : 8,
		'aMin' : -5,
		'aMax' : 15,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 10,
		'bStep' : 0.1,
		'c' : 1.5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 8,
		'dMin' : -5,
		'dMax' : 10,
		'dStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * R1 * ( ( a + b * cos( d * u ) + c * cos( v ) ) * cos( u ) );
			y = scale * R2 * ( c * sin( v ) + b * sin( d * u ) );
			z = scale * R1 * ( ( a + b * cos( d * u ) + c * cos( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-strangled-i' : {
		'title' : 'Strangled Torus I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite137.html',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * sin( v ) ) * cos( u ) );
			y = scale * ( R1 * cos( v ) * cos( a * u / 2 ) );
			z = scale * ( ( R2 + R1 * sin( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-strangled-ii' : {
		'title' : 'Strangled Torus II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite138.html',
		'scale' :  25,
		'a' : 5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * sin( v ) ) * cos( u ) );
			y = scale * ( R1 * cos( v ) * cos( a * u / 2 ) );
			z = scale * ( ( R2 + R1 * sin( v ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-tricuspoid-i' : {
		'title' : 'Tricuspoid Torus I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite140.html',
		'scale' :  25,
		'R1' : 0.3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * ( 2 * cos ( v ) + cos( 2 * v ) ) ) * cos ( u )  );
			y = scale * (  R1 * ( 2 * sin( v ) - sin( 2 * v ) ) );
			z = scale * ( ( R2 + R1 * ( 2 * cos( v ) + cos( 2 * v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-tricuspoid-ii' : {
		'title' : 'Tricuspoid Torus Ii',
		'link1' : 'http://www.3d-meier.de/tut3/Seite141.html',
		'scale' :  25,
		'R1' : 0.3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * ( 2 * sin( v ) - sin( 2 * v ) ) ) * cos( u ) );
			y = scale * ( R1 * ( 2 * cos( v ) + cos( 2 * v ) )  );
			z = scale * ( ( R2 + R1 * ( 2 * sin( v ) - sin( 2 * v ) ) ) * sin( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-twisted-eight' : {
		'title' : 'Torus Twisted Eight',
		'link1' : 'http://www.3d-meier.de/tut3/Seite60.html',
		'scale' :  15,
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( R2 + R1 * ( cos( u / 2 ) * sin( v ) - a * sin( u / 2 ) * sin( 2 * v ) ) ) * cos( u ) );
			y = scale * ( ( R2 + R1 * ( cos( u / 2 ) * sin( v ) - b * sin( u / 2 ) * sin( 2 * v ) ) ) * sin( u ) );
			z = scale * ( R1 * ( sin( u / 2 ) * sin( v ) + c * cos( u / 2 ) * sin( 2 * v ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-umbilic' : {
		'title' : 'Torus Umbilical',
		'link1' : 'http://www.3d-meier.de/tut3/Seite61.html',
		'scale' :  8,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( sin( u ) * ( 7 + cos( u / 3 - 2 * v ) + 2 * cos( u / 3 + v ) )  );
			y = scale * ( cos( u ) * ( 7 + cos( u / 3 - 2 * v ) + 2 * cos( u / 3 + v ) )  );
			z = scale * ( sin( u / 3 - 2 * v ) + 2 * sin( u / 3 + v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'torus-wave' : {
		'title' : 'Torus Wave',
		'link1' : 'http://www.3d-meier.de/tut3/Seite62.html',
		'scale' :  5,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'i' : 1,
		'iMin' : -5,
		'iMax' : 5,
		'iStep' : 0.1,
		'j' : 7,
		'jMin' : 1,
		'jMax' : 20,
		'jStep' : 1,
		'R1' : 1.5,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 10,
		'R2Min' : -5,
		'R2Max' : 15,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );

			// R1 = 3 + 3 * sin ( n * u );

			x = scale * ( ( R2 + ( R1 + a * b * sin( j * u ) ) * cos( v ) ) * cos( u ) );
			y = scale * ( ( R2 + ( R1 + a * c * sin( j * u ) ) * cos( v ) ) * sin( u ) );
			z = scale * ( ( R1 + a * d * sin( j * u ) ) * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'tractroid' : {
		'title' : 'Tractroid',
		'link1' : 'http://www.3d-meier.de/tut3/Seite28.html',
		'scale' :  35,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( sech( u ) * cos( v ) );
			y = scale * ( sech( u ) * sin( v ) );
			z = scale * ( u - tanh( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'tranguloid-trefoil' : {
		'title' : 'Tranguloid Trefoil *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite57.html',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'i' : 2,
		'iMin' : -5,
		'iMax' : 5,
		'iStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 80,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * R1 * ( a * sin( b * u ) / ( c + cos( v ) ) );
			y = scale * R2 * ( d * ( sin( u ) + e * sin( 2 * u ) ) / ( f + cos( v + 2 * pi / 3 ) ) );
			z = scale * R1 * ( ( cos( u ) - g * cos( 2 * u ) ) * ( h + cos( v ) ) * ( i + cos( v + 2 * pi / 3 ) ) / 4 );

			return new THREE.Vector3( x, y, z );
		}
	},


	'trash-can' : {
		'title' : 'Trash Can',
		'link1' : 'http://www.3d-meier.de/tut3/Seite81.html',
		'scale' :  25,
		'a' : 0.5,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * ( v );

			x = scale * ( ( b + v ) * cos( u ) );
			y = scale * ( v * sin( u ) );
			z = scale * ( a * v * v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'trefoil-knot' : {
		'title' : 'Trefoil Knot I *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite56.html',
		'scale' :  20,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'i' : 1,
		'iMin' : -5,
		'iMax' : 5,
		'iStep' : 0.1,
		'R1' : 0.5,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 10,
		'R2Step' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 12 * pi * ( u );
			v = 2 * pi * ( v );

			Bx = ( R2 + R1 * a * cos( u / 2 ) ) * cos( u / 3 );
			By = ( R2 + R1 * d * cos( u / 2 ) ) * sin( u / 3 );
			Bz = R1 + g * sin( u / 2 );

			x = scale * ( Bx + R1 * b * cos( u / 3 ) * cos( c * v - pi ) );
			y = scale * ( By + R1 * e * sin( u / 3 ) * cos( f * v - pi ) );
			z = scale * ( Bz + R1 * h * sin( i * v - pi ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'trefoil-knot-ii' : {
		'title' : 'Trefoil Knot II *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite159.html',
		'scale' :  15,
		'a' : 0.4,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1.5,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 0.3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 8,
		'R2Step' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 4 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( R1 * e * cos( v ) * cos( u ) + R2 * cos( u ) * ( 1 + a * b * cos( h * u ) )  );
			y = scale * ( R1 * f * sin( v ) + a * c * sin( h * u ) );
			z = scale * ( R1 * g * cos( v ) * sin( u ) + R2 * sin( u ) * ( 1 + a * d * cos( h * u ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'triaxial-hexatorus' : {
		'title' : 'Triaxial Hexatorus *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite116.html',
		'link1' : 'http://paulbourke.net/geometry/hexatorus/',
		'link1' : 'http://nliautaud.fr/wiki/travaux/surfaces_mathematiques',
		'scale' :  25,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 3,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 3,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 3,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * R1 * ( sin( u ) / ( sqrt( a ) + h * cos( v ) )  );
			y = scale * R2 * ( sin( u + 2 * pi / b ) / ( sqrt( c ) + cos( v + 2 * pi / d ) )  );
			z = scale * R1 * ( cos( u - 2 * pi / e ) / ( sqrt( f ) + cos( v - 2 * pi / g ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'triaxial-teardrop' : {
		'title' : 'Triaxial Teardrop',
		'link1' : 'http://www.3d-meier.de/tut3/Seite45.html',
		'scale' :  80,
		'curve' : function( u, v ) {
			u = pi * ( u );
			v = 2 * pi * ( v );

			x = scale * ( ( 1 - cos( u ) ) * cos( u + 2 * pi / 3) * cos( v + 2 * pi / 3) / 2 );
			y = scale * ( ( 1 - cos( u ) ) * cos( u + 2 * pi / 3) * cos( v - 2 * pi / 3) / 2 );
			z = scale * ( cos( u - 2 * pi / 3) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'triaxial-tritorus' : {
		'title' : 'Triaxial Tritorus *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite74.html',
		'scale' :  35,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 4,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 2,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 4,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 50,
		'v' : 50,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * R1 * ( sin( u ) * ( a + cos( v ) )  );
			y = scale * R2 * ( sin( u + b * pi / 3 ) * ( d + cos( v + f * pi / 3 ) )  );
			z = scale * R1 * ( sin( u + c * pi / 3 ) * ( e + cos( v + g * pi / 3 ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'triple-corkscrew-i' : {
		'title' : 'Triple Corkscrew I',
		'link1' : 'http://www.3d-meier.de/tut3/Seite177.html',
		'scale' :  5,
		'a' : 20,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 4,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'R1' : 3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( a * u );
			y = scale * ( R1 * ( 1 - abs( u ) ) * cos( v ) + R2 * ( 1 - abs( u )) * cos( u * b * pi ) );
			z = scale * ( R1 * ( 1 - abs( u ) ) * sin( v ) + R2 * ( 1 - abs( u )) * sin( u * b * pi ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'triple-corkscrew-ii' : {
		'title' : 'Triple Corkscrew II',
		'link1' : 'http://www.3d-meier.de/tut3/Seite178.html',
		'scale' :  5,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 20,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 4,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'R1' : 3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( c * u );
			y = scale * ( R1 * exp( - ( b * b * u * u ) ) * cos( v ) + R2 * exp( - ( a * a * u * u ) ) * cos( u * d * pi ) );
			z = scale * ( R1 * exp( - ( b * b * u * u ) ) * sin( v ) + R2 * exp( - ( a * a * u * u ) ) * sin( u * d * pi ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'triple-corkscrew-iii' : {
		'title' : 'Triple Corkscrew III',
		'link1' : 'http://www.3d-meier.de/tut3/Seite179.html',
		'scale' :  5,
		'c' : 20,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 4,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'R1' : 3,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 3,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 50,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( c * u );
			y = scale * ( R1 * ( 1 - abs( u )) * cos( v ) + R2 * cos( u * pi / 2 ) * cos( u * d * pi ) );
			z = scale * ( R1 * ( 1 - abs( u )) * sin( v ) + R2 * cos( u * pi / 2 ) * sin( u * d * pi ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'triple-point-twist' : {
		'title' : 'Triple Point Twist',
		'link1' : 'http://www.3d-meier.de/tut3/Seite79.html',
		'scale' :  25,
		'c' : -1.5,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = 4 * ( u - 0.5 ) ;
			v = 3 * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( v*v*v + c * v );
			z = scale * ( u * v + v*v*v*v*v + c * v*v*v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'twisted-heart' : {
		'title' : 'Twisted Heart',
		'link1' : 'http://www.3d-meier.de/tut3/Seite117.html',
		'scale' :  25,
		'curve' : function( u, v ) {

			var m = 1 / sqrt( 2 );

			u = pi * ( u ) ;
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( ( abs( v ) - abs( u ) - abs( tanh( m * u ) / m ) + abs( tanh( m * v ) / m ) ) * sin( v ) );
			y = scale * ( ( abs( v ) + abs( u ) - abs( tanh( m * u ) / m ) - abs( tanh( m * v ) / m ) ) * cos( v ) + 0.5 );
			z = scale * ( m * ( u * u + v * v ) / ( cosh( m * u ) * cosh( m * v ) ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'twisted-pipe-surface' : {
		'title' : 'Twisted Pipe Surface *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite65.html',
		'scale' :  15,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 3,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 2,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 3,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 3,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 3,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 20,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u );
			v = 2 * pi * ( v );

			r = sqrt ( a + pow( sin( v ), b ) );

			x = scale * R1 * ( cos( v ) * ( c + cos( u ) ) / r );
			y = scale * R2 * ( sin( v - 2 * pi / d ) * ( e + cos( u - 2 * pi / f ) ) / r );
			z = scale * R1 * ( sin( v + 2 * pi / g ) * ( e + cos( u + 2 * pi / h ) ) / r );

			return new THREE.Vector3( x, y, z );
		}
	},


	'twisted-sphere' : {
		'title' : 'Twisted Sphere',
		'link1' : 'http://www.3d-meier.de/tut3/Seite118.html',
		'scale' :  15,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = 2 * pi * ( v - 0.5 );

			x = scale * ( a * cos( u ) * cos( v ) );
			y = scale * ( a * sin( v ) + b * u );
			z = scale * ( a * sin( u ) * cos( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'vase-and-spearhead' : {
		'title' : 'Vase and Speartip',
		'link1' : 'http://www.3d-meier.de/tut3/Seite107.html',
		'scale' :  15,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u - 0.5 );
			v = pi * ( v );

			x = scale * ( v * cos( b * v + u ) );
			y = scale * ( v * sin( u ) );
			z = scale * ( a * v * v - 6);

			return new THREE.Vector3( x, y, z );
		}
	},


	'verrill-surface' : {
		'title' : 'Verrill Surface',
		'link1' : 'http://www.3d-meier.de/tut3/Seite75.html',
		'scale' :  15,
		'curve' : function( u, v ) {
			u = 1 * ( u ) + 0.5;
			v = 2 * pi * ( v );

			x = scale * ( -2 * u * cos( v ) + ( 2 * cos( v ) / u ) - 2 * u * u * u * ( cos( 3 * v ) / 3 ) );
			y = scale * ( 6 * u * sin( v ) - 2 * sin( v ) / u - 2 * u * u * u * cos( 3 * v ) / 3 );
			z = scale * ( 4 * log( u ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'wallis-conical-edge' : {
		'title' : 'Wallis Conical Edge',
		'link1' : 'http://www.3d-meier.de/tut3/Seite34.html',
		'scale' :  150,
		'a' : 3,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = 1 * ( u - 0.5 );
			v = 1 * ( v );

			x = scale * ( v * cos( u ) - 0.5 );
			y = scale * ( v * sin( u ) );
			z = scale * ( c * sqrt( a * a - b * b * cos( u ) * cos( u ) ) - 4.5  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'wave' : {
		'title' : 'Waves',
		'link1' : 'http://www.3d-meier.de/tut3/Seite126.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 2,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 2,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( u );
			y = scale * ( a * cos( b * u ) * cos( c * v ) );
			z = scale * ( v );

			return new THREE.Vector3( x, y, z );
		}
	},


	'wave-sphere' : {
		'title' : 'Wave Sphere *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite63.html',
		'scale' :  5,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'f' : 1,
		'fMin' : -5,
		'fMax' : 5,
		'fStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 1,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 30,
		'v' : 30,
		'curve' : function( u, v ) {
			u = 14.5 * ( u);
			v = 1.5 * pi * ( v - 0.5 );

			x = scale * R1 * ( a * u * cos( d * cos( u ) ) * cos( g * v ) );
			y = scale * R2 * ( b * u * cos( e * cos( u ) ) * sin( h * v ) );
			z = scale * R1 * ( c * u * sin( f * cos( u ) )  );

			return new THREE.Vector3( x, y, z );
		}
	},


	'whitney-umbrella' : {
		'title' : 'Whitney Umbrella *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite22.html',
		'scale' :  25,
		'a' : 1,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'c' : 1,
		'cMin' : -5,
		'cMax' : 5,
		'cStep' : 0.1,
		'd' : 2,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'u' : 20,
		'v' : 20,
		'curve' : function( u, v ) {
			u = pi * ( u - 0.5 );
			v = pi * ( v - 0.5 );

			x = scale * ( a * u * v );
			y = scale * ( b * u );
			z = scale * ( c * pow( v, d ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'worm' : {
		'title' : 'Worm',
		'link1' : 'http://www.3d-meier.de/tut3/Seite17.html',
		'scale' :  3,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 3,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'curve' : function( u, v ) {
			u = 12 * pi * ( u  );
			v = 2 * pi * ( v - 0.5 );

			h = pow( Math.E, u / ( 6 * pi ) );

			x = scale * ( a * ( 1 - h ) * cos( u ) * cos( 0.5 * v ) * cos( 0.5 * v ) );
			y = scale * ( 1 - pow( Math.E, u / ( b * pi ) ) - sin( v ) + h * sin( v ) + 18 );
			z = scale * ( a * ( -1 + h ) * sin( u ) * cos( 0.5 * v ) * cos( 0.5 * v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'wreath' : {
		'title' : 'Wreath *',
		'link1' : 'http://www.3d-meier.de/tut3/Seite64.html',
		'scale' :  100,
		'a' : 2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 4,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 0.5,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'g' : 1,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 50,
		'v' : 30,
		'curve' : function( u, v ) {
			u = 2 * pi * ( u);
			v = 2 * pi * ( v );

			x = scale * R1 * ( a * cos( u + b ) / 3 );
			y = scale * R2 * ( d * cos( u ) * sin( v ) * cos( v ) * sin( u ) * cos( v ) + e * cos( u ) );
			z = scale * R1 * ( g * cos( v ) * sin( u ) * cos( u ) * sin( v ) );

			return new THREE.Vector3( x, y, z );
		}
	},


	'zindler-conoid' : {
		'title' : 'Zindlers Conoid .',
		'link1' : 'http://www.3d-meier.de/tut3/Seite76.html',
		'link1' : 'http://www.mathcurve.com/surfaces/zindler/zindler.shtml',
		'scale' :  50,
		'a' : 0.2,
		'aMin' : -5,
		'aMax' : 5,
		'aStep' : 0.1,
		'b' : 1,
		'bMin' : -5,
		'bMax' : 5,
		'bStep' : 0.1,
		'd' : 1,
		'dMin' : -5,
		'dMax' : 5,
		'dStep' : 0.1,
		'e' : 1,
		'eMin' : -5,
		'eMax' : 5,
		'eStep' : 0.1,
		'g' : 0.2,
		'gMin' : -5,
		'gMax' : 5,
		'gStep' : 0.1,
		'h' : 2,
		'hMin' : -5,
		'hMax' : 5,
		'hStep' : 0.1,
		'R1' : 1,
		'R1Min' : -5,
		'R1Max' : 5,
		'R1Step' : 0.1,
		'R2' : 1,
		'R2Min' : -5,
		'R2Max' : 5,
		'R2Step' : 0.1,
		'u' : 20,
		'v' : 100,
		'curve' : function( u, v ) {
			u = 1 * ( u );
			v = 1.4 * ( v - 0.5 );

			x = scale * R1 * ( a * u * cos( b * v ) );
			y = scale * R2 * ( d * u * sin( e * v ) );
			z = scale * R1 * ( g * tan( h * v ) );

			return new THREE.Vector3( x, y, z );
		}
	},

	};
}

function cos( a ){ return Math.cos( a ); }
function sin( a ){ return Math.sin( a ); }
function tan( a ){ return Math.tan( a ); }

function cos2( a ){ return Math.cos( a ) * Math.cos( a ); }
function sin2( a ){ return Math.sin( a ) * Math.sin( a ); }

function abs( a ){ return Math.abs( a ); }
function exp( a ){ return Math.exp( a ); }
function log( a ){ return Math.log( a ); }
function pow( a, b ){ return Math.pow( a, b ); }
function ran(){ return Math.random(); }
function sqrt( a ){ return Math.sqrt( a ); }

function cosh( a ){ return Math.cosh( a ); }
function sinh( a ){ return Math.sinh( a ); }
function tanh( a ){ return Math.tanh( a ); }

function sech( a ){ if ( Math.sech !== undefined ) { a = Math.sech( a ) } else { a = 1 / cosh( a ) }; return a; }
