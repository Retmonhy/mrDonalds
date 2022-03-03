import React from 'react';
import { Switch, Route } from 'react-router';
import Profile from './Components/Profile/Profile';
import Menu from './Components/Menu/Menu';
const Routess = () => {
  return (
    <Switch>
      <Route path='/' element = { <Menu/> } />
      <Route path='/profile' element = { <Profile/> } />
    </Switch>

  )
}
export default Routess