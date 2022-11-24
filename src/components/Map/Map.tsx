import React, {useRef, useEffect} from 'react'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapa from './map.module.css'


const Map = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  useEffect(() => {
    
    mapboxgl.accessToken = "pk.eyJ1IjoicGFibG9zNTciLCJhIjoiY2w1ZnUyaDl1MTNtMjNqbnRwcWRtaDY2cCJ9.yhPZqGTzceXkygvQ_DWDAw";
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [15.4542, 18.7322], // center map on Chad
      zoom: 1.8
    })
  }, []);


  return (
    <> 
      <div className={mapa.containermap} ref={mapContainer} />
    </>
  )
}

export default Map;
