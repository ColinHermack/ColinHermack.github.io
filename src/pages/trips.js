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
            if (tripData[i]["Start Date"]) {
                tripData[i]["Start Date"] = new Date(tripData[i]["Start Date"]);
                tripData[i]["Start Date"].setTime(tripData[i]["Start Date"].getTime() + (4 * 60 * 60 * 1000))
            }
            if (tripData[i]["End Date"]) {
                tripData[i]["End Date"] = new Date(tripData[i]["End Date"]);
                tripData[i]["End Date"].setTime(tripData[i]["End Date"].getTime() + (4 * 60 * 60 * 1000))
            }
        }
        this.setState({trips: tripData});
    }

    render() {
        const getTripDate = (trip) => {
            if (trip["End Date"]) {
                return (`${trip["Start Date"].toLocaleDateString()} - ${trip["End Date"].toLocaleDateString()}`)
            } else if (trip["Start Date"]) {
                return (trip["Start Date"].toLocaleDateString());
            } else {
                return null;
            }
        }

        if (this.state.trips) {
            return (
                <div id='trips-container'>
                    <NavigationBar />
                    <h1>Trip Logs</h1>
                    <Map />
                    <div id='trips-list'>
                        {this.state.trips.map((trip) => {
                            return (
                                <a href={`#/trip/${trip.Name.toLowerCase().replaceAll(":", "").replaceAll(" ", "-")}`} key={trip.Name}>
                                    <div className='trip-container'>
                                        <div className='trip-name'>{trip.Name}</div>
                                        <div className='trip-date'>{getTripDate(trip)}</div>
                                        <div className='trip-location'>{trip.Location}</div>
                                    </div>
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