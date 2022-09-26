import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CardDetails } from "./pages/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardDetails" element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
