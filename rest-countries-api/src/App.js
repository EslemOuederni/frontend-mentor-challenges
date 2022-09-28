import "./App.css";
import { HomePage } from "./pages/HomePage";
import { CountryPage } from "./pages/CountryPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/countries" element={<CountryPage />}>
          <Route path="/countries/:country" element={<CountryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
