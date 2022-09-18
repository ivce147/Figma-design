import './App.css';
import Layout from "./Layout/Layout"
import HomePage from "./Containers/HomePage/HomePage"
import ContactPage from './Containers/ContactPage/ContactPage';
import CheckoutPage from './Containers/Checkout/CheckoutPage';
import {ProductPage} from "./Containers/ProductPage/ProductPage"
import {ProductList} from "./Containers/ProductList/ProductList"
import {Routes,Route} from "react-router-dom";
import FavoritePage from './Containers/Checkout/Favorites';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route element= {<HomePage/> }/>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/favorites" element={<FavoritePage/>} />
        </Route>
        <Route path="/login" element={<ContactPage />} />
      <Route
        path="*"
        element={
          <>
            <div>ERROR 404</div>
          </>
        }
      />
      </Routes>
    </div>
  );
}

export default App;
