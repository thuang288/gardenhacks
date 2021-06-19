import React from 'react'
import Globe from 'react-globe.gl';
import space from "./imgs/space.jpg"

export default function Earth() {
    return (
    <Globe 
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" 
    />
    )
}
