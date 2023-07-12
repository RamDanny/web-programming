import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"
//import { Router, Link } from "react-router-dom";

function Nav() {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    const handleCommClick = () => {
        navigate('/comm');
    }

    const handleCallClick = () => {
        navigate('/call');
    }

    const handleImpClick = () => {
        navigate('/imp');
    }

    const handleWorkClick = () => {
        navigate('/work');
    }

    const handleRegClick = () => {
        navigate('/reg');
    }

    const handleContactClick = () => {
        navigate('/contact');
    }

    const handleFeedbackClick = () => {
        navigate('/feedback');
    }

    return (
        <nav className="nav">
            <ul>
                <li><a href='localhost:3000/' onClick={handleHomeClick}>Home</a></li>
                <li><a href='localhost:3000/comm' onClick={handleCommClick}>Committee</a></li>
                <li><a href='localhost:3000/call' onClick={handleCallClick}>Call for Papers</a></li>
                <li><a href='localhost:3000/imp' onClick={handleImpClick}>Important Dates</a></li>
                <li><a href='localhost:3000/work' onClick={handleWorkClick}>Workshops</a></li>
                <li><a href='localhost:3000/reg' onClick={handleRegClick}>Registration</a></li>
                <li><a href='localhost:3000/contact' onClick={handleContactClick}>Contact</a></li>
                <li><a href='localhost:3000/feedback' onClick={handleFeedbackClick}>Feedback</a></li>
            </ul>
        </nav>
    );
}

export default Nav;