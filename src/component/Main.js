import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaUserAlt, FaCog, FaHome, FaSignInAlt } from 'react-icons/fa'
import './main.css';
import Foryou from "./Foryou";
import About from './About';
import Setting from './Setting';

// import About from "./About";
// import Setting from "./Setting";



class Main extends React.Component {

    user = localStorage.getItem("userName")
    userProfile = localStorage.getItem("userProfile")

    state = {
        container: 'Home',
    }
    ChangePatch = (e) => {
        this.setState({ container: e.target.innerText })
    }
    render() {
        return (
            <div className="main-dash">
                <div className="side-nav">
                    <div className="profile-image">
                        <img width='100px' height='100px' className="image" alt="profile image" src={this.userProfile} />
                    </div>
                    <h2 className="user-name">{this.user}</h2>
                    <div className="nav-links">
                        <Link className="link" to='/main' onClick={this.ChangePatch} ><FaHome className="nav-icon" />Home</Link>
                        <Link className="link" to='/main' onClick={this.ChangePatch} ><FaUserAlt className="nav-icon" />About</Link>
                        <Link className="link" to='/main' onClick={this.ChangePatch} ><FaCog className="nav-icon" />Setting</Link>
                        <Link className="link" to='/login'  ><FaSignInAlt className="nav-icon" />Log Out</Link>
                    </div>
                </div>
                <div className="main-container">
                    {this.state.container === 'Home' ? <Foryou /> : null}
                    {this.state.container === 'About' ? <About /> : null}
                    {this.state.container === 'Setting' ? <Setting /> : null}
                </div>
                <div className="trend-main">
                    <div className="tag-main">
                        <h2>Trends for you</h2>
                        <div className="tag">
                            <p>Only on Twitter · Trending</p>
                            <h3>#TereBin</h3>
                            <p>6,141 Tweets</p>
                        </div>
                        <div className="tag">
                            <p>Politics · Trending</p>
                            <h3>LGBTQ</h3>
                            <p>64.5K Tweets</p>
                        </div>
                        <div className="tag">
                            <p>Technology · Trending</p>
                            <h3>#GalaxyS23</h3>
                            <p>18.7K Tweets</p>
                        </div>
                        <div className="tag">
                            <p>Trending in Pakistan</p>
                            <h3>The Boys</h3>
                            <p>147K Tweets</p>
                        </div>
                        <div className="tag">
                            <p>Trending in Pakistan</p>
                            <h3>#ImranKhanWasRight</h3>
                            <p>29.6K Tweets</p>
                        </div>
                        <div className="tag">
                            <p>Trending in Pakistan</p>
                            <h3>#middleclass</h3>
                            <p>6,653 Tweets</p>
                        </div>
                        <div className="tag">
                            <p>Only on Twitter · Trending</p>
                            <h3>#TereBin</h3>
                            <p>6,141 Tweets</p>
                        </div>
                        <div className="tag">
                            <p>Politics · Trending</p>
                            <h3>LGBTQ</h3>
                            <p>64.5K Tweets</p>
                        </div>
                        <div className="tag">
                            <p>Trending in Pakistan</p>
                            <h3>The Boys</h3>
                            <p>147K Tweets</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main
