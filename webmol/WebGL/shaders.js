/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function multiLineString(f) {
    return f.toString()
            .replace(/^[^\/]+\/\*!?/, '')
            .replace(/\*\/[^\/]+$/, '');
            
}

WebMol.ShaderLib = { 
	basic : {
		fragmentShader : multiLineString(function() {/*

precision highp float;

uniform mat4 viewMatrix;
uniform vec3 cameraPosition;
uniform vec3 diffuse;
uniform float opacity;

uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;

varying vec3 vColor;

void main() {
	
	gl_FragColor = vec4( diffuse, opacity );
	gl_FragColor = gl_FragColor * vec4( vColor, opacity );
	
	float depth = gl_FragCoord.z / gl_FragCoord.w;	
	float fogFactor = smoothstep( fogNear, fogFar, depth );
	
	gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );

}		                                             
			
*/}),
		
		vertexShader : multiLineString(function() {/*

precision highp float;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec2 uv2;
attribute vec3 color;

varying vec3 vColor;

void main() {

	vColor = color;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );;
	gl_Position = projectionMatrix * mvPosition;

}
		
*/})

	},
	
    lambert : { 
        fragmentShader : multiLineString(function() {/*

precision highp float;

uniform mat4 viewMatrix;
uniform vec3 cameraPosition;
uniform float opacity;

uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;

varying vec3 vLightFront;
varying vec3 vColor;

void main() {
	
	gl_FragColor = vec4( vec3 ( 1.0 ), opacity );
	
	float specularStrength = 1.0;
	
	gl_FragColor.xyz *= vLightFront;
	gl_FragColor = gl_FragColor * vec4( vColor, opacity );
	float depth = gl_FragCoord.z / gl_FragCoord.w;
	
	float fogFactor = smoothstep( fogNear, fogFar, depth );
	
	gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );

}


*/}),
       
       vertexShader : multiLineString(function() {/*

precision highp float;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;
uniform vec3 ambient;
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 ambientLightColor;
uniform vec3 directionalLightColor[ 1 ];
uniform vec3 directionalLightDirection[ 1 ];

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec2 uv2;
attribute vec3 color;

varying vec3 vColor;
varying vec3 vLightFront;

void main() {
	
	vColor = color;
	
	vec3 objectNormal = normal;	
	vec3 transformedNormal = normalMatrix * objectNormal;	
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );;
	
	gl_Position = projectionMatrix * mvPosition;
	
	vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
	
	vLightFront = vec3( 0.0 );
	
	transformedNormal = normalize( transformedNormal );
	
	vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );
	vec3 dirVector = normalize( lDirection.xyz );
	float dotProduct = dot( transformedNormal, dirVector );
	vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );
	
	vLightFront += directionalLightColor[ 0 ] * directionalLightWeighting;
	vLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;
}
           
*/})

    }
};