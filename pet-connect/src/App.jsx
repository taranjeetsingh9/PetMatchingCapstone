import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import TopBar from './components/topBar';
import Footer from './components/footer';
import PetCards from './components/petCards';
import PetMatch from './components/petMatch';
import MatchedPet from './components/matchedPet';



function App() {
  return (
    <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetCards />} />
          <Route path="/pet-match" element={<PetMatch />} />
          <Route path="/matched-pet" element={<MatchedPet />} />
        </Routes>
        <Footer />
      
    </Router>
  );
}


export default App;
