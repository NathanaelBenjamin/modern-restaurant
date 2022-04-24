import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Products";
import Contact from "./pages/Contact";



const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Product />} />
      </Routes>
    </div>
  )
}


export default App