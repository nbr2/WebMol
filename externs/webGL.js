/* 
 * Externs for WebGL functionality
 */

/** @typeDef {(string|number)} */
var numlike;

//Math functions
var WebMol = {};

WebMol.Math = {};
WebMol.Math.clamp = function(x, min, max) {};
WebMol.Math.degToRad = function(deg) {};

// Quaternion
/**
 * @constructor
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 */
WebMol.Quaternion = function(x, y, z, w) {};
/**
 * 
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @returns {undefined}
 */
WebMol.Quaternion.x;
WebMol.Quaternion.y;
WebMol.Quaternion.z;
WebMol.Quaternion.w;
/** @return {WebMol.Quaternion} */
WebMol.Quaternion.prototype.set = function(x, y, z, w) {};
/**
 * 
 * @param {WebMol.Quaternion} q
 * @returns {WebMol.Quaternion}
 */
WebMol.Quaternion.prototype.copy = function(q) {};
/** @return {WebMol.Quaternion} */
WebMol.Quaternion.prototype.conjugate = function() {};
/** @return {WebMol.Quaternion} */
WebMol.Quaternion.prototype.inverse = function() {};
WebMol.Quaternion.prototype.length = function() {};
/** @return {WebMol.Quaternion} */
WebMol.Quaternion.prototype.normalize = function () {};
/**
 * 
 * @param {WebMol.Quaternion} g
 * @returns {WebMol.Quaternion}
 */
WebMol.Quaternion.prototype.multiply = function(g) {};
/** 
 * @param {WebMol.Quaternion} a
 * @param {WebMol.Quaternion} b
 * @return {WebMol.Quaternion} 
 */
WebMol.Quaternion.prototype.multiplyQuaternions = function(a, b) {};

/** @constructor 
 *  @param {...number} args
 */
WebMol.Vector2 = function(args) {};
WebMol.Vector2.x;
WebMol.Vector2.y;
/** @return {WebMol.Vector2} */
WebMol.Vector2.prototype.set = function(x, y) {};
/**
 * 
 * @param {WebMol.Vector2} a
 * @param {WebMol.Vector2} b
 * @return {WebMol.Vector2}
 */
WebMol.Vector2.protoype.subVectors = function(a, b) {};
/**
 * 
 * @param {WebMol.Vector2} v
 * @return {WebMol.Vector2}
 */
WebMol.Vector2.prototype.copy = function(v) {};
/** @return {WebMol.Vector2} */
WebMol.Vecto2.prototype.clone = function() {};

//A 3 Vector
/** @constructor 
 *  @param {...number} args
 */
WebMol.Vector3 = function(args) {};
WebMol.Vector3.x;
WebMol.Vector3.y;
WebMol.Vector3.z;
/** @return {WebMol.Vector3} */
WebMol.Vector3.prototype.set = function(x, y, z) {};
/** 
 * @param {WebMol.Vector3} v
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.copy = function(v) {};
/**
 * @param {WebMol.Vector3} v
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.add = function(v) {};
/**
 * 
 * @param {WebMol.Vector3} a
 * @param {WebMol.Vector3} b
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.addVectors = function(a, b) {};
/**
 * @param {WebMol.Vector3} v
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.sub = function(v) {};
/**
 * 
 * @param {WebMol.Vector3} a
 * @param {WebMol.Vector3} b
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.subVectors = function(a, b) {};
/**
 * @param {number} s
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.multiplyScalar = function(s) {};
/**
 * @param {number} s
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.divideScalar = function(s) {};
/**
 * @param {WebMol.Vector3} v
 * @return {number}
 */
WebMol.Vector3.prototype.distanceTo = function(v) {};
/**
 * @param {WebMol.Vector3} v
 * @return {number}
 */
WebMol.Vector3.prototype.distanceToSquared = function(v) {};
/**
 * @param {WebMol.Matrix4} m
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.applyMatrix4 = function(m) {};
/**
 * @param {WebMol.Matrix4} m
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.applyProjection = function(m) {};
/**
 * @param {WebMol.Quaternion} q
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.applyQuaternion = function(q) {};
/** @return {WebMol.Vector3} */
WebMol.Vector3.prototype.negate = function() {};
/**
 * @param {WebMol.Vector3} v
 * @return {number}
 */
