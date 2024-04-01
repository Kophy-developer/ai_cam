import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/Routes/Nav";
import Home from "./components/Dashbaord/Home";
import Customers from "./components/Customers/Customers";
import Sales from "./components/Sales/Sales";
import Packages from "./components/booking & packages/Packages";
import Campaigns from "./components/Campaigns/Campaigns";
import Profile from "./components/Profile";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import CreateEmail from "./components/Email/CreateEmail";
import CampaignEmail from "./components/Email/CampaignEmail";
import ComposeEmail from "./components/Email/ComposeEmail";

function App() {
  return (
    // <div>
    //   <CustomerScreen />
    // </div>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
    </Router>
  );
}

const ProtectedRoutes = () => {
  return (
    <div className="flex h-full">
      <Nav />
      <div className="flex-1 ">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-email" element={<CreateEmail />} />
          <Route path="/email-campaign" element={<CampaignEmail />} />
          <Route path="/email-compose" element={<ComposeEmail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// function App() {
//   // Define state variables to hold data
//   const [dat, setDat] = useState("");

//   useEffect(() => {
//     // Fetch data from Flask backend when component mounts
//     axios.get('http://127.0.0.1:5000/get-data')
//       .then(response => {
//         // Update state with fetched data
//         setDat(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const sendData = () => {
//     // Example function to send data to Flask backend
//     axios.post('http://127.0.0.1:5000/save-data')
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error saving data:', error);
//       });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* Render fetched data */}
//         <p>{dat}</p>
//         {/* Button to trigger sendData function */}
//         <button onClick={sendData}>Send Data</button>
//       </header>
//     </div>
//   );
// }

// export default App;
