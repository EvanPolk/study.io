import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import ExploreSet from "./pages/ExploreSet.tsx";

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