WebMol.Vector3.prototype.dot = function(v) {};
WebMol.Vector3.prototype.length = function() {};
WebMol.Vector3.prototype.lengthSq = function() {};
/** @return {WebMol.Vector3} */
WebMol.Vector3.prototype.normalize = function() {};
/**
 * @param {WebMol.Vector3} v
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.cross = function(v) {};
/**
 * 
 * @param {WebMol.Vector3} a
 * @param {WebMol.Vector3} b
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.crossVectors = function(a, b) {};
/**
 * @param {WebMol.Matrix4} m
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.getPositionFromMatrix = function(m) {};
/**
 * 
 * @param {WebMol.Matrix4} m
 * @param {string=} order
 * @return {WebMol.Vector3}
 */
WebMol.Vector3.prototype.setEulerFromRotationMatrix = function(m, order) {};
/** @return {WebMol.Vector3} */
WebMol.Vector3.prototype.clone = function() {};

//Matrices

//Matrix3
/** 
 * @constructor 
 * @param {..number} args
 */
WebMol.Matrix3 = function(args) {};
WebMol.Matrix3.elements;
/** @return {WebMol.Matrix3} */
WebMol.Matrix3.prototype.set = function(n11, n12, n13, n21, n22, n23, n31, n32, n33) {};
/** @return {WebMol.Matrix3} */
WebMol.Matrix3.prototype.identity = function() {};
/** 
 * @param {WebMol.Matrix3} 
 * @return {WebMol.Matrix3} 
 */
WebMol.Matrix3.prototype.copy = function(m) {};
/** 
 * @param {number} s
 * @return {WebMol.Matrix3} */
WebMol.Matrix3.prototype.multiplyScalar = function ( s ) {};
/** 
 * @param {WebMol.Matrix3} matrix
 * @param {boolean=} throwOnInvertible
 * @return {WebMol.Matrix3} */
WebMol.Matrix3.prototype.getInverse = function ( matrix, throwOnInvertible ) {};
/** @return {WebMol.Matrix3} */
WebMol.Matrix3.prototype.transpose = function () {};
/** @return {WebMol.Matrix3} */
WebMol.Matrix3.prototype.clone = function () {};

//Matrix 4
/** 
 * @constructor 
 * @param {...number} args
 */
WebMol.Matrix4 = function(args) {};
WebMol.Matrix4.elements;
/** @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.set = function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {};
/** @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.identity = function () {};
/** 
 * @param {WebMol.Matrix4} m
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.copy = function (m) {};
/** 
 * @param {WebMol.Vector3}
 * @param {string=} order
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.setRotationFromEuler = function (v, order) {};
/** 
 * @param {WebMol.Quaternion} q
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.setRotationFromQuaternion = function (q) {};
/** 
 * @param {WebMol.Vector3} eye
 * @param {WebMol.Vector3} target
 * @param {WebMol.Vector3} up
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.lookAt = function ( eye, target, up ) {};
/** 
 * @param {WebMol.Matrix4} a
 * @param {WebMol.Matrix4} b
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.multiplyMatrices = function (a, b) {};
/** 
 * @param {number} s
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.multiplyScalar = function (s) {};
/** @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.transpose = function () {};
/** @return {WebMol.Vector3} */
WebMol.Matrix4.prototype.getPosition = function() {};
/** 
 * @param {WebMol.Vector3} v
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.setPosition = function (v) {};
/** 
 * @param {WebMol.Matrix4} m
 * @param {boolean=} throwOnInvertible
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.getInverse = function (m, throwOnInvertible) {};
/** 
 * @param {WebMol.Vector3} translation
 * @param {WebMol.Quaternion} rotation
 * @param {WebMol.Vector3} scale
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.compose = function (translation, rotation, scale) {};
/** 
 * @param {WebMol.Vector3=} translation
 * @param {WebMol.Quaternion=} rotation
 * @param {WebMol.Vector3=} scale
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.decompose = function (translation, rotation, scale) {};
/** 
 * @param {number} v
 * @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.scale = function (v) {};
WebMol.Matrix4.prototype.getMaxScaleOnAxis = function() {};
/** @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.makeFrustum = function (left, right, bottom, top, near, far) {};
/** @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.makePerspective = function (fov, aspect, near, far) {};
/** @return {WebMol.Matrix4} */
WebMol.Matrix4.prototype.clone = function () {};

