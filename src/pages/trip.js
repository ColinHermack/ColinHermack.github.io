import React, { useState } from 'react';
import '../styles/trip.css';
import { NavigationBar, FooterBar } from '../widgets.js';
import { FaAngleRight, FaAngleLeft} from 'react-icons/fa';

class Trip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currPhotoIndex: 0
        };
    }

    componentDidMount() {
        let tripData = require('../data/trips.json');
        let keywords = window.location.pathname.split("/").slice(-1)[0].toLowerCase().split("-");
        for (let i = 0; i < tripData.length; i++) {
            let matched = true;
            for (let j = 0; j < keywords.length; j++) {
                if (!tripData[i].Name.toLowerCase().includes(keywords[j])) {
                    matched = false;
                }
            }
            if (matched) {
                this.setState({trip: tripData[i]});
                break;
            }
        }
    }

    render() {
        const PhotoViewer = () => {
            return (
                <div id='photo-viewer-container'>
                    <div id='photo-container'>
                        <img src={this.state.trip.Photos[this.state.currPhotoIndex]} alt={this.state.trip.Descriptions[this.state.currPhotoIndex]} id='trip-photo'/>
                    </div>
                    <div id='photo-toolbar'>
                        <button id='prev-photo' onClick={() => {
                            if (this.state.currPhotoIndex === 0) {
                                this.setState((oldState) => ({currPhotoIndex: oldState.trip.Photos.length - 1}))
                            } else {
                                this.setState((oldState) => ({currPhotoIndex: oldState.currPhotoIndex - 1}))
                            }
                        }}><FaAngleLeft /></button>
                        <div id='photo-description'>{this.state.trip.Descriptions[this.state.currPhotoIndex]}</div>
                        <button id='next-photo' onClick={() => {
                            if (this.state.currPhotoIndex === (this.state.trip.Photos.length - 1)) {
                                this.setState((oldState) => ({currPhotoIndex: 0}))
                            } else {
                                this.setState((oldState) => ({currPhotoIndex: oldState.currPhotoIndex + 1}))
                            }
                        }}><FaAngleRight /></button>
                    </div>
                </div>
            )
        }

        console.log(this.state.trip);
        if (this.state.trip) {
            return(
                <div id='trip-container'>
                    <NavigationBar />
                    <PhotoViewer />
                    <FooterBar />
                </div>
            )
        } else {
            return (
                <div id='trip-container'>
                    <NavigationBar />
                    <FooterBar />
                </div>
            )
        }
        
    }
}

export default Trip;