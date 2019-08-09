import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Interactive Educational Tool for Fitness Trackers</h1>
        <h2>Know about your Fitness Tracker's Privacy Policies?? Think Again!</h2>
        <p><br />
        design by <a href="https://html5up.net">HTML5 UP</a>.</p>
    </header>
)

export default Header
