import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainDash />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
          <RightSide />
        </div>
      </div>
    </Router>
  );
}

export default App;