/**
 * @constructor
 * @param {WebMol.Vector3=} origin
 * @param {WebMol.Vector3=} direction
 */
WebMol.Ray = function(origin, direction) {};
/**
 * @param {WebMol.Vector3} origin
 * @param {WebMol.Vector3} direction
 * @returns {WebMol.Ray}
 */
WebMol.Ray.prototype.set = function(origin, direction){};
/** 
 * @param {WebMol.Ray} ray
 * @return {WebMol.Ray} */
WebMol.Ray.prototype.copy = function(ray) {};
/**
 * @param {number} t
 * @param {WebMol.Vector3=} optionalTarget
 * @returns {WebMol.Vector3}
 */
WebMol.Ray.prototype.at = function(t, optionalTarget) {};
/** @return {WebMol.Ray} */
WebMol.Ray.prototype.recast = function(t) {};
/**
 * 
 * @param {WebMol.Vector3} point
 * @param {WebMol.Vector3=} optionalTarget
 * @returns {WebMol.Vector3}
 */
WebMol.Ray.prototype.closestPointToPoint = function(point, optionalTarget) {};
/**
 * 
 * @param {WebMol.Vector3} point
 * @returns {number}
 */
WebMol.Ray.prototype.distanceToPoint = function(point) {};
WebMol.Ray.prototype.isIntersectionCylinder = function() {};
/**
 * 
 * @param {WebMol.Sphere} sphere
 * @returns {boolean}
 */
WebMol.Ray.prototype.isIntersectionSphere = function(sphere) {};
WebMol.Ray.prototype.isIntersectionPlane = function(plane) {};
WebMol.Ray.prototype.distanceToPlane = function(plane) {};
WebMol.Ray.prototype.intersectPlane = function(plane, optionalTarget) {};
/** 
 * @param {WebMol.Matrix4} matrix4
 * @return {WebMol.Ray} */
WebMol.Ray.prototype.applyMatrix4 = function(matrix4) {};
/**
 * 
 * @param {WebMol.Ray} ray
 * @returns {boolean}
 */
WebMol.Ray.prototype.equals = function(ray) {};
/** @return {WebMol.Ray} */
WebMol.Ray.prototype.clone = function() {};

//Intersection sphere for sphere, stick render
/**
 * @constructor
 * @param {WebMol.Vector3=} center
 * @param {number=} radius
 */
WebMol.Sphere = function(center, radius) {};
/** 
 * @param {WebMol.Vector3} center
 * @param {number} radius
 * @return {WebMol.Sphere} */
WebMol.Sphere.prototype.set = function(center, radius) {};
/** 
 * @param {WebMol.Sphere} sphere
 * @return {WebMol.Sphere} */
WebMol.Sphere.prototype.copy = function(sphere) {};
WebMol.Sphere.prototype.applyMatrix4 = function(matrix) {};
WebMol.Sphere.prototype.translate = function(offset) {};
WebMol.Sphere.prototype.equals = function(sphere) {};
WebMol.Sphere.prototype.clone = function() {};

//Bounding cylinder for stick render  
WebMol.Cylinder = function(c1, c2, radius) {};
WebMol.Cylinder.prototype.copy = function(cylinder) {};
WebMol.Cylinder.prototype.lengthSq = function() {};
WebMol.Cylinder.prototype.applyMatrix4 = function(matrix) {};

//plane specified by three points
WebMol.Triangle = function(a, b, c){};
WebMol.Triangle.prototype.copy = function(triangle) {};
WebMol.Triangle.prototype.applyMatrix4 = function(matrix) {};
WebMol.Triangle.prototype.getNormal = function() {};

//Event Handling
WebMol.EventDispatcher = function() {};


