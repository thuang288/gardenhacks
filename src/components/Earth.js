import React, { useState, useEffect, useRef } from 'react'
import Globe from 'react-globe.gl';

export default function Earth() {
    
    const globeEl = useRef();
   
    // i think this is where the api goes?? not sure 

    // useEffect(() => {
    //     // load data
    //     fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json())
    //       .then(countries=> {
    //         setCountries(countries);

    //  this part is to show the effects like this https://github.com/vasturiano/react-globe.gl/blob/master/example/countries-population/preview.png
    
    //         setTimeout(() => {
    //           setTransitionDuration(4000);
    //           setAltitude(() => feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5));
    //         }, 3000);
    //       });
    //   }, []);
 
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
