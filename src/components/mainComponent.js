import React, { Component } from 'react';
import { Switch,Route,Redirect, BrowserRouter} from 'react-router-dom';
import Hungarianmin from './pages/hungarianmin';
import Hungarianmax from './pages/hungarianmax';
import HomeComponent from './pages/homeComponent';
import Navigation from './navbar';
import Home from './pages/home';
 function MainComponent(){

   
        return (
          <BrowserRouter>
          <Navigation />
            <Switch>
              <Route path='/' exact component={() => <Home />} />
              <Route path='/homeComponent' component={() => <HomeComponent />} />
                         <Route path='/hungarianmin'  component={() => <Hungarianmin/>} />
                         <Route path='/hungarianmax' component={() => <Hungarianmax/>} />
                         
        
                         <Redirect to='/homeComponent' />
            </Switch>
            </BrowserRouter>
          
        );
    
}

export default MainComponent;