//Object3D base constructor function
/** @constructor */
WebMol.Object3D = function() {};
/** @param {WebMol.Vector3} vector */
WebMol.Object3D.prototype.lookAt = function(vector) {};
/** @param {WebMol.Object3D} object */
WebMol.Object3D.prototype.add = function(object) {};
/** @param {WebMol.Object3D} object */
WebMol.Object3D.prototype.remove = function(object) {};
WebMol.Object3D.prototype.updateMatrix = function() {};
/** @param {boolean=} force */
WebMol.Object3D.prototype.updateMatrixWorld = function(force) {};
/** 
 * @param {WebMol.Object3D} object
 * @return {WebMol.Object3D}
 */
WebMol.Object3D.prototype.clone = function(object) {};
WebMol.Object3D.id;   
WebMol.Object3D.name;

WebMol.Object3D.parent;
WebMol.Object3D.children;
/** @type {WebMol.Vector3} */
WebMol.Object3D.position;
/** @type {WebMol.Vector3} */
WebMol.Object3D.rotation;
/** @type {WebMol.Matrix4} */
WebMol.Object3D.matrix;
/** @type {WebMol.Matrix4} */
WebMol.Object3D.matrixWorld;
/** @type {WebMol.Quaternion} */
WebMol.Object3D.quaternion;
/** @type {string} */
WebMol.Object3D.eulerOrder;

WebMol.Object3D.up;
WebMol.Object3D.scale;

WebMol.Object3D.matrixAutoUpdate;
WebMol.Object3D.matrixWorldNeedsUpdate;
WebMol.Object3D.rotationAutoUpdate;
WebMol.Object3D.useQuaternion;

WebMol.Object3D.visible;
WebMol.Object3DIDCount;

/**
 * @constructor
 * @param {boolean=} mesh
 */
WebMol.Geometry = function(mesh) {};

/**
 * @constructor
 * @param {number=} id
 */
var geometryGroup = function(id) {};
geometryGroup.prototype.getCentroid = function() {}; 
geometryGroup.prototype.setNormals = function() {};
geometryGroup.prototype.setLineIndices = function() {};
geometryGroup.prototype.truncateArrayBuffers = function() {};


/** @return {geometryGroup} */
WebMol.Geometry.prototype.addGeoGroup = function() {};
/** 
 * @param {number} addVertices
 * @return {geometryGroup} */
WebMol.Geometry.prototype.updateGeoGroup = function(addVertices) {};
/**
 * @param {boolean} three
 */
WebMol.Geometry.prototype.setUpNormals = function(three) {};

/** @return {undefined} */
WebMol.Geometry.prototype.setUpWireframe = function() {};
/** @return {undefined} */
WebMol.Geometry.prototype.initTypedArrays = function() {};
/** @return {undefined} */
WebMol.Geometry.prototype.dispose = function() {};
/** @type {number} */
WebMol.Geometry.prototype.vertices;

WebMol.GeometryIDCount;

/**
 * @constructor
 * @param {WebMol.Vector3} origin
 * @param {WebMol.Vector3} direction
 * @param {number=} far
 * @param {number=} near
 */
WebMol.Raycaster = function(origin, direction, far, near) {};
//Raycaster
WebMol.Raycaster.prototype.precision;
WebMol.Raycaster.prototype.linePrecision;
/**
 * @param {WebMol.Vector3} origin
 * @param {WebMol.Vector3} direction
 * @return {undefined}
 */
WebMol.Raycaster.prototype.set = function(origin, direction) {};
/**
 * @param {WebMol.Object3D} group
 * @param {Array.<Object>} objects
 * @return {Array.<Object>} 
 */
WebMol.Raycaster.prototype.intersectObjects = function(group, objects) {};

/** @constructor */
WebMol.Projector = function () {};
/**
 * @param {WebMol.Vector3} vector
 * @param {WebMol.Camera} camera
 * @returns {WebMol.Vector3}
 */
WebMol.Projector.projectVector = function(vector, camera) {};
/**
 * 
 * @param {WebMol.Vector3} vector
 * @param {WebMol.Camera} camera
 * @returns {WebMol.Vector3}
 */
WebMol.Projector.unprojectVector = function(vector, camera) {};

/**
 * @constructor
 * @extends WebMol.Object3D
 * @param {number=} fov
 * @param {number=} aspect
 * @param {number=} near
 * @param {number=} far
 * 
 */
WebMol.Camera = function(fov, aspect, near, far) {};
    
