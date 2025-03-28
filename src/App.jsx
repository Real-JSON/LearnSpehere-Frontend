import React from 'react';
import Home from './pages/Home';
import './styles/App.css';
import About from './pages/About';
import Benefit from './pages/Benefit';
import Course from './pages/Course';
import Tutor from './pages/Tutor';
import Footer from './pages/Footer';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Benefit />
            <Course />
            <Tutor />
            <Footer />
        </>
    );
};

export default App;
