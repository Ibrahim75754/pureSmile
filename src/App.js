
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Registration from './component/Registratration/Registration';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/home/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
