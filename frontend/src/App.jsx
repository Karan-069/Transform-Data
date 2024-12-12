import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IndentToSO from "./pages/IndentToSO";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/v1/indent-to-so" element={<IndentToSO />} />
      </Routes>
    </Router>
  );
}

export default App;
