import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Loginpage from './Loginpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/login"} element={<Loginpage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
