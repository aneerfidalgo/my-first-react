import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("*");
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const loginlogout = () => setIsLoggedin(!isLoggedIn);
  return (
    <div className="App">
      <header className="App-header">
        <h1>You clicked the button {count} times.</h1>
        <button onClick={() => setCount(count + 1)}> + </button>&nbsp;
        <button onClick={() => setCount(0)}> Reset</button>&nbsp;
        <button onClick={() => setCount(count ? count - 1 : 0)}> - </button>
        &nbsp;
        <button onClick={() => setCount(Math.max)(count - 1, 0)}> - </button>
        <h2>Welcome Guest</h2>
        <button onClick={loginlogout}>{isLoggedIn ? "Logout" : "login"}</button>
        <section>
          <h2 onClick={() => setFirstName(firstName + "*")}>
            Hello {firstName}
          </h2>
        </section>
      </header>
    </div>
  );
}
export default App;
