import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./import { Bropages/Home";
import AddRecipe from "./pages/AddRecipe";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}
export default App;