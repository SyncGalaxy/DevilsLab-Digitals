"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current) return;

    let scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer,
        plexusGroup: THREE.Group,
        particleSystem: THREE.Points,
        nodes: THREE.Mesh[] = [],
        lines: THREE.Line[] = [];
    
    const mouse = new THREE.Vector2();

    const init = () => {
      try {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 25;
        
        renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Add ambient particles
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 2000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const color = new THREE.Color();
        
        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 60;
          positions[i + 1] = (Math.random() - 0.5) * 60;
          positions[i + 2] = (Math.random() - 0.5) * 60;
          
          // Gradient colors - blue to purple
          const hue = 0.55 + Math.random() * 0.15; // blue-purple range
          color.setHSL(hue, 0.7, 0.6);
          colors[i] = color.r;
          colors[i + 1] = color.g;
          colors[i + 2] = color.b;
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
          size: 0.15,
          vertexColors: true,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
        });
        
        particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleSystem);

        plexusGroup = new THREE.Group();
        scene.add(plexusGroup);

        const nodeCount = 100;
        const radius = 12;
        const nodeGeometry = new THREE.SphereGeometry(0.12, 16, 16);
        
        // Create nodes with gradient colors
        for (let i = 0; i < nodeCount; i++) {
          const phi = Math.acos(-1 + (2 * i) / nodeCount);
          const theta = Math.sqrt(nodeCount * Math.PI) * phi;
          
          // Alternate between blue and purple tones
          const colorValue = i % 2 === 0 ? 0x3B82F6 : 0x8B5CF6;
          
          const node = new THREE.Mesh(
            nodeGeometry,
            new THREE.MeshBasicMaterial({ color: colorValue, transparent: true, opacity: 0.9 })
          );
          
          node.position.setFromSphericalCoords(radius, phi, theta);
          nodes.push(node);
          plexusGroup.add(node);
        }

        // Create connections with gradient
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            if (nodes[i].position.distanceTo(nodes[j].position) < radius * 0.4) {
              const lineColor = Math.random() > 0.5 ? 0x60A5FA : 0xA78BFA;
              const lineMaterial = new THREE.LineBasicMaterial({ 
                color: lineColor, 
                transparent: true, 
                opacity: 0.2 
              });
              const geometry = new THREE.BufferGeometry().setFromPoints([nodes[i].position, nodes[j].position]);
              const line = new THREE.Line(geometry, lineMaterial);
              lines.push(line);
              plexusGroup.add(line);
            }
          }
        }

        animate();
      } catch(e) {
        console.error("Failed to initialize 3D background", e);
      }
    };

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      const time = Date.now() * 0.0001;

      // Rotate particle system
      if (particleSystem) {
        particleSystem.rotation.y += 0.0003;
        particleSystem.rotation.x += 0.0002;
      }

      plexusGroup.rotation.y += 0.0008;

      // Enhanced mouse interaction
      plexusGroup.rotation.y += (mouse.x * 0.3 - plexusGroup.rotation.y) * 0.03;
      plexusGroup.rotation.x += (-mouse.y * 0.3 - plexusGroup.rotation.x) * 0.03;

      // Enhanced node animations
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time * 4 + i * 0.2) * 0.3 + 0.7; // 0.7 to 1.0
        (node.material as THREE.MeshBasicMaterial).opacity = pulse;
        
        // Floating effect
        const floatY = Math.sin(time * 2 + i * 0.5) * 0.3;
        const floatX = Math.cos(time * 1.5 + i * 0.3) * 0.3;
        node.position.y += (floatY - node.position.y) * 0.01;
        node.position.x += (floatX - node.position.x) * 0.01;
        
        // Scale pulse
        const scale = 1 + Math.sin(time * 3 + i * 0.4) * 0.3;
        node.scale.set(scale, scale, scale);
      });
      
      // Dynamic line opacity
      const centerPulse = (Math.sin(time * 2) + 1) / 2 * 0.15 + 0.1; // 0.1 to 0.25
      lines.forEach((line, i) => {
        const linePulse = centerPulse + Math.sin(time * 3 + i * 0.1) * 0.05;
        (line.material as THREE.LineBasicMaterial).opacity = linePulse;
      });

      renderer.render(scene, camera);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    init();
    
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      // Dispose Three.js objects
      if(scene) {
        scene.traverse(object => {
          if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
      if(renderer) renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-40" />;
}
