import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Project/Login';
import Home from './Project/Home';
import './App.css';
function App()
{
  return(
      <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      </Routes>
        
      </BrowserRouter>
      </div>
  );
}

export default App;