import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditContent from "./pages/EditContent";
import AddContent from "./pages/AddContent";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
       />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditContent />} />
        <Route path="/addContent" element={<AddContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
