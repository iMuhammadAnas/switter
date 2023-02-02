import React from 'react'
import { GiHummingbird } from 'react-icons/gi'
import { FaRegComment } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import { RxShare2 } from 'react-icons/rx'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
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
        <div className='post-main'>
          <div className='post'>
            <div className='post-head'>
              <img src={userProfile} width='40px' />
              <div className='post-owner-name'>
                <h3>{username}<GoVerified className='varified' /></h3>
                <p>@{username}</p>
              </div>
            </div>
            <div className='post-content'>
              <p className='post-text'>Hey there this is my first post in Switter.<br />
                Hope you guys Like it. Or mujhe nhi pata kya likhna h
                bss post bharne k liye ye text likh raha hun.😂
              </p>
              <p className='post-hashtag'>#SWITTER</p>
            </div>
            <div className='post-footer'>
              <div className='post-cmt'><FaRegComment />1k</div>
              <div className='post-rwt'><AiOutlineRetweet />32</div>
              <div className='post-lke'><AiOutlineHeart />5k</div>
              <div className='post-shr'><RxShare2 />50</div>
            </div>
          </div>
          <div className='post'>
            <div className='post-head'>
              <img src={userProfile} width='40px' />
              <div className='post-owner-name'>
                <h3>{username}<GoVerified className='varified' /></h3>
                <p>@{username}</p>
              </div>
            </div>
            <div className='post-content'>
              <p className='post-text'>Hey there this is my first post in Switter.<br />
                Hope you guys Like it. Or mujhe nhi pata kya likhna h
                bss post bharne k liye ye text likh raha hun.😂
              </p>
              <p className='post-hashtag'>#SWITTER</p>
            </div>
            <div className='post-footer'>
              <div className='post-cmt'><FaRegComment />1k</div>
              <div className='post-rwt'><AiOutlineRetweet />32</div>
              <div className='post-lke'><AiOutlineHeart />5k</div>
              <div className='post-shr'><RxShare2 />50</div>
            </div>
          </div>
          <div className='post'>
            <div className='post-head'>
              <img src={userProfile} width='40px' />
              <div className='post-owner-name'>
                <h3>{username}<GoVerified className='varified' /></h3>
                <p>@{username}</p>
              </div>
            </div>
            <div className='post-content'>
              <p className='post-text'>Hey there this is my first post in Switter.<br />
                Hope you guys Like it. Or mujhe nhi pata kya likhna h
                bss post bharne k liye ye text likh raha hun.😂
              </p>
              <p className='post-hashtag'>#SWITTER</p>
            </div>
            <div className='post-footer'>
              <div className='post-cmt'><FaRegComment />1k</div>
              <div className='post-rwt'><AiOutlineRetweet />32</div>
              <div className='post-lke'><AiOutlineHeart />5k</div>
              <div className='post-shr'><RxShare2 />50</div>
            </div>
          </div>
          <div className='post'>
            <div className='post-head'>
              <img src={userProfile} width='40px' />
              <div className='post-owner-name'>
                <h3>{username}<GoVerified className='varified' /></h3>
                <p>@{username}</p>
              </div>
            </div>
            <div className='post-content'>
              <p className='post-text'>Hey there this is my first post in Switter.<br />
                Hope you guys Like it. Or mujhe nhi pata kya likhna h
                bss post bharne k liye ye text likh raha hun.😂
              </p>
              <p className='post-hashtag'>#SWITTER</p>
            </div>
            <div className='post-footer'>
              <div className='post-cmt'><FaRegComment />1k</div>
              <div className='post-rwt'><AiOutlineRetweet />32</div>
              <div className='post-lke'><AiOutlineHeart />5k</div>
              <div className='post-shr'><RxShare2 />50</div>
            </div>
          </div>
          <div className='post'>
            <div className='post-head'>
              <img src={userProfile} width='40px' />
              <div className='post-owner-name'>
                <h3>{username}<GoVerified className='varified' /></h3>
                <p>@{username}</p>
              </div>
            </div>
            <div className='post-content'>
              <p className='post-text'>Hey there this is my first post in Switter.<br />
                Hope you guys Like it. Or mujhe nhi pata kya likhna h
                bss post bharne k liye ye text likh raha hun.😂
              </p>
              <p className='post-hashtag'>#SWITTER</p>
            </div>
            <div className='post-footer'>
              <div className='post-cmt'><FaRegComment />1k</div>
              <div className='post-rwt'><AiOutlineRetweet />32</div>
              <div className='post-lke'><AiOutlineHeart />5k</div>
              <div className='post-shr'><RxShare2 />50</div>
            </div>
          </div>
          <div className='post'>
            <div className='post-head'>
              <img src={userProfile} width='40px' />
              <div className='post-owner-name'>
                <h3>{username}<GoVerified className='varified' /></h3>
                <p>@{username}</p>
              </div>
            </div>
            <div className='post-content'>
              <p className='post-text'>Hey there this is my first post in Switter.<br />
                Hope you guys Like it. Or mujhe nhi pata kya likhna h
                bss post bharne k liye ye text likh raha hun.😂
              </p>
              <p className='post-hashtag'>#SWITTER</p>
            </div>
            <div className='post-footer'>
              <div className='post-cmt'><FaRegComment />1k</div>
              <div className='post-rwt'><AiOutlineRetweet />32</div>
              <div className='post-lke'><AiOutlineHeart />5k</div>
              <div className='post-shr'><RxShare2 />50</div>
            </div>
          </div>
          <div className='post'>
            <div className='post-head'>
              <img src={userProfile} width='40px' />
              <div className='post-owner-name'>
                <h3>{username}<GoVerified className='varified' /></h3>
                <p>@{username}</p>
              </div>
            </div>
            <div className='post-content'>
              <p className='post-text'>Hey there this is my first post in Switter.<br />
                Hope you guys Like it. Or mujhe nhi pata kya likhna h
                bss post bharne k liye ye text likh raha hun.😂
              </p>
              <p className='post-hashtag'>#SWITTER</p>
            </div>
            <div className='post-footer'>
              <div className='post-cmt'><FaRegComment />1k</div>
              <div className='post-rwt'><AiOutlineRetweet />32</div>
              <div className='post-lke'><AiOutlineHeart />5k</div>
              <div className='post-shr'><RxShare2 />50</div>
            </div>
          </div>
          <div className='post'>
            <div className='post-head'>
              <img src={userProfile} width='40px' />
              <div className='post-owner-name'>
                <h3>{username}<GoVerified className='varified' /></h3>
                <p>@{username}</p>
              </div>
            </div>
            <div className='post-content'>
              <p className='post-text'>Hey there this is my first post in Switter.<br />
                Hope you guys Like it. Or mujhe nhi pata kya likhna h
                bss post bharne k liye ye text likh raha hun.😂
              </p>
              <p className='post-hashtag'>#SWITTER</p>
            </div>
            <div className='post-footer'>
              <div className='post-cmt'><FaRegComment />1k</div>
              <div className='post-rwt'><AiOutlineRetweet />32</div>
              <div className='post-lke'><AiOutlineHeart />5k</div>
              <div className='post-shr'><RxShare2 />50</div>
            </div>
          </div>
          <div className='post'>
            <div className='post-head'>
              <img src={userProfile} width='40px' />
              <div className='post-owner-name'>
                <h3>{username}<GoVerified className='varified' /></h3>
                <p>@{username}</p>
              </div>
            </div>
            <div className='post-content'>
              <p className='post-text'>Hey there this is my first post in Switter.<br />
                Hope you guys Like it. Or mujhe nhi pata kya likhna h
                bss post bharne k liye ye text likh raha hun.😂
              </p>
              <p className='post-hashtag'>#SWITTER</p>
            </div>
            <div className='post-footer'>
              <div className='post-cmt'><FaRegComment />1k</div>
              <div className='post-rwt'><AiOutlineRetweet />32</div>
              <div className='post-lke'><AiOutlineHeart />5k</div>
              <div className='post-shr'><RxShare2 />50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foryou
