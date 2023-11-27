import React, { useState } from 'react';
import './App.css';
import ResponsiveAppBar from './SideBar/sideBar';
import ModalCmp from './sideModal';
import TravelCardsCmp from './travelCards';

function App() {

  const [open, setOpen] = React.useState(false);
  const [places1, setPlaces1] = useState([]);

  return (
    <div>
      <ModalCmp open={open} handleClose={() => setOpen(false)} places1={places1} />
      <ResponsiveAppBar setOpen={setOpen} />
      <TravelCardsCmp setPlaces1={setPlaces1} />
    </div>
  );
}

export default App;
