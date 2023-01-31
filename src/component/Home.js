import React from 'react'
import { RiLoginBoxLine } from 'react-icons/ri'
import { GiHummingbird } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
    return (
        <div className='h-main'>
            <div className='h-box'>
                <h1>Wellcome To</h1>
                <h1>Switter <GiHummingbird className='icon' /></h1>
                <div className='img-box'>
                    <img src='https://blog.vantagecircle.com/content/images/2022/05/Offer-Special-Thanks-to-a-Veteran.png' alt='image' />
                </div>
                <div className='btn-box'>
                    <Link to='Login' className='btn' >Login &nbsp;<RiLoginBoxLine /></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
