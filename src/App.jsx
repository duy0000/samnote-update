import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TakeNote from "./pages/takeNote";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/take-note" element={<TakeNote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
