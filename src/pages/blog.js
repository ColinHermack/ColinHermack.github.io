import React from 'react';
import '../styles/blog.css';
import { NavigationBar, FooterBar } from '../widgets.js';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.state.articles) {
            return (
                <div id='blog-container'>
                    <NavigationBar />
                    <FooterBar />
                </div>
            )
        } else {
            return (
                <div id='blog-container'>
                    <NavigationBar />
                    <FooterBar />
                </div>
            )
        }
    }
}

export default Blog;