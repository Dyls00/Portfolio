import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Home, Who,Etudes,Ecole, Contact, Footer, MentionsLegales } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<>
            <Home />
            <Who />
            <Etudes />
            <Ecole />
            <Contact />
            <Footer />
            </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
