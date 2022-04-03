import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashbord from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Reviws from './Components/Reviews/Reviws';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviws />}></Route>
        <Route path="/dashbord" element={<Dashbord />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
