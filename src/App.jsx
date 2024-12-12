import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditContent from "./pages/EditContent";
import AddContent from "./pages/AddContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditContent />} />
        <Route path="/addContent" element={<AddContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
