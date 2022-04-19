import React, { useState } from "react";
import {useFrame } from "@react-three/fiber";


export function Cube() {

  const mesh = React.useRef();
  const [active,setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x += 0.01));
  
  return (
    <mesh  ref={mesh} 
           scale={active ? 4 : 2}
           onClick={()=> setActive(!active)}>
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue"/>
    </mesh>
  )

}