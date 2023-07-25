import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Aboutt from "./Components/Aboutt";
import Passoapasso from "./Components/Passoapasso";
import Depoimentos from "./Components/Depoimentos";
import Financas from "./Components/Financas";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu"
import Valores from "./Components/Valores";


function App() {
  return (
    <div className="tudo">
        <Menu />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="passoapasso"><Passoapasso /></div>
        <div id="financas"><Financas /></div>
        <div id="valores"><Valores /></div>
        <div id="depoimentos"><Depoimentos /></div>
        <div className="contact-div" id="contato">
          <Contact />
        </div>
        <Footer />
    </div>
  );
}

export default App;
