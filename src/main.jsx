import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router here
import App from './App.jsx';
import Page2 from './Page2.jsx';
import CreateAccount from './CreateAccount.jsx';
import Finalpage from './Finalpage.jsx';

// Creating the router with routes
const appRouter = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/finalpage" element={<Finalpage />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {appRouter}
  </StrictMode>
);
