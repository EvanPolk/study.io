import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ExploreSet from "./pages/ExploreSet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flashcardSet/:setId" element={<ExploreSet />} />
      </Routes>
    </Router>
  );
}

export default App;
