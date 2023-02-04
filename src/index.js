import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import ErrorBoundary from './components/Error/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
);