import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RiderRegistrationForm from './pages/RiderRegistration';
import DriverRegistrationForm from './pages/DriverRegistration';
import BookingForm from './pages/BookingForm';

const Home = () => (
  <div>
    <h2>Welcome to the Ride Booking App!</h2>
    <Link to="/register-rider">Register as a Rider</Link>
    <br />
    <Link to="/register-driver">Register as a Driver</Link>
    <br />
    <Link to="/book-ride">Book a Ride</Link>
    <br />
  </div>
);

const App = () => {
  const [riders, setRiders] = useState([]);
  const [drivers, setDrivers] = useState([]);


  const handleRiderRegister = (riderData) => {
    setRiders([...riders, riderData]);
  };

  const handleDriverRegister = (driverData) => {
    setDrivers([...drivers, driverData]);
  };



  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register-rider">
          <div>
            <RiderRegistrationForm onRegister={handleRiderRegister} />
            <h2>Registered Riders:</h2>
            <ul>
              {riders.map((rider, index) => (
                <li key={index}>
                  Name: {rider.name}, <br />
                  Email: {rider.email}, <br />
                  Phone: {rider.phone}
                </li>
              ))}
            </ul>
          </div>
        </Route>
        <Route path="/register-driver">
          <div>
            <DriverRegistrationForm onRegister={handleDriverRegister} />
            <h2>Registered Drivers:</h2>
            <ul>
              {drivers.map((driver, index) => (
                <li key={index}>
                  Name: {driver.name}, <br />
                  Email: {driver.email}, <br />
                  Phone: {driver.phone}
                </li>
              ))}
            </ul>
          </div>
        </Route>
        <Route path="/book-ride" component={BookingForm} />
      </Switch>
    </Router>
  );
};

export default App;
