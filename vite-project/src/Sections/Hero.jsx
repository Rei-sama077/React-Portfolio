import { section } from 'motion/react-client'
import React, { Suspense } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import Herotxt from '../components/herotxt'
import Parallax from '../components/Parallax'
import { Astronaut } from '../components/Astro'
import { Float } from "@react-three/drei";
import { useMediaQuery } from 'react-responsive';
import { easing } from "maath";
import Loader from "../components/Loader";


const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 853});
  return (<section className= 'flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space' > 
  <Herotxt />
  <Parallax />
  <figure 
    className="absolute inset-0"
  style={{
     height: "100vh", weight: "100vw"}}
  >
  
  <Canvas camera={{position:[0,1,3]}}>
  <Suspense fallback={<Loader />}>
  <Float>
    <Astronaut scale={isMobile && 0.2} position={isMobile && [0,-1.5,0]}
  />
  </Float>
  <Rig />
  </Suspense>
  </Canvas>
  </figure>
</section>
  );
};

function Rig(){
  return useFrame((state, delta) =>{
  easing.damp3(state.camera.position, [state.mouse.x /10, 1+ state.mouse.y/10, 3], 0.5, delta);
  })
}

export default Hero