/** @override */
WebMol.Camera.prototype.lookAt = function(vector){};

WebMol.Camera.prototype.updateProjectionMatrix = function () {};


WebMol.SpritePlugin = function () {};

/** 
 * @constructor
 * @extends {WebMol.Object3D}
 * @param {number} hex
 * @param {number=} intensity
 */
WebMol.Light = function(hex, intensity) {};
/** @type {number} */
WebMol.Light.intensity;

/** 
 * @constructor 
 *  @extends WebMol.EventDispatcher
 */
WebMol.Material = function () {};

WebMol.Material.id;
WebMol.Material.name;
WebMol.Material.side;
WebMol.Material.opacity;
WebMol.Material.transparent;
WebMol.Material.blending;
WebMol.Material.depthTest;
WebMol.Material.depthWrite;
WebMol.Material.polygonOffset;
WebMol.Material.polygonOffsetFactor;
WebMol.Material.polygonOffsetUnits;
WebMol.Material.alphaTest;
WebMol.Material.visible;
WebMol.Material.needsUpdate;

/**
 * @param {matSpec} values
 */
WebMol.Material.prototype.setValues = function(values) {};
/**
 * @param {WebMol.Material=} material
 * @returns {WebMol.Material}
 */
WebMol.Material.prototype.clone = function(material) {};

WebMol.Material.prototype.dispose = function () {};

/** 
 * Since we can instantiate materials with a matSpec
 * @constructor
 * @struct
 * @extends {WebMol.Material}
 */
var matSpec = {};
matSpec.color;
matSpec.linewidth;
matSpec.linecap;
matSpec.linejoin;
matSpec.vertexColors;
matSpec.fog;
matSpec.ambient;
matSpec.emissive;
matSpec.wrapAround;
matSpec.wrapRGB;
matSpec.map;
matSpec.lightMap;
matSpec.specularMap;
matSpec.envMap;
matSpec.reflectivity;
matSpec.refractionRatio;
matSpec.wireframe;
matSpec.wireframeLinewidth;
matSpec.wireframeLinecap;
matSpec.wireframeLinejoin;
matSpec.shading;
matSpec.skinning;
matSpec.useScreenCoordinates;
matSpec.depthTest;
matSpec.sizeAttenuation;
matSpec.scaleByViewPort;
matSpec.alignment;
matSpec.uvOffset;
matSpec.uvScale;

WebMol.MaterialIdCount;

/**
 * @constructor
 * @extends {WebMol.Material}
 * @param {matSpec} parameters
 */
WebMol.LineBasicMaterial = function(parameters) {};
/**
 * @override
 */
WebMol.LineBasicMaterial.prototype.clone = function() {};

/**
 * @construtor
 * @extends {WebMol.Material}
 * @param {matSpec} parameters
 */
WebMol.MeshLambertMaterial = function(parameters) {};
/** @override */
WebMol.MeshLambertMaterial.prototype.clone = function() {};

/**
 * @constructor
 * @struct
 * @extends {WebMol.Material}
 * @param {matSpec} parameters
 */
WebMol.SpriteMaterial = function(parameters) {};
/** @override */
WebMol.SpriteMaterial.prototype.clone = function() {};

//Alignment for Sprites
/** @enum {WebMol.Vector2} */
WebMol.SpriteAlignment = {};
WebMol.SpriteAlignment.topLeft;
WebMol.SpriteAlignment.topCenter;
WebMol.SpriteAlignment.topRight;
WebMol.SpriteAlignment.centerLeft;
WebMol.SpriteAlignment.center;
WebMol.SpriteAlignment.centerRight;
WebMol.SpriteAlignment.bottomLeft;
WebMol.SpriteAlignment.bottomCenter;
WebMol.SpriteAlignment.bottomRight;

/**
 * @constructor
 * @extends {WebMol.EventDispatcher}
 * @param {Object} image - An html canvas element
 */
WebMol.Texture = function(image) {};
WebMol.Texture.needsUpdate;
/**
 * @param {WebMol.Texture=} texture
 * @returns {WebMol.Texture}
 */
WebMol.Texture.prototype.clone = function(texture) {};
WebMol.Texture.prototype.dispose = function() {};

