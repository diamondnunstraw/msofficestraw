import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home2 from './components/Home2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:email' element={<Home2/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
