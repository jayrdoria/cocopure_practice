import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home"; // Import Home from the correct path

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Home />
      {/* Add routing or page components here */}
    </Router>
  );
};

export default App;
