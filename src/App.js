import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Project/Login";
import Search from './Project/search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="LOG IN" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
 export default App;