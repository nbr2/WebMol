/* core Object3D
 * Base class for Scene, Camera, Geometry
 */

//Object3D base constructor function
WebMol.Object3D = function() {
	
	this.id = WebMol.Object3DIDCount++;
	
	this.name = "";
	
	this.parent = undefined;
	this.children = [];
	
	//TODO: Replace this with own class
	this.position = new THREE.Vector3();
	this.rotation = new THREE.Vector3();
	this.matrix = new THREE.Matrix4();
	this.matrixWorld = new THREE.Matrix4();
	this.quaternion = new THREE.Quaternion();
	//TODO: Do I need this??
	this.eulerOrder = 'XYZ';
	
	this.up = new THREE.Vector3(0, 1, 0);
	this.scale = new THREE.Vector3(1, 1, 1);
	
	this.matrixAutoUpdate = true;
	this.matrixWorldNeedsUpdate = true;
	this.rotationAutoUpdate = true;
	this.useQuaternion = false;
	
	this.visible = true;
	
};

WebMol.Object3D.prototype = {
	
	constructor : WebMol.Object3D,
	
	lookAt : function(vector) {
		
		this.matrix.lookAt(vector, this.postion, this.up);
		
		if (this.rotationAutoUpdate) {
			
			if (this.useQuaternion === true) 
				this.quaternion.copy(this.matrix.decompose()[1]);
			else
				this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder);
		}
	},
	
	//add child object
	add : function(object) {
		if (object === this){
			console.error("Can't add WebMol.Object3D to itself");
			return;
		}
		
		object.parent = this;
		this.children.push(object);
		
		//add to the scene (i.e. follow up this instance's parents until reach the top)
		
		var scene = this;
		
		while (scene.parent !== undefined)
			scene = scene.parent;
			
		if (scene !== undefined && scene instanceof WebMol.Scene) 
			scene.__addObject(object);
		
	},
	
	remove : function(object) {
		
		var index = this.children.indexOf(object);
		
		if (index !== -1) {
			
			object.parent = undefined;
			this.children.splice(index, 1);
			
			//Remove from scene
			
			var scene = this;
			
			while (scene.parent !== undefined)
				scene = scene.parent;
				
			if (scene !== undefined && scene instanceof WebMol.Scene)
				scene.__removeObject(object);
				
		}
	},
	
	updateMatrix : function() {
		
		this.matrix.setPosition(this.position);
		
		if (this.useQuaternion === false) 
			this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder);
		else
			this.matrix.setRotationFromQuaternion(this.quaternion);
		
		//TODO: Do I need this??
		if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1)
			this.matrix.scale(this.scale);
			
		this.matrixWorldNeedsUpdate = true;
		
	},
	
	updateMatrixWorld : function(force) {
		
		if (this.matrixAutoUpdate === true) 
			this.updateMatrix();
		
		if (this.matrixWorldNeedsUpdate === true || force === true) {
			
			if (this.parent === undefined)
				this.matrixWorld.copy(this.matrix);
			else
				this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
				
		}
		
		this.matrixWorldNeedsUpdate = false;
		
		//Update matrices of all children
		for (var i in this.children) {
			this.children[i].updateMatrixWorld(true);
		}
	},
	
	clone : function(object) {
		
		if (object === undefined)
			object = new WebMol.Object3D();
			
		object.name = this.name;
		
		object.up.copy(this.up);
		object.position.copy(this.position);
		object.rotation.copy(this.rotation);
		object.eulerOrder = this.eulerOrder;
		object.scale.copy(this.scale);
		
		object.rotationAutoUpdate = this.rotationAutoUpdate;
		object.matrix.copy(this.matrix);
		object.matrixWorld.copy(this.matrixWorld);
		object.quaternion.copy(this.quaternion);
		
		object.useQuaternion = this.useQuaternion;
		
		object.visible = this.visible;
		
		for (var i in this.children) {
			var child = this.children[i];
			object.add(child.clone());
		}
		
		return object;
		
	}
	
};


WebMol.Object3DIDCount = 0;