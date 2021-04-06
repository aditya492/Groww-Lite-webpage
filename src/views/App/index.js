import React from 'react';
import Navbar from '../Navbar';
import '../App/App.css';
import HeroSection from '../HeroSection'
import productApp from '../Products/productApp'
import About from '../../pages/About'
import signUp from '../../pages/signUp'
import News from '../../pages/News'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Errror from '../Errror'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
         <Route path="/" exact component={HeroSection}/>
         <Route path="/services"  component={HeroSection}/>
         <Route path="/products"  component={productApp}/>
         <Route path="/sign-up"  component={signUp}/>
         <Route path="/explore"  component={HeroSection}/>
         <Route path="/us"      component={HeroSection}/>
         <Route path="/stocks"  component={HeroSection}/>
         <Route path="/gold"  component={HeroSection}/>
         <Route path="/About"  component={About}/>
         <Route path="/dailyNews"  component={News}/>
         <Route  component={Errror}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;