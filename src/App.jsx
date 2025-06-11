import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import "./index.css";
import Ads from "./components/Ads";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<Ads />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
