import React from 'react'
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink} from 'react-router-dom'
import Home from '../screens/Home'
import Settings from '../screens/Settings'
import Tasks from '../screens/Tasks'
import {RiHome2Line, RiSettings5Line, RiTodoLine} from 'react-icons/ri'
import NavBarHeader from './NavBarHeader'
import Scheduled from './Scheduled'
import NavBody from './NavBody'
const Nav = () => {
    return (
        // A <Switch> looks through all its children <Route>
        // elements and renders the first one whose path
        // matches the current URL. Use a <Switch> any time
        // you have multiple routes, but you want only one
        // of them to render at a time
     
      <Router>
    <div className="navbar">
      <ul className="navbar_list">
      <li>
          <NavLink exact activeClassName="active-link" to="/"><RiHome2Line size={24} style={{ fill: '#6a097d' }}/><h3>Home</h3></NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active-link" to="/tasks"><RiTodoLine size={24} style={{ fill: '#6a097d' }}/><h3>Tasks</h3></NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active-link" to="/settings"><RiSettings5Line size={24} style={{ fill: '#6a097d' }}/><h3>Settings</h3></NavLink>
        </li>
        
      </ul>
      <NavBarHeader />
    <NavBody />
      </div>
 <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    
      
  </Router>
    )
}

export default Nav
