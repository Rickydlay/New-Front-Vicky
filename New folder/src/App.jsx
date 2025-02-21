import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <header className="text-center mb-4">
          <h1 className="text-primary">Election Project</h1>
        </header>

        {/* Navigation */}
        <nav className="nav justify-content-center mb-4">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/admin">Admin Dashboard</a>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <Router>
      <div className="container text-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
