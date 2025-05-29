
import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const menu = [
    {page: "Add Students", path:"/addstudents", key:1},
    {page: "View Students", path:"/" , key:2},
  ]

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-4">
            {menu.map((item, index) => (

              <NavLink to={item.path} key={item.key} style={
                  ({isActive})=>({
                    color: isActive?"red":"white",
                    textDecoration: isActive?"underline":"none",
                  })
                } >
                <div
                  
                  className="px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer"
                >
                  {item.page}  
                </div>
                  
              </NavLink>
              
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
