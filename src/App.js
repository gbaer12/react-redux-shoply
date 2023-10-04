import Navbar from "./Navbar";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <div className="container">
          <h1 className="mt-3">Welcome to the shopping cart!</h1>
        </div>
        <Routes />
      </main>
    </div>
  );
}

export default App;
