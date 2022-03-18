import Banner from './banner/Banner';
import CardsBody from './cards_body/CardsBody';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import './style.sass';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <CardsBody />
      <Footer />
    </div>
  );
}

export default App;
