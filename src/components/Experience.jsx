import { OrbitControls } from "@react-three/drei";
import Dog from "./dog";
import Keqing from "./Keqing";

const Experience = () => {
    return (
        <>
            {/* 可移动 */}
            <OrbitControls /> 
            
            {/* <mesh> */}
                {/* 图画缓冲区 & 图形 */}
                <boxBufferGeometry />
                {/* <meshBasicMaterial /> */}
            {/* </mesh> */}
            
            {/* 灯光加载 */}
            <ambientLight />
            <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />

            {/* 加载模型 */}
            <Dog />
            <Keqing  position={[-1, -1, -1]}  />
            
            {/* 阴影 */}
            <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
                <planeBufferGeometry args={[10, 10, 1, 1]} />
                <shadowMaterial transparent opacity={0.2} />
            </mesh>
        </>
    );
};

export default Experience;