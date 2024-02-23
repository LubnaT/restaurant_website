
import './App.css';
import Footer from './Components/Footer/Footer';
import Herosection from './Components/Header/Herosection';
import About from './Components/Sections/About';
import Booking from './Components/Sections/Booking';
import Download from './Components/Sections/Download';
import Menu from './Components/Sections/Menu';
import OurServices from './Components/Sections/OurServices';

function App() {
  return (
    <div className="App">
    <Herosection/>
    <About/>
    <Booking/>
    <OurServices/>
    <Menu/>
    <Download/>
    <Footer/>
    </div>
  );
}

export default App;
