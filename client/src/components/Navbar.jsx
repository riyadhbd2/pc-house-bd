import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div>
      {/* first part */}
        <div className="bg-black flex justify-between items-center px-20 py-4">
            {/* home logo */}
            <div className="">
              <img width="300px" src={assets.home} alt="" />
            </div>
            {/* search bar */}
            <div>
              <input type="search" name="" id="" />
            </div>
            {/* contents section */}
            <div>
              <div>
                <img src="" alt="" />
                <p>Ramadan Fest</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Account</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Wishlist</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Compare</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>PC Builder</p>
              </div>
            </div>

        </div>
        {/* second part */}
        <div>

        </div>

    </div>
  )
}

export default Navbar