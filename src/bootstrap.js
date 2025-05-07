import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';




const mount = (el) => {
        const root = ReactDOM.createRoot(el);
        root.render(<App />);

    };
    
    // Standalone mode
    if (document.querySelector('#root')) {
        mount(document.querySelector('#root'));
    }
    
export { mount };


