import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Home, Who, Contact, Footer, MentionsLegales } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <Navbar /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
