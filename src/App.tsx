import { Routes, Route } from 'react-router-dom';
import './App.css';
import NoMatch from './components/NoMatch';
import AboutUs from './components/AboutUs';
import MainPage from './components/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
