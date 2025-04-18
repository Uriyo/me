"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Github,Linkedin,Twitter, Mail } from 'lucide-react';

function Stars(props: any) {
  const ref = useRef<any>();
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(5000), { radius: 1.5 }),
    []
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function Tech() {
  const router = useRouter();
  const handleClick = () => {
    console.log("clicked");
    router.push("/contact"); // Navigate to the /contact page
  };
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 mt-96 flex items-center justify-center flex-col text-center"
      >
        <h1 className="text-4xl md:text-8xl font-semibold ">
        
        </h1>
        <div className="flex space-x-6  ">
          <Link href="https://github.com/Uriyo" target="_blank" className="hover:scale-110 transition-transform">
            <Github className="w-8 h-8 text-gray-400" />
          </Link>
          <Link href="https://www.linkedin.com/in/kushagra6434/" target="_blank" className="hover:scale-110 transition-transform">
            <Linkedin className="w-8 h-8 text-gray-400" />
          </Link>
          <Link href="https://x.com/Kushagra_Gojo" target="_blank" className="hover:scale-110 transition-transform">
            <Twitter className="w-8 h-8 text-gray-400" />
          </Link>
          <Link href="mailto:kushagra6434@gmail.com" className="hover:scale-110 transition-transform">
            <Mail className="w-8 h-8 text-gray-400" />
          </Link>
        </div>
        
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-colors"
        >
          Connect
        </motion.button> */}
      </motion.div>
    </div>
  );
}