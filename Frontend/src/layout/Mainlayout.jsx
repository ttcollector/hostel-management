import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../componnets/Header'

function Mainlayout() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Mainlayout