import React, { useEffect, useState } from 'react';
import Message from 'dashboard_test/Message';
import { createHtml } from 'native_app/NativeElement';

const Home = () => {

    const [show, setShow] = useState(false);
    const showMessage = () => {
        console.log("Hello from React!");
        
        
    };
    useEffect(() => {
        createHtml()
    }, []);

    return (
        <div>
            <h1>Welcome to the React Page</h1>
            <div id="app"></div>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>Click Me</button>
            {show && <Message message="Hello from React!" type="success" />}
        </div>
    );
};

export default Home;