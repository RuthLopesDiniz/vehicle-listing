import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Crie a raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
