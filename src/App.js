import {useState} from "react";
import StoreFront from "./StoreFront.js";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const logOutButton = (
        <>
            <StoreFront/>
            <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
        </>
    );
    const logInButton = (
        <>
            <h2>Please login</h2>
            <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
        </>
    );

    return loggedIn ? logOutButton : logInButton;

}

export default App;
