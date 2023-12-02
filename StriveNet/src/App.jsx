import Facts from './components/Facts.jsx';
import Feature from './components/Feature.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Teams from './components/Teams.jsx';
import Testmonial from './components/Testimonial.jsx';
import Service from './components/Service.jsx';
import Project from './components/Project.jsx';
import Newsletter from './components/Newletter.jsx';
import './App.css'
function App() {
  return (
    <div className="container-xxl bg-white p-0">
    <>
      <Navbar/>
      <Feature/>
      <About/>
      <Facts/>
      <Service/>
      <Newsletter/>
      <Project/>
      <Testmonial/>
      <Teams/>
      <Footer/>
     </>
    </div>
  )
}

export default App;
