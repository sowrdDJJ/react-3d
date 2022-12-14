/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: _INSTICT_ (https://sketchfab.com/_INSTICT_)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/keqing-fbx-with-textures-25b8e7745ffe423aa2a01f5cee398373
title: Keqing fbx with textures
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Model = (props) => {
  const { nodes, materials } = useGLTF('./model/keqing/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh geometry={nodes.Object_247.geometry} material={materials.material} skeleton={nodes.Object_247.skeleton} castShadow />
            <skinnedMesh geometry={nodes.Object_248.geometry} material={materials.material_1} skeleton={nodes.Object_248.skeleton} castShadow />
            <skinnedMesh geometry={nodes.Object_249.geometry} material={materials.material_2} skeleton={nodes.Object_249.skeleton} castShadow />
            <skinnedMesh geometry={nodes.Object_250.geometry} material={materials.material_3} skeleton={nodes.Object_250.skeleton} castShadow />
            <skinnedMesh geometry={nodes.Object_251.geometry} material={materials.material_4} skeleton={nodes.Object_251.skeleton} castShadow />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Model

useGLTF.preload('./model/keqing/scene.gltf')


