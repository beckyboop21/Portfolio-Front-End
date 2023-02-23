import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";
import FourOFour from "./Pages/FourOFour";


import AgeModal from "./Components/AgeModal";
import SearchBar from "./Components/SearchBar";


function App() {
  return (
    <div className="Hello World">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/strains" element={<Index />} />
            <Route path="/strains/new" element={<New />} />
            <Route exact path="/strains/:id" element={<Show />} />
            <Route path="/strains/:id/edit" element={<Edit />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
