import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Styles
import './App.scss';

// Pages
import HomePage from './pages/homepage/homepage.component';
import LogIn from './pages/log-in/log-in.component';
import Register from './pages/register/register.component';
import UserProfile from './pages/user-profile/user-profile.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const App = () => (
  <div className='app'>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/user/andre' component={UserProfile} />
    </Switch>
    <Footer/>
  </div>
);

export default App;