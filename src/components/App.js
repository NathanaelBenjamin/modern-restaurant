import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Products";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navigation/nav';
import Footer from '../components/footer/footer';


const App = () => {
  return (

    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>

  )
}





export default App;

