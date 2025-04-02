import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />
);

// const mount = (el) => {
//     console.log(el);
    
//     ReactDOM.render(<App />, el);
// };


// if(process.env.NODE_ENV === 'development') {
//     console.log('Development mode detected!');
    
//     const devRoot = ReactDOM.createRoot(document.querySelector('#_react-test-root'));

//     if(devRoot) {
//         mount(devRoot);
//     }
// }

export default root;