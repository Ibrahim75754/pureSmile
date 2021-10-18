
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Home from './component/Home/Home';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/home/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
