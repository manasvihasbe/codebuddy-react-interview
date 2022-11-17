import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const Router = ({ onToggleImg }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home onToggleImg={onToggleImg} />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
