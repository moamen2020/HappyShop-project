import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory'
import Slider from '../../Components/Home/Slider'
import NavBarLogin from '../../Components/Utility/NavBarLogin'

const HomePage = () => {
  return (
    <div className='font' style={{minHeight: '670px'}}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
    </div>
  )
}

export default HomePage