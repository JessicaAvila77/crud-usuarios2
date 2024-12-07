//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usuario from './components/Usuario';



function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Usuario />} />    
    </Routes> 
  </BrowserRouter>


  );


}

export default App;
