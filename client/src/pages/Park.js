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
    return(<div>
        <ReactMapGL {...viewport}>
            
        </ReactMapGL> 
        
        <h1>Skate Park</h1> 
        </div>
);
}

export default Park;