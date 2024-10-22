import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// Import OrbitControls from three.js examples
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const MoonGlobe = () => {
  const mountRef = useRef(null); // Ref to hold the 3D canvas

  useEffect(() => {
    // 1. Set up the Scene
    const scene = new THREE.Scene();

    // 2. Set up the Camera
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );
    camera.position.z = 5;

    // 3. Set up the Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 4. Load texture (Use your own image as texture)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/images/moon.jpeg'); // Load the moon.jpeg from the public/images folder

    // Ensure the texture is wrapped correctly across the entire sphere
    texture.wrapS = THREE.RepeatWrapping; // Repeat horizontally
    texture.wrapT = THREE.RepeatWrapping; // Repeat vertically

    // Adjust the texture repeat settings to cover both hemispheres
    texture.repeat.set(1, 1); // Repeat once for both horizontal and vertical directions

    // 5. Create the 3D Sphere (Moon Globe)
    const geometry = new THREE.SphereGeometry(2, 64, 64); // Radius 2, 64 segments for smoothness

    // Use MeshStandardMaterial for better lighting support
    const material = new THREE.MeshStandardMaterial({
      map: texture, // Apply texture to the material
      side: THREE.DoubleSide, // Ensure texture is visible from both sides
    });

    // Add the sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // 6. Add lighting to the scene to make the material more visible
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // 7. Initialize OrbitControls for mouse interaction (rotation and zoom)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true; // Enable zoom with scroll
    controls.enableRotate = true; // Enable rotation with mouse drag
    controls.enablePan = false;  // Disable panning if not required
    controls.screenSpacePanning = false; // Optional: Disable screen-space panning

    // 8. Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update the controls for smooth user interaction
      sphere.rotation.y += 0.01; // Rotate the sphere for a 3D effect
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup when the component unmounts
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default MoonGlobe;
