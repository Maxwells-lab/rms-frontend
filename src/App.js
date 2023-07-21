import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import {Box} from "@mui/material"
// import CreateAccount from "./components/Account/CreateAccount";
// import LoginAccount from "./components/Account/loginAccount";

import { GlobalContext, useContextMode } from "./theme";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Sidebar from "./global/sidebar";
import Topbar from "./global/topbar";
import Home from "./scenes/Home";
import LineGraph from "./scenes/line";
import Calendar from "./scenes/calendar";
// import Fees from "./scenes/Fees&Fines";
import Fees from "./scenes/Fees&Fines";
import OpenMap from "./components/OpenMap";
import ProfilePage from "./components/ProfilePage";
import Settings from "./components/Settings";
import Privacy from "./components/Privacy";
import FAQ from "./scenes/faq/index";
// import { PieChart } from "./components/PieChart";
import Pie from "./scenes/Pie";
// import { Navigate } from "react-router-dom";
// import FinancialPerformace from "./scenes/Home/FinancialPerformace";

function App() {
  const [theme, colorMode] = useContextMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <GlobalContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            {/* <CreateAccount/> */}
            {/* <LoginAccount/> */}
            <Topbar setIsSidebar={setIsSidebar} />
            <Divider variant="middle" light="true" />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/Map" element={<OpenLayers />} /> */}
              <Route path="/Fees" element={<Fees />} />
              <Route path="/Calendar" element={<Calendar />} />
              <Route path="/PieChart" element={<Pie />} />
              <Route path="/LineGraph" element={<LineGraph />} />
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Privacy" element={<Privacy />} />
              {/* <Route path="/faq" element={<FAQ />} /> */}
              <Route path="/FAQ" element={<FAQ />} />

              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
