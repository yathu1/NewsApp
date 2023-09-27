import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsDetail from './components/NewsDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:title" element={<NewsDetail />} /> {/* Use a parameter for the article ID */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </React.StrictMode>
);
