import React, { useState, useEffect, useRef } from 'react'
import Globe from 'react-globe.gl';

export default function Earth() {
    
    const globeEl = useRef();
   
 
    useEffect(() => {
        // Auto-rotate
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.3;
    }, []);

    return (
    <Globe 
        ref={globeEl}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" 
    />
    )
}
