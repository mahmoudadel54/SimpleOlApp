import React, { Component } from 'react'
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import 'ol/ol.css'
import "./style.css";

class MapComponentClass extends Component {
    constructor(props){
        super(props);
        this.state = { 
            map:undefined
         } 
    }
    componentDidMount(){
        let view = new View({
            center: [0, 0],
            zoom: 2,
          });
          let osmLayer = new Tile({
            source: new OSM(),
          });
          let mapInstance = new Map({
            view: view,
            layers: [osmLayer],
            target: 'map',
          }); 
        this.setState({map:mapInstance});
    }
    componentWillUnmount(){
        this.setState({map:null})
    }
     render() { 
        return (
            <div id="map"></div>
        );
    }
}
 
export default MapComponentClass;