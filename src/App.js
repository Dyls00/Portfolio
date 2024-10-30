import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Home, Who, Contact, Footer, MentionsLegales } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<>
            <Home />
            <Who />
            <Contact />
            </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
