"use client";

import React from 'react'
import {Suspense,useEffect,useState} from 'react';
import { Canvas } from "@react-three/fiber";
import {OrbitControls, Preload,useGLTF} from '@react-three/drei';

import CanvasLoader from '../loader';

const Model = () => {

    const tron=useGLTF('./nftModel/scene.gltf')
    
    return (
      <mesh>
          <hemisphereLight intensity={1}
           groundColor="black"/>
           <pointLight intensity={15}
           position={[3,0,0]}/>
           <primitive
              object={tron.scene}
              scale={3}
              position={[0,-2.5,0]}
              rotation={[0,1.8 ,-6.5]}
           />
      </mesh>
    )
}

const TronCanvas=()=>{
    return(
        <Canvas
            frameloop="demand"
            shadows
            camera={{position:[30,-4,5], fov:13}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                autoRotate
                autoRotateSpeed={3} 
                 enableZoom={false}
                 maxPolarAngle={Math.PI/2}
                 minPolarAngle={Math.PI/2}
                />
                <Model/>
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default TronCanvas;