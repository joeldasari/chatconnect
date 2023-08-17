import "./style.scss";
import Register from "./pages/register";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
      <Register /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
