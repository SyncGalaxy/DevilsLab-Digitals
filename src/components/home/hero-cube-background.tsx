"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCubeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        cube: THREE.Group;
    } | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const container = canvasRef.current.parentElement;
        if (!container) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = null; // Transparent background

        // Camera setup - positioned for right side of hero
        const camera = new THREE.PerspectiveCamera(
            35,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.set(6, 4, 8);
        camera.lookAt(0, 0, 0);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true,
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Materials
        const navyBlue = new THREE.Color(0x0a192f); // Deep navy blue
        const lightGray = new THREE.Color(0xe5e7eb); // Subtle light gray

        // Create main cube with layered structure
        const cubeGroup = new THREE.Group();

        // Main cube (navy blue with sharp edges)
        const mainCubeGeometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
        const mainCubeMaterial = new THREE.MeshStandardMaterial({
            color: navyBlue,
            metalness: 0.3,
            roughness: 0.4,
            flatShading: false,
        });
        const mainCube = new THREE.Mesh(mainCubeGeometry, mainCubeMaterial);
        mainCube.castShadow = true;
        mainCube.receiveShadow = true;
        cubeGroup.add(mainCube);

        // Add wireframe edges for definition
        const edgesGeometry = new THREE.EdgesGeometry(mainCubeGeometry);
        const edgesMaterial = new THREE.LineBasicMaterial({
            color: 0x1e3a5f,
            linewidth: 2,
        });
        const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
        cubeGroup.add(edges);

        // Subtle accent layer (smaller cube inside, offset)
        const accentCubeGeometry = new THREE.BoxGeometry(1.8, 1.8, 1.8);
        const accentCubeMaterial = new THREE.MeshStandardMaterial({
            color: lightGray,
            metalness: 0.2,
            roughness: 0.6,
            transparent: true,
            opacity: 0.3,
        });
        const accentCube = new THREE.Mesh(accentCubeGeometry, accentCubeMaterial);
        accentCube.position.set(0.2, 0.2, 0.2);
        cubeGroup.add(accentCube);

        // Position cube group slightly to the right and angle it
        cubeGroup.position.set(0, 0, 0);
        cubeGroup.rotation.set(
            Math.PI / 8,  // X rotation (slight tilt forward)
            Math.PI / 6,  // Y rotation (angled view)
            0             // Z rotation
        );

        scene.add(cubeGroup);

        // Studio lighting setup
        // 1. Key light (main light from top-right)
        const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
        keyLight.position.set(5, 8, 5);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 2048;
        keyLight.shadow.mapSize.height = 2048;
        keyLight.shadow.camera.near = 0.5;
        keyLight.shadow.camera.far = 50;
        scene.add(keyLight);

        // 2. Fill light (softer, from left side)
        const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
        fillLight.position.set(-5, 3, 3);
        scene.add(fillLight);

        // 3. Ambient light (soft overall illumination)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // 4. Rim light (subtle back light for depth)
        const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
        rimLight.position.set(0, 2, -5);
        scene.add(rimLight);

        // Ground plane for shadow (invisible but receives shadows)
        const groundGeometry = new THREE.PlaneGeometry(20, 20);
        const groundMaterial = new THREE.ShadowMaterial({
            opacity: 0.08, // Very subtle shadow
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -2;
        ground.receiveShadow = true;
        scene.add(ground);

        // Set initial isometric angle
        cubeGroup.rotation.x = Math.PI / 8;  // Slight tilt forward
        cubeGroup.rotation.y = Math.PI / 6;  // Rotated for 3/4 view

        // Animation loop with smooth rotation
        let animationFrameId: number;
        const animate = () => {
            // Smooth, continuous rotation
            cubeGroup.rotation.y += 0.005;  // Rotate around Y axis
            cubeGroup.rotation.x += 0.002;  // Slight X rotation for depth

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        // Handle window resize
        const handleResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        // Store scene reference
        sceneRef.current = {
            scene,
            camera,
            renderer,
            cube: cubeGroup,
        };

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
            mainCubeGeometry.dispose();
            mainCubeMaterial.dispose();
            accentCubeGeometry.dispose();
            accentCubeMaterial.dispose();
            edgesGeometry.dispose();
            edgesMaterial.dispose();
            groundGeometry.dispose();
            groundMaterial.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ 
                pointerEvents: 'none',
                background: '#ffffff' // Fallback white background
            }}
        />
    );
}
