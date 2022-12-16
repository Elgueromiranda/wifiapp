import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Placeslist from './places_list'
import Internetspeed from './new_internet_speed'


export default function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="*" element={<Placeslist />} />
          <Route path="/places_list" element={<Placeslist />} />
          <Route path="/new-internet-speed" element={<Internetspeed />} />
        </Routes>
    </Router>
   
    </div>
  );
}

