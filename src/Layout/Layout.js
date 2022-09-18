import React from 'react'
import MainHeader from '../Components/MainHeader/MainHeader'
import HeaderTop from "../Components/HeaderTop/HeaderTop"
import HeaderBottom from "../Components/HeaderBottom/HeaderBottom"
import { Outlet } from "react-router-dom";
import "./Layout.css"

function Layout() {
  return (
    <div className='layout'>
      <MainHeader>
        <HeaderTop/>
        <br/>
        <HeaderBottom />
      </MainHeader>
      <div className='page-container'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout