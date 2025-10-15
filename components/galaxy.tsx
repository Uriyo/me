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
// import html from "@/public/images/html.svg"
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
// import materialUi from "@/public/images/material-ui-svgrepo-com.svg"
import shadcn from "@/public/images/shadcn2.png";
import express from "@/public/images/express-svgrepo-com.svg"
import pinecone from "@/public/images/pinecone.png"
import livekit from "@/public/images/livekit.png"
import langchain from "@/public/images/langchain.png"
import n8n from "@/public/images/n8n.png"
import deepgram from "@/public/images/deepgram.png"
import flask from "@/public/images/flask.png"
import TextType from "./ui/TextType";



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
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex items-center justify-center flex-col text-center"
      >
        <h1 className="text-4xl md:text-8xl font-semibold ">
          <span className="font-futuraThin  mb-6 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            KUSHAGRA GANGWAR{" "}
          </span>
        </h1>
        <h2 className=" mt-5 md:mt-10 font-futuraThin text-xl md:text-3xl tracking-widest">
          
          <TextType 
            text={["Software Engineer | Tech Writer"]}
            typingSpeed={65}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
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
        transition={{ duration: 0.4 }}
        className="mx-auto px-10 md:px-5 text-2xl max-w-3xl font-futuraBook"
      >
        <p>I am a Software Engineer<span className="font-extrabold animate-ping">_</span>
        </p>
        <p className=" text-lg md:text-2xl">
          I specialize in building intelligent applications that leverage the power of Generative AI, 
          with expertise in RAG (Retrieval-Augmented Generation) applications, full-stack development, 
          and cloud computing. My focus is on delivering scalable, secure, and efficient solutions that 
          transform user experiences. 
          <br />
          <br />
          Throughout my career, I&apos;ve successfully:
          <br />
          • Implemented user authentication systems serving {" "}
          <span className="underline">500+ users</span>
          <br />
          • Developed AI-powered applications using OpenAI and LangChain
          <br />
          • Achieved significant improvements in deployment efficiency and scalability
          <br />
          • Created innovative solutions that enhance user engagement and experience
        </p>
        

        <div className="tracking-wider text-3xl text-center mt-64">
          TECHNOLOGIES I HAVE WORKED ON
          <br />
          <br />
          <br />
          <div className="pb-28  grid md:grid-cols-4 grid-cols-2 gap-6 max-w-5xl mx-28 ">
            <Image alt="next" height={90} width={90} src={next}   className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="langchain" height={90} width={90} src={langchain}  className="transition-transform duration-300 hover:scale-110" />
            <Image alt="n8n" height={90} width={90} src={n8n}  className="transition-transform duration-300 hover:scale-110" />
            
            <Image alt="livekit" height={80} width={80} src={livekit} className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="deepgram" height={90} width={90} src={deepgram}  className="rounded-full transition-transform duration-300 hover:scale-110" />
            <Image alt="pinecone" height={80} width={80} src={pinecone} className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="flask" height={80} width={80} src={flask} className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="react" height={90} width={90} src={react}  className="transition-transform duration-300 hover:scale-110" />
            <Image alt="nodejs" height={90} width={90} src={nodejs}  className="transition-transform duration-300 hover:scale-110" />
            <Image alt="express" height={90} width={90} src={express}  className="transition-transform duration-300 hover:scale-110" />
            
            <Image alt="javascript" height={100} width={100} src={javascript}  className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="typescript" height={90} width={90} src='https://res.cloudinary.com/doyqpfgiq/image/upload/v1737874457/folioassets/1200px-Typescript_logo_2020.svg_ha5fy1.webp' />
            <Image
              alt="aws"
              height={90}
              width={90}
              src={aws}
              className="rounded-full transition-transform duration-300 hover:scale-110"
            />
            
            
            <Image alt="docker" height={100} width={100} src={docker} className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="supabase" height={80} width={80} src={supabase} className="transition-transform duration-300 hover:scale-110"/>
            
            {/* <Image alt="nexticon" height={90} width={90} src={html}  className="transition-transform duration-300 hover:scale-110" /> */}
            <Image alt="firebase" height={100} width={100} src={firebase} className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="postgres" height={100} width={100} src={postgres} className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="mongo" height={90} width={90} src={mongo} className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="git" height={90} width={90} src={git} className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="tailwind" height={90} width={90} src={tailwind} className="transition-transform duration-300 hover:scale-110"/>
            <Image alt="shadcn" height={90} width={90} src={shadcn} className="transition-transform duration-300 hover:scale-110"/>
            {/* <Image alt="nexticon" height={90} width={90} src={materialUi} className="transition-transform duration-300 hover:scale-110"/> */}
            <Image alt="google appscripts" height={90} width={90} src='https://res.cloudinary.com/doyqpfgiq/image/upload/v1737874460/folioassets/768px-Google_Apps_Script.svg_vv0zzf.webp'
                className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </motion.div>
      {/* <Tech/> */}
      {/* <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas> */}
      {/* <div className="absolute">
        sdfsd
      </div> */}
    </div>
  );
}