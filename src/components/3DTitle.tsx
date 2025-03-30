'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, OrbitControls, PerspectiveCamera, Environment, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Cube component for better performance
function Cube({ position, color, scale }: { position: [number, number, number], color: string, scale: [number, number, number] }) {
  return (
    <mesh position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.1} />
    </mesh>
  );
}

// Enhanced title with better visual effects
function AnimatedTitle() {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();
  
  // Dynamic font size based on viewport
  const fontSize = viewport.width < 10 ? 0.8 : 1.2;
  
  // Generate random shine positions
  const shinePositions = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 1
      ] as [number, number, number],
      size: Math.random() * 0.2 + 0.05,
      speed: Math.random() * 0.5 + 0.5
    }));
  }, []);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Animate the title
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
    
    // Pulse effect
    const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.03;
    groupRef.current.scale.set(scale, scale, scale);
    
    // Color animation for text
    if (textRef.current && textRef.current.material) {
      const material = textRef.current.material as THREE.MeshBasicMaterial;
      if (hovered) {
        material.color.set(new THREE.Color('#ff9d00').lerp(
          new THREE.Color('#ffcc00'), 
          Math.sin(state.clock.getElapsedTime() * 3) * 0.5 + 0.5
        ));
      }
    }
  });
  
  return (
    <group position={[0, 0, 0]}>
      <Float 
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <group ref={groupRef}>
          {/* Main Text */}
          <Text
            ref={textRef}
            fontSize={fontSize}
            position={[0, 0, 0]}
            textAlign="center"
            color={hovered ? "#ff9d00" : "#ffffff"}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            castShadow
            receiveShadow
            characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"
          >
            MEHIR PORTFOLIO
          </Text>
          
          {/* Floating shine particles around text */}
          {shinePositions.map((shine, i) => (
            <mesh
              key={i}
              position={shine.position}
              scale={[shine.size, shine.size, shine.size]}
            >
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.6}
              />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}

// 3D shapes that float around the scene
function FloatingShapes() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });
  
  return (
    <group ref={group}>
      {/* Create multiple floating shapes */}
      {Array.from({ length: 10 }).map((_, i) => (
        <Float 
          key={i}
          speed={Math.random() * 2 + 1} 
          rotationIntensity={Math.random() * 0.5}
          floatIntensity={Math.random() * 0.5 + 0.5}
          position={[
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10
          ]}
        >
          <Cube 
            position={[0, 0, 0]} 
            color={`hsl(${Math.random() * 360}, 80%, 50%)`}
            scale={[Math.random() + 0.5, Math.random() + 0.5, Math.random() + 0.5]}
          />
        </Float>
      ))}
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });
  
  // Generate random particles
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 25;
    positions[i3 + 1] = (Math.random() - 0.5) * 25;
    positions[i3 + 2] = (Math.random() - 0.5) * 25;
    
    colors[i3] = Math.random();
    colors[i3 + 1] = Math.random();
    colors[i3 + 2] = Math.random();
  }
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function AnimatedScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#ff9d00" />
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      <ParticleField />
      <FloatingShapes />
      <AnimatedTitle />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
        minPolarAngle={Math.PI / 2 - 0.5} 
        maxPolarAngle={Math.PI / 2 + 0.5}
      />
      <Environment preset="night" />
    </>
  );
}

export default function Title3D() {
  return (
    <div className="w-full h-full">
      <Canvas dpr={[1, 2]} style={{ height: '100%', width: '100%' }}>
        <AnimatedScene />
      </Canvas>
    </div>
  );
} 