import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// Components
import DashboardLayout from "./scenes/global/layouts/DashboardLayout";
// Pages
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Entrepots from "./scenes/entrepots";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Signin from "./scenes/signin";
import Signup from "./scenes/signup";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />

            {/* Dashboard Routes */}
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/entrepots" element={<Entrepots />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;