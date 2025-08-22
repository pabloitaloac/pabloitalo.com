import { useEffect } from 'react';
// import Preloader from "../src/components/Pre";
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume/ResumeNew';
import Landing from './components/Landing';
import { ThemeProvider } from './components/themetype/index';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loading } from './components/Loading/Loading';

function App() {
  useEffect(() => {
    loading();
    const country = localStorage.getItem('country');
    if (!country) {
      localStorage.setItem('country', 'US');
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        {/* <Preloader load={load} /> */}
        {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
        <div className='App' id='scroll'>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
