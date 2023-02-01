import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaUserAlt, FaCog, FaHome, FaSignInAlt } from 'react-icons/fa'
import { GiHummingbird } from 'react-icons/gi'
import './main.css';
import Foryou from "./Foryou";
import About from './About';
import Setting from './Setting';

// import About from "./About";
// import Setting from "./Setting";



class Main extends React.Component{

    user = localStorage.getItem("userName")
    userProfile = localStorage.getItem("userProfile")

    state ={
        container:'Home',
    }
    ChangePatch = (e)=>{
        this.setState({container:e.target.innerText})
    }
    render(){
        return(
            <div className="main-dash">
            <div className="side-nav">
                <div className="profile-image">
                    <img width='100px' height='100px' className="image" src={this.userProfile} />
                </div>
                <h2 className="user-name">{this.user}</h2>
                <div className="nav-links">
                    <Link className="link" to='/main' onClick={this.ChangePatch} ><FaHome className="nav-icon" />Home</Link>
                    <Link className="link" to='/main' onClick={this.ChangePatch} ><FaUserAlt className="nav-icon" />About</Link>
                    <Link className="link" to='/main'onClick={this.ChangePatch} ><FaCog className="nav-icon" />Setting</Link>
                    <Link className="link" to='/login'  ><FaSignInAlt className="nav-icon" />Log Out</Link>
                </div>
            </div>
            <div className="main-container">
            {this.state.container === 'Home'? <Foryou/>: null}
            {this.state.container === 'About'? <About/>: null}
            {this.state.container === 'Setting'? <Setting/>: null}
            </div>
        </div>
        )
    }
}

export default Main
