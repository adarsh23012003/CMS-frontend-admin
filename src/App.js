import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Login from "./Pages/Users/Login";
import Register from "./Pages/Users/Register";
import About from "./Pages/About";
import AuthenticLogin from "../src/Protracted/AuthenticLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AuthenticLogin Component={Home} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
