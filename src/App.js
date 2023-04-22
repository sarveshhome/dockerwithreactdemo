import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/ContactUs/Contact';

function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={<Layout/>}>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='about' element={<About/>}/>
           <Route exact path='contact' element={<Contact/>}/>
         </Route>
      </Routes>
    </>
  );
}

export default App;
