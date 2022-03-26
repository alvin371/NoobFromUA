import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// FrontEnd ID
import Landing from './pages/Frontend/ID/indexContent'
import Product from './pages/Frontend/ID/productContent'
import About from './pages/Frontend/ID/aboutProduct'

// // FrontEnd EN
// import LandingEN from './pages/Frontend/English/indexContent'
// import ProductEN from './pages/Frontend/English/productContent'
// import FaqEN from './pages/Frontend/English/faqProduct'
// import AboutEN from './pages/Frontend/English/aboutProduct'

import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "./pages/Backend/views/Dashboard.js";
import Login from "./pages/Backend/views/Login.js";
import ProductList from "./pages/Backend/views/Product.js";
import ProductHighlights from "./pages/Backend/views/ProductHighlights.js";
import AskedQuestion from "./pages/Backend/views/Faq.js";
import QuestionList from "./pages/Backend/views/QuestionList.js";
import HomePage from "./pages/Backend/views/HomePage.js";
import AccountManagement from "./pages/Backend/views/AccountManagement.js";
import axios from 'axios';


// axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config
})

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routing ID */}
        <Route path="/" exact element={<Landing />} />
        <Route path="/product" exact element={<Product />} />
        <Route path="/about" exact element={<About />} />
        {/* Routing EN */}
        {/* <Route path="/en" exact element={<LandingEN />} />
        <Route path="/en/product" exact element={<ProductEN />} />
        <Route path="/en/faq" exact element={<FaqEN />} />
        <Route path="/en/about" exact element={<AboutEN />} /> */}

        {/* Routing Dashboard */}
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/product-list" element={<ProductList />} />
        <Route exact path="/product-highlights" element={<ProductHighlights />} />
        <Route exact path="/home-page-information" element={<HomePage />} />
        <Route exact path="/question-list" element={<QuestionList />} />
        <Route exact path="/faq-be" element={<AskedQuestion />} />
        <Route exact path="/account" element={<AccountManagement />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
