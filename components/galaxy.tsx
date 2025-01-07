"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Tech } from "./tech";
import Image from "next/image";
import next from "@/public/images/next.svg";
import react from "@/public/images/react.svg"
import html from "@/public/images/html.svg"
import javascript from "@/public/images/javascript.svg"
import firebase from "@/public/images/firebase.svg"
import docker from "@/public/images/docker.svg"
import postgres from "@/public/images/postgres.svg"
import nodejs from "@/public/images/nodejs.svg"
import aws from "@/public/images/aws.svg"
import mongo from "@/public/images/mongo.svg"
import supabase from "@/public/images/supabase.svg"
import git from "@/public/images/git.svg"
import tailwind from "@/public/images/tailwind.svg"
import materialUi from "@/public/images/material-ui-svgrepo-com.svg"
import shadcn from "@/public/images/shadcn2.png";
import express from "@/public/images/express-svgrepo-com.svg"
import Link from "next/link";


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

export function Galaxy() {
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
        className="absolute inset-0 flex items-center justify-center flex-col text-center"
      >
        <h1 className="text-4xl md:text-8xl font-semibold ">
          <span className="font-futuraThin  mb-6 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            KUSHAGRA GANGWAR{" "}
          </span>
        </h1>
        <h2 className=" mt-5 md:mt-10 font-futuraThin text-xl md:text-3xl tracking-widest">
          WEB DEVELOPER | TECH WRITER
        </h2>

        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-colors"
        >
          Connect
        </motion.button> */}
        
      </motion.div>
      <br />
      <br />
      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto px-10 md:px-5 text-2xl max-w-3xl font-futuraBook"
      >
        <p>I am a Full-stack Developer<span className="font-extrabold animate-ping">_</span>
        </p>
        <p className=" text-lg md:text-2xl">
          I specialize in web development and cloud computing, utilizing a wide
          range of technologies to deliver scalable, secure, and efficient
          solutions. <br />
          <br />
          My job is to build applications that are not only functional and
          user-friendly but also robust and scalable. I have implemented user
          signup and login processes for over{" "}
          <span className="underline">500 users</span>, integrated critical
          tools for comprehensive access control, and achieved faster deployment
          times and improved scalability. My aim is to deliver innovative
          solutions that enhance user engagement and experience.
        </p>
        

        <div className="tracking-wider text-3xl text-center mt-64">
          TECHNOLOGIES I HAVE WORKED ON
          <br />
          <br />
          <br />
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 max-w-5xl mx-28 ">
            <Image alt="nexticon" height={90} width={90} src={next} />
            <Image alt="nexticon" height={90} width={90} src={react} />
            <Image alt="nexticon" height={90} width={90} src={nodejs} />
            <Image alt="nexticon" height={90} width={90} src={express} />
            <Image alt="nexticon" height={90} width={90} src={html} />
            <Image alt="nexticon" height={100} width={100} src={javascript} />
            <Image alt="nexticon" height={90} width={90} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' />
            <Image
              alt="nexticon"
              height={90}
              width={90}
              className="rounded-full"
              src={aws}
            />
            <Image alt="nexticon" height={100} width={100} src={docker} />
            <Image alt="nexticon" height={80} width={80} src={supabase} />
            <Image alt="nexticon" height={100} width={100} src={firebase} />
            <Image alt="nexticon" height={100} width={100} src={postgres} />
            <Image alt="nexticon" height={90} width={90} src={mongo} />
            <Image alt="nexticon" height={90} width={90} src={git} />
            <Image alt="nexticon" height={90} width={90} src={tailwind} />
            <Image alt="nexticon" height={90} width={90} src={shadcn} />
            <Image alt="nexticon" height={90} width={90} src={materialUi} />
            
            
            <Image alt="nexticon" height={90} width={90} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/768px-Google_Apps_Script.svg.png?20221103122014' />
          </div>
        </div>
      </motion.div>
      {/* <Tech/> */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      {/* <div className="absolute">
        sdfsd
      </div> */}
    </div>
  );
}