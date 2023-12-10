import React from 'react';
import './App.css';
// import Firstform from './components/Firstform';
// import Secondform from './components/Secondform';
// import Thirdform from './components/Thirdform';
import CusStepper from './CusStepper'
// import Reviewform from './components/Reviewform';

function App() {
  return (
    <div className="App">

      <h1 className='top-heading'>Multi Step Form</h1>
{/* <Reviewform/> */}

      <CusStepper/>
      {/* <Firstform></Firstform>
      <Secondform></Secondform>
      <Thirdform></Thirdform> */}
    </div>
  );
}

export default App;
