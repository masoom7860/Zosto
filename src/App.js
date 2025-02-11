import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceNav from './pages/PriceNav';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <PriceNav />
      <Footer/>
    
    </div>
  );
}

export default App;