WebMol.TextureIdCount;

/**
 * @constructor
 * @extends {WebMol.Object3D}
 * @param {WebMol.Geometry} geometry
 * @param {WebMol.Material=} material
 * @param {numlike} type
 */
WebMol.Line = function (geometry, material, type) {};

WebMol.LineStrip;
WebMol.LinePieces;

/** 
 * @param {WebMol.Line)
 * @return {WebMol.Line}
 */
WebMol.Line.prototype.clone = function(object) {};

/**
 * @constructor
 * @extends {WebMol.Object3D}
 * @param {WebMol.Geometry} geometry
 * @param {WebMol.Material} material
 */
WebMol.Mesh = function(geometry, material) {};

/**
 * @param {WebMol.Mesh} object
 * @returns {WebMol.Mesh}
 */
WebMol.Mesh.prototype.clone = function (object) {};

/**
 * 
 * @constructor
 * @extends {WebMol.Object3D}
 * @param {WebMol.Material}
 */
WebMol.Sprite = function(material) {};
WebMol.Sprite.rotation3d;
WebMol.Sprite.rotation;
/** @override */
WebMol.Sprite.prototype.updateMatrix = function() {};
/** 
 * 
 * @param {type} object
 * @returns {WebMol.Sprite|WebMol.Sprite.prototype.clone.object|WebMol.Object3D|_L16.my.Sprite.prototype.clone.object|WebMol.Object3D.prototype.clone.object}@param {WebMol.Sprite}
 * @return {WebMol.Sprite}
 */
WebMol.Sprite.prototype.clone = function(object) {};

/** 
 * 
 * @constructor
 * @struct
 */
var rendererSpec = {};
rendererSpec.canvas;
rendererSpec.precision;
rendererSpec.alpha;
rendererSpec.premultipliedAlpha;
rendererSpec.antialias;
rendererSpec.stencil;
rendererSpec.preserveDrawingBuffer;
rendererSpec.clearColor;
rendererSpec.clearAlpha;
rendererSpec.devicePixelRatio;

/**
 * @constructor
 * @param {rendererSpec} parameters
 */
WebMol.Renderer = function(parameters) {};
WebMol.Renderer.render = function() {};

/**
 * @constructor
 * @extends {WebMol.Object3D}
 */
WebMol.Scene = function() {};
WebMol.Scene.fog;    
WebMol.Scene.overrideMaterial;
WebMol.Scene.matrixAutoUpdate;
WebMol.Scene.__objects;
WebMol.Scene.__lights;
WebMol.Scene.__objectsAdded;
WebMol.Scene.__objectsRemoved;

/**
 * @param {WebMol.Object3D} object
 */
WebMol.Scene.prototype.__addObject = function(object) {};

/**
 * @param {WebMol.Object3D} object
 */
WebMol.Scene.prototype.__removeObject = function(object) {};

/**
 * @constructor
 * @param {number} hex
 * @param {number} near
 * @param {number} far
 */
WebMol.Fog = function(hex, near, far) {};

/** @returns {WebMol.Fog} */
WebMol.Fog.prototype.clone = function() {};

/**
 * @struct
 */
WebMol.ShaderUtils = {};

/**
 * @param {uniformsList} uniforms_src
 * @returns {uniformsList}
 */    
WebMol.ShaderUtils.clone = function(uniforms_src) {};

/**
 * @dict
 */
WebMol.ShaderLib = {};
WebMol.ShaderLib['basic'];
WebMol.ShaderLib['lambert'];
WebMol.ShaderLib['sprite'];

/** @struct */
var shader = {};
/** @type {string} */
shader.fragmentShader;
/** @type {string} **/
shader.vertexShader;
/** @type {uniformsList} */
shader.uniforms;

/** @typedef {{type: string, value}} */
var uniform;

/** @type {Object.<?,{uniform}>} */
var uniformsList = {};
uniformsList.opacity;
uniformsList.diffuse;
uniformsList.fogColor;
uniformsList.fogNear;
uniformsList.fogFar;
uniformsList.ambient;           
uniformsList.emissive;
uniformsList.ambientLightColor;
uniformsList.directionalLightColor;
uniformsList.directionalLightDirection;