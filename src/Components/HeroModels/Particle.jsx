import { useRef, useMemo, useCallback } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 300 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 8, // Reduced spread
          Math.random() * 6, // Reduced height range
          (Math.random() - 0.5) * 8, // Reduced spread
        ],
        speed: 0.002 + Math.random() * 0.001, // Reduced speed variation
      });
    }
    return temp;
  }, [count]);

  const updateParticles = useCallback(() => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 6; // Reduced reset height
      positions[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  }, [count, particles]);

  useFrame(updateParticles);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      pos[i * 3] = p.position[0];
      pos[i * 3 + 1] = p.position[1];
      pos[i * 3 + 2] = p.position[2];
    });
    return pos;
  }, [count, particles]);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.06} // Reduced particle size
        transparent
        opacity={0.7} // Reduced opacity
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;