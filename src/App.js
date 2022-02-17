import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contactus from "./Components/Contactus";
import Students from "./Components/Students";
import PageNotFound from "./Components/PageNotFound";
import Header from "./Components/Header";
import "./Components/Background.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/students" element={<Students />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
