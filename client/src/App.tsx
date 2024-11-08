import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { useEffect } from "react";
import Home from "./pages/Home";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/register");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
