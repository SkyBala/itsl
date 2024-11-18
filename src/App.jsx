import Sidebar from "./components/sidebar/SiderBar";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";

import { ThemeProvider, useTheme } from "./theme/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme === "dark" ? "dark" : ""}`}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
