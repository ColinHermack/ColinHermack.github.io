import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Resume from './pages/resume.js';
import Projects from './pages/projects.js';
import Project from './pages/project.js';
import Education from './pages/education.js';
import Endeavors from './pages/endeavors.js';
import Trips from './pages/trips.js';
import Trip from './pages/trip.js';
import Blog from './pages/blog.js';
import PageNotFound from './pages/unknown.js';


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="project/:name" element={<Project />} />
                <Route path="resume" element={<Resume />} />
                <Route path="projects" element={<Projects />} />
                <Route path="education" element={<Education />} />
                <Route path="endeavors" element={<Endeavors />} />
                <Route path="trips" element={<Trips />} />
                <Route path="trip/:name" element={<Trip />} />
                <Route path="blog" element={<Blog />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </HashRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
