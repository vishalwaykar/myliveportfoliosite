import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/js/dist/dropdown"
import { Redirect, Route, Switch } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'
import Navbar from './Navbar'
import './index.css';
import Footer from './Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/about" component={About}/>
      <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App
