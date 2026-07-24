import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/Navbar";
import ResultPage from "./pages/ResultsPage";
import PollPage from "./pages/PollPage";
import CreatePollPage from "./pages/CreatePollPage";
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Create" element={<CreatePollPage />} />
          <Route path="/polls/:id" element={<PollPage />} />
          <Route path="/polls/:id/results" element={<ResultPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;