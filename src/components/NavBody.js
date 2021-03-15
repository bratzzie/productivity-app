import React from 'react'
import AddTask from './AddTask'
import NavList from './NavList'
import Scheduled from './Scheduled'

const NavBody = () => {
    return (
        <div>
           <Scheduled />
           <NavList />
           <AddTask /> 
        </div>
    )
}

export default NavBody
