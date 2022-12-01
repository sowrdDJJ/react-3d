import Experience from "./components/Experience"
import { Canvas } from "@react-three/fiber"


function App() {

  return (
    <Canvas shadows camera={{ position: [-2, 5, 10], fov: 50 }}>
      <Experience />
    </Canvas>
  )
}

export default App
