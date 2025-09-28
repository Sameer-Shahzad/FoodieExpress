import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="exploreMenu mx-32 mt-14">
      <h1 className="font-bold text-4xl pb-4 ">Explore our menu</h1>
      <p className="text-justify">Choose from a diverse menu of world-class dishes prepared by our master chefs.
        Every ingredient is locally sourced and guaranteed to be fresh, delicious, and high-quality.
        Whether you're craving a light starter or a hearty main course, we have the perfect meal for you.
        Take your time to browse, and let us bring an unforgettable culinary experience to your table.
      </p>
      <div className="menuList flex mt-12 gap-10">
        {menu_list.map((item, index) => {
          return (
            <div key={index} onClick={prev => prev===item.menu_name ? setCategory("All") : setCategory(item.menu_name)} className="menuItem flex flex-col items-center gap-4 italic cursor-pointer mb-10">
              <img className={category===item.menu_name ? "selected" : ""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu