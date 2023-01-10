import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scences/global/Topbar";
import Sidebar from "./scences/global/Sidebar";
import Dashboard from "./scences/dashboard";
import Invoices from "./scences/invoices";
import Spending from "./scences/spending"
import Bar from "./scences/bar";
import Line from "./scences/line";
import Pie from "./scences/pie";
import Challenge from "./scences/challenge"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/spending" element={<Spending/>} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/challenge" element={<Challenge />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
