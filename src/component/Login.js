import React from 'react'
import { GiHummingbird } from 'react-icons/gi'
import './home.css'

const Login = () => {
  return (
    <div className='h-main'>
            <div className='h-box'>
                <h1>Who Using</h1>
                <h1>Switter <GiHummingbird className='icon' /></h1>
                <div className='img-box'>
                    <img src='https://blog.vantagecircle.com/content/images/2022/05/Memorial-Day-themed-Dress.png' alt='image' />
                </div>
                <div className='user-box'>
                    <div className='user'>Shafiq</div>
                    <div className='user'>Kamran</div>
                    <div className='user'>Kashif</div>
                </div>
            </div>
        </div>
  )
}

export default Login
