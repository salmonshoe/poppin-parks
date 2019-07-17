import React, {useState} from 'react';
import ReactMapGL from "react-map-gl";
//import * parkDate from "../data/skateboard.json";


function Park() {
const [viewport,setViewpoint] = useState({
    latitude: 39.55555,
    longitude: -75.163526,
    width: "100vw",
    height: "100vh",
    zoom: 10
});
require("dotenv").config()
 return ( 
     <div>
         <ReactMapGL
         {...viewport}
         mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
         mapStyle = "mapbox://styles/benngo89/cjy51v2yf0aru1coxq4swjwje"
          onViewportChange={viewport => {
            setViewpoint(viewport);

          }}
         >
        </ReactMapGL>
     </div>
 );
}

export default Park;