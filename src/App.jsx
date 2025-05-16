import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllProperties from "./components/AllProperties";
import HomePage from "./pages/HomePage";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<AllProperties />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
