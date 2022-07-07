import { Routes, Route } from "react-router-dom";
import PrimaryNav from "./components/PrimaryNav";
import Home from "./routes/Home";
import Accepted from "./routes/Accepted";
import Rejected from "./routes/Rejected";
import CatResults from "./components/CatResults";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="row">
        <h1 className="header">Pet-Mates</h1>
      </div>
      <p className="paragraph">Helping you find your paw-fect companion</p>
      <PrimaryNav className="nav" />
      <Routes>
        <Route path="/accepted" element={<Accepted />} />
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<CatResults />} />
        <Route path="/rejected" element={<Rejected />} />
      </Routes>
    </div>
  );
}

export default App;
