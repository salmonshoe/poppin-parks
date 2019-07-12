import React, {useState} from 'react';
import ReactMapGL from "react-map-gl"

function Park() {
const [viewport] = useState({
    latitude: 39.952724,
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
         mapboxApiAccessToken = {
             process.env.REACT_APP_MAPBOX_TOKEN
         }
         >
             markers here
         </ReactMapGL>
     </div>
 );
}

export default Park;