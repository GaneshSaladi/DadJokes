import "./App.css";
import Hero from "./Components/Hero";

function App() {
  const apikey = process.env.REACT_APP_API_KEY;
  return (
    <div className="App">
      <Hero ApiKey={apikey} />
    </div>
  );
}

export default App;
