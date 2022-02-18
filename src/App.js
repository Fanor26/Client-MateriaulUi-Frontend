import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ThemeConfig";


import Contenedor from "./components/Contenedor";

function App() {
  return (
    <ThemeProvider theme={theme}>
      
    <Router>
      <Route path="/" exact component={Contenedor} />
    </Router>
    </ThemeProvider>
  );
}

export default App;
