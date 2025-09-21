import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header absolute">
        <div className="secDiv flex flex-col justify-center gap-10 text-justify">
            <h2 className="font-bold text-6xl text-white heading">Order your favourite food here</h2>
            <p className="text-white">From classic comfort food to exciting new flavors, our kitchen has something for everyone. We believe great food should be a simple pleasure. Place your order, and let us handle the rest. Your perfect meal is just a few clicks away.</p>
            <button className="bg-white text-black w-24 rounded-3xl p-3 text-sm">View Menu</button>
        </div>
    </div>
  )
}

export default Header