import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from '../src/components/molecules/Footer'
import Navigation from '../src/components/molecules/Navigation'
import About from '../src/views/About'
import Event from '../src/views/Event'
import EventList from '../src/views/EventList'
import Landingpage from '../src/views/Landingpage'
// import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/events" component={EventList} />
          <Route path="/events/event" component={Event} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Home
