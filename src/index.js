import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Supports weights 100-900
import '@fontsource-variable/outfit';
// Supports weights 100-700
import '@fontsource-variable/roboto-mono';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

