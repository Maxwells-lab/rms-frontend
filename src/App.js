import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {CssBaseline,ThemeProvider} from '@mui/material';
// import {Box} from "@mui/material"
import CreateAccount from './components/Account/CreateAccount';
import LoginAccount from './components/Account/loginAccount';
import { ColorModeContext,useMode } from './theme';
import { useState } from 'react';
import Sidebar from './global/sidebar';
import Topbar from './global/topbar';
import Home from './scenes/Home';
import LineGraph from './scenes/line';
import Calendar from './scenes/calendar';
import Fees from './scenes/Fees&Fines';
import Map from './scenes/Map';




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            {/* <CreateAccount/> */}
            <LoginAccount/>
            {/* <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Map" element={<Map/>}/>
              <Route path="/Fees" element={<Fees/>}/>
              <Route path="/Calendar" element={<Calendar/>}/>
              <Route path="/LineGraph" element={<LineGraph/>}/> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
          
            {/* </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;