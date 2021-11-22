import React, { Component } from 'react';
import { Switch,Route,Redirect, BrowserRouter} from 'react-router-dom';
import Hungarian from './pages/hungarian';
import Next from './pages/next';
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
                         <Route path='/hungarian'  component={() => <Hungarian/>} />
                         <Route path='/next' component={() => <Next/>} />
                         
        
                         <Redirect to='/homeComponent' />
            </Switch>
            </BrowserRouter>
          
        );
    
}

export default MainComponent;