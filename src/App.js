import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;