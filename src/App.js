import React from 'react';
import Navbar from './Navbar';
import './App.css';
// import Home from './components/pages/Home';
import HeroSection from './HeroSection'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
         <Route path="/" exact component={HeroSection}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;