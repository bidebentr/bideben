import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ToplulukKatkisi from "./pages/ToplulukKatkisi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topluluk-katkisi" element={<ToplulukKatkisi />} />
      </Routes>
    </Router>
  );
}

export default App;
