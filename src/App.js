import { BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Navbar from "./components/navbar";
import Contact from "./pages/contact"
import Destination from "./pages/Destinations";
import Buttons from "./pages/buttons";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
  
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/dest" element={<Buttons/>} />
    <Route path="/dest/:country" element={<Destination />} />
    <Route path="*" element={<h2>Not found</h2>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
