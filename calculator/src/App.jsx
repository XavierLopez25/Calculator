import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}
