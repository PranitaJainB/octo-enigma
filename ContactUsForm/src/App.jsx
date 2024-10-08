import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="pagecolor">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
