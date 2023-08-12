import Landing from "./components/Landing/Landing.jsx"
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx"
import Form from "./components/Form/Form.jsx";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<Home />} />
    <Route path="/create" element={<Form />} />

    </Routes>
    
    </>
  )


}
export default App;