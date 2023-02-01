import React from 'react'
import { GiHummingbird } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './home.css'

const Login = () => {

    const image1 = 'https://i.timesnowhindi.com/stories/Gutka_Boy.jpg?tr=w-400,h-300,fo-auto';
    const image2 = 'https://tellygupshup.com/wp-content/uploads/2021/01/kfer4e2u72v51.jpg';
    const image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7J_mYFtSrxBWWYktUacOA8GIuGtvpYI_Z6w&usqp=CAU';
    const defaultImage = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';

    const local = (e) => {
        if(e.target.innerText === 'Shafiq'){
            localStorage.setItem("userName", e.target.innerText);
            localStorage.setItem("userProfile", image1);
        }else if (e.target.innerText === 'Kamran'){
            localStorage.setItem("userName", e.target.innerText);
            localStorage.setItem("userProfile", image2);
        }else if (e.target.innerText === 'Kashif'){
            localStorage.setItem("userName", e.target.innerText);
            localStorage.setItem("userProfile", image3);
        }else{
            localStorage.setItem("userName", '???');
            localStorage.setItem("userProfile", defaultImage);
        }
    }

  return (
    <div className='h-main'>
            <div className='h-box'>
                <h1>Who Using</h1>
                <h1>Switter <GiHummingbird className='icon' /></h1>
                <div className='img-box'>
                    <img src='https://blog.vantagecircle.com/content/images/2022/05/Memorial-Day-themed-Dress.png' alt='image' />
                </div>
                <div className='user-box'>
                    <Link to='/main' className='user' onClick={local} >Shafiq</Link>
                    <Link to='/main' className='user' onClick={local} >Kamran</Link>
                    <Link to='/main' className='user' onClick={local} >Kashif</Link>
                </div>
            </div>
        </div>
  )
}

export default Login
