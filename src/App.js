import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {HashRouter as Router} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navbar/>
          <AnimatedRoutes/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
