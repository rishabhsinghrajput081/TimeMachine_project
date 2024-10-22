// src/Moon.js
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const Moon = () => {
  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a sphere for the Moon
    const geometry = new THREE.SphereGeometry(0.9, 64, 64); // Radius set to 0.9

    // Load the moon texture from the public/images directory
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load('/images/moon_processed.jpeg', (texture) => {
      // Create material with the moon texture
      const material = new THREE.MeshPhongMaterial({
        map: texture,
        emissive: 0xffffff, // Make the material emit white light
        emissiveIntensity: 0.5, // Adjust the intensity of the glow
        shininess: 0, // No shininess for a matte look
      });

      const moon = new THREE.Mesh(geometry, material);
      scene.add(moon);

      // Set up a basic light source
      const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Bright point light
      pointLight.position.set(5, 5, 5); // Position of the light source
      scene.add(pointLight);
    });

    // Set the camera position
    camera.position.z = 3;

    // Add OrbitControls for mouse interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zooming in/out
    controls.enablePan = false;  // Disable panning
    controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation
    controls.minPolarAngle = 0; // Limit vertical rotation

    // Set up post-processing with bloom effect
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    composer.addPass(bloomPass);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      composer.render(); // Render using composer for post-processing effects
    };
    animate();

    // Cleanup on unmount
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // This component does not render anything to the DOM
};

export default Moon;
