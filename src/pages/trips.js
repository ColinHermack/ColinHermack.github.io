import React, { useEffect, useState, useRef } from 'react';
import '../styles/trips.css';
import { NavigationBar, FooterBar } from '../widgets.js';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

function Map(coords=null) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const indianapolis = { lng: -86.148003, lat: 39.791000 }
    const [zoom] = useState(3);
    maptilersdk.config.apiKey = process.env.REACT_APP_MAPTILER_API_KEY;

    const tripData = require('../data/trips.json');
    const markerLocations = []
    for (let i = 0; i < tripData.length; i++) {
        markerLocations.push({
            lat: tripData[i].Latitude,
            lng: tripData[i].Longitude
        })
    }

    useEffect(() => {
        if (map.current) return;

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.WINTER,
            center: [indianapolis.lng, indianapolis.lat],
            zoom: zoom
        });

        for (let i = 0; i < markerLocations.length; i++) {
            new maptilersdk.Marker({color: "#072E33"})
                .setLngLat([markerLocations[i].lng, markerLocations[i].lat])
                .addTo(map.current);
        }
    });

    return (
        <div id='map-container'>
            <div ref={mapContainer} id='map' />
        </div>
    );
}

class Trips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let tripData = require('../data/trips.json');
        for (let i = 0; i < tripData.length; i++) {
            tripData[i]["Start Date"] = new Date(tripData[i]["Start Date"]);
            tripData[i]["End Date"] = new Date(tripData[i]["End Date"]);
        }
        this.setState({trips: tripData});
        console.log(tripData);
    }

    render() {
        if (this.state.trips) {
            return (
                <div id='trips-container'>
                    <NavigationBar />
                    <h1>Trip Logs</h1>
                    <Map />
                    <div id='trips-list'>
                        {this.state.trips.map((trip) => {
                            return (
                                <a href={`../trips/${trip.Name.toLowerCase().replaceAll(":", "").replaceAll(" ", "-")}`} key={trip.Name}>
                                    <div className='trip-name'>{trip.Name}</div>
                                    <div className='trip-date'>{trip["Start Date"].toLocaleDateString()} - {trip["End Date"].toLocaleDateString()}</div>
                                </a>
                            )
                        })}
                    </div>
                    <FooterBar />
                </div>
            )
        } else {
            return (
                <div id='trips-container'>
                    <NavigationBar />
                    <FooterBar />
                </div>
            )
        }
    }
}

export default Trips;