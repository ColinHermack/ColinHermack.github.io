import React from 'react';

class Resume extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const resumeData = require('../data/resume.json');
        this.setState({resume: resumeData});
    }

    render() {
        if (this.state.resume) {
            return (
                <div id='resume-container'>
                    <h1>Education</h1>
                    {this.state.resume.Education.map((item) => {
                        
                    })}
                </div>
            )
        } else {
            return(<div id='resume-container'></div>)
        }
    }
}

export default Resume;