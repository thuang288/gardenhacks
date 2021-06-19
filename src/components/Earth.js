import React from 'react'
import Globe from 'react-globe.gl';
import space from "./imgs/space.jpg"

export default function Earth() {
    return (
    <Globe 
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" 
        // backgroundImageUrl="./imgs/space.jpg"
    />
    )
}
