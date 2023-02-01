import React from 'react'
import { GiHummingbird } from 'react-icons/gi'
import './forYou.css'

const Foryou = () => {

  const username = localStorage.getItem("userName");
  const userProfile = localStorage.getItem("userProfile");

  return (
    <div className='for-main'>
      <div className='for-nav'>
        <div className='for-logo'><GiHummingbird className='for-icon' /><h2>Switter</h2></div>
        <div className='for-prof'><img src={userProfile} /><p>{username}</p></div>
      </div>
      <div className='content'>
        <h2>Home</h2>
      </div>
    </div>
  )
}

export default Foryou
