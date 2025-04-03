
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
        <Router>
            <div className="container-fluid px-4">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
