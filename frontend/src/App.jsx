import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import IndentToSO from "./pages/IndentToSO";

function App() {
  return (
    <Router>
      {/* Global Toast Container */}
      <ToastContainer
        position="top-right" // Toasts appear at the top-right of the page
        autoClose={5000} // Toasts auto-close after 5 seconds
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/v1/indent-to-so" element={<IndentToSO />} />
      </Routes>
    </Router>
  );
}

export default App;
