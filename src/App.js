import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {Cube} from "./components/Cube"
import "./index.css";


export default function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight />
        <Cube />
      </Canvas>
    </div>
  );
}

