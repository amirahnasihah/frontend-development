//import logo from './logo.svg';
import "./App.css";

function App() {
    function formatName(user) {
        return user.firstName + " " + user.lastName;
    }

    function getGreeting(user) {
        if (user) {
            return <h1>Hello and welcome, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger!</h1>;
    }

    const user = {
        firstName: "Amirah",
        lastName: "Nasihah",
    };

    // const element = <h1>Hello World and Welcome to first react app!</h1>;
    return (
        <div>
            <div>{getGreeting(user)}</div>
        </div>
    );
}

export default App;
