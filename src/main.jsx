import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Principal from './Principal.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Principal></Principal>
  </BrowserRouter>,
);
