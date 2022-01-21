import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductList } from './Components/ProductList';
import { HomePage } from './Components/HomePage';
import { ProductDetails } from './Components/ProductDetails';
import { Registration } from './Components/Registration';
import { Login } from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>}>
        </Route>
        <Route exact path="/products" element={<ProductList></ProductList>}>
        </Route>
        <Route exact path="/products/:articleTitle" element={<ProductDetails></ProductDetails>}>
        </Route>
        <Route exact path="/register" element={<Registration></Registration>}>
        </Route>
        <Route exact path="/login" element={<Login></Login>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
