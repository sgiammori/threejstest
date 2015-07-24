/**
 * threejstest
 * threeJS Testing Library
 *
 * Copyright(C) 2015
 * Stefano Giammori
 * Unipi Student
 *
 * All rights reserved.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See theGNU General Public License
 * (http://www.gnu.org/licenses/gpl.txt) for more details.
 *
*/

 /**
  * @file Defines the functions to manage and install plugins
  * @author Stefano Giammori
 */

 /**
  * MyLib.core.Manager namespace
  * @author Stefano Giammori
 */

 MyLib.Manager = {
 };

 (function (a , b) {

    var _this = this;
    var scene;
    var camera;
    var renderer;
    var cube;

    /**
     Executes the main entry point function for the core library
     @memberOf MyLib.core
     @author Stefano Giammori
    */
    this.run = function () {
        _this.init();
        _this.load();
        _this.render();
    };

    this.init = function () {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
    };

    this.load = function () {
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;
    };

    this.render = function render() {
        requestAnimationFrame( render );

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render( scene, camera );
    };


 }).call(MyLib.Manager,1,true);