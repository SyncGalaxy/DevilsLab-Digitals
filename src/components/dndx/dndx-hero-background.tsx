"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const DndxHeroBackground = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient || !mountRef.current) return;

        const currentMount = mountRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);

        const particleCount = 5000;
        const positions = new Float32Array(particleCount * 3);
        
        // Define a single vibrant color
        const particleColor = new THREE.Color(0x8A2BE2); // A vibrant purple

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 25;
            positions[i3 + 1] = (Math.random() - 0.5) * 25;
            positions[i3 + 2] = (Math.random() - 0.5) * 25;
        }

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: particleColor,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending, // This creates a nice glowing effect
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        let mouse = new THREE.Vector2();

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Slower, more elegant rotation
            particles.rotation.y = elapsedTime * 0.03;

            // Subtle mouse follow
            camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
            camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            if (renderer.domElement.parentNode === currentMount) {
                currentMount.removeChild(renderer.domElement);
            }
            scene.traverse(object => {
                if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
                    if (object.geometry) object.geometry.dispose();
                    const material = object.material as THREE.Material | THREE.Material[];
                    if (Array.isArray(material)) {
                        material.forEach(mat => mat.dispose());
                    } else if (material) {
                        material.dispose();
                    }
                }
            });
            renderer.dispose();
        };
    }, [isClient]);

    return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default DndxHeroBackground;
