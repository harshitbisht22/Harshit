import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Qualification from './components/qualification/Qualification'

import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Experience/>
        <Qualification/>
         <Footer />
      </main>
    </div>
  );
}

export default App;
