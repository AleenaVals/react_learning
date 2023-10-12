// import React, { useState } from 'react';

// const BookingForm = ({ onBook }) => {
//   const [name, setName] = useState('');
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [destination, setDestination] = useState('');
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && pickupLocation && destination) {
//       const bookingData = { name, pickupLocation, destination };
//       onBook(bookingData);
//       setName('');
//       setPickupLocation('');
//       setDestination('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Book a Ride</h2>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Pickup Location:
//         <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
//       </label>
//       <label>
//         Destination:
//         <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
//       </label>
//       <button type="submit">Book</button>
//     </form>
//   );
// };

// export default BookingForm;




import React, { useState } from 'react';

const BookingForm = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Compare current location with driver's current location
    // If there is a match, proceed with the booking
    // Otherwise, show an error message
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

