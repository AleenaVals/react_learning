
import React, { useState } from 'react';

const BookingForm = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentLocation === 'Driver Location') {
      setBookingStatus('Booking Successful');
    } else {
      setBookingStatus('No drivers available in the current location');
    }
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Current Location:
          <input
            type="text"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Book Ride</button>
      </form>
      <p>{bookingStatus}</p>
    </div>
  );
};

export default BookingForm;

