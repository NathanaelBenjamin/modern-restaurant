import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Products/Products";
import Contact from "./pages/Contact";
import Allergies from "./pages/Allergies";



const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Product />} />
        <Route path="allergies" element={<Allergies />} />
      </Routes>
    </div>
  )
}


export default App