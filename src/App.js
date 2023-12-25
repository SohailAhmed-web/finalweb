
import './App.css';
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import PartnersScrollView from "./components/PartnersScrollView";
import MasterPieceSection from "./components/MasterPieceSection";
import Web3Dapps from "./components/Web3Dapps";
import Future from './components/Future';
import TestimonialsComponent from './components/Testimonials';
import FAQComponent from './components/FAQ';
import CardBlog from './components/CardBlog';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Herosection/>
        <PartnersScrollView/>
      <MasterPieceSection/>
        <Web3Dapps/>
        <Future/>
        <TestimonialsComponent/>
        <FAQComponent/>
        <CardBlog/>
    </div>
  );
}

export default App;
