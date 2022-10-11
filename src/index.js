import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"
import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
                <App />
        </StyledEngineProvider>
    </React.StrictMode>
);

