import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';

import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <NavBar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/Projects" element={<Projects/>} />
          <Route  path="/Company" element={<Company/>} />
          <Route  path="/Contact" element={<Contact/>} />
          <Route  path="/NewProject" element={<NewProject/>} />
          <Route  path="/project/:id" element={<Project/>} />
        </Routes>  
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
