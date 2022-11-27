import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Services from './components/Services';
import Works from './components/Works';
import About from './components/About';
import Counter from './components/Counter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Header />
      <Services />
      <Works />
      <About />
      <Counter />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
