import { useEffect } from "react";
import Home from "./pages/Home";
import "./index.css";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function AuthRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
}

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <AuthRedirect /> : <Login />} />
        <Route
          path="/register"
          element={user ? <AuthRedirect /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
