import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

//Components
import NavBar from "./Components/NavBar";
import './App.css'
// import { useState } from "react";
import AgeModal from "./Components/AgeModal";
import SearchBar from "./Components/SearchBar";

function App() {
  // const [showNav, setShowNav] = useState(true)

  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <main> */}
          <Routes>
            <Route path="/strains" element={<Index />} />
            <Route path="/strains/new" element={<New />} />
            <Route path="/strains/:id" element={<Show />} />
            <Route path="/strains/:id/edit" element={<Edit />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
