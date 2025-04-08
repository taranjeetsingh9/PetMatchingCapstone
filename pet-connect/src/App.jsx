import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import TopBar from './components/topBar';
import Footer from './components/footer';
import PetCards from './components/petCards';


function App() {
  return (
    <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetCards />} />
        </Routes>
        <Footer />
      
    </Router>
  );
}


export default App;
