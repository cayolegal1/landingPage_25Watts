import './App.scss';
import Header from './componentes/Header/Header';
import Hero from './componentes/Hero/Hero';
import About from './componentes/About/About';
import Products from './componentes/Products/Products';
import Services from './componentes/Services/Services';
import Contact from './containers/Contact/Contact';
import Footer from './componentes/Footer/Footer';


const App =() => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
