import './App.css';
import Header from "./Components/Header"
import Home from './Components/Home'
import Footer from "./Components/Footer"
import { BrowserRouter ,Route,Routes} from 'react-router-dom'; 
import Contact from './Components/Contact';
import About from './Components/About';


function App() {
  return (
    <BrowserRouter>
    <Header ></Header>
    <Routes>
    <Route path="/" element={  <Home> </Home>}></Route>
    <Route path="/about" element={ <About></About>}></Route>
    <Route path="/contact" element={ <Contact></Contact>}></Route>
    </Routes>
    <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;
