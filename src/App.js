import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Project/Login';
import Search from './Project/search';
import './App.css';
function App()
{
  return(
      <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/" element={<Search/>}></Route>
      </Routes>
        
      </BrowserRouter>
      </div>
  );
}

export default App;
