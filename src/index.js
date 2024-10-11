import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import PageWrapper from './components/PageWrapper/PageWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageWrapper>
        <App /> 
      </PageWrapper>
    </BrowserRouter>
  </React.StrictMode>
);