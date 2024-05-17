import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calculator" element={<div>Calculator</div>} />
        <Route path="/calculator/v1" element={<div>Calculator/v1</div>} />
        <Route path="/calculator/v2" element={<div>Calculator/v2</div>} />
      </Routes>
    </BrowserRouter>
  );
}
