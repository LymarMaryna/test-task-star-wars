import React from 'react';
import ReactDOM from 'react-dom/client';
import { StarWarsView } from './pages';
import './default.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StarWarsView />
  </React.StrictMode>
);
