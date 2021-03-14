import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink} from 'react-router-dom'
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import Settings from './screens/Settings';
import {RiHome2Line, RiSettings5Line, RiTodoLine} from 'react-icons/ri'
import {auth} from './components/firebase'
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } 
      else{
        dispatch(logout());
      }
    })
  }, []);


  return (
   <div>
      {!user ? (<Login />) : (<Home />)}
   </div>
 

     
   
  
  );


}

export default App;
 {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
     
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
      
     
     
     
     
     
     
     
     
     
     
     
     
       </div>
  </Router>
     */}