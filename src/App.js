import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="CannaTechApp">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Strains" element={<Index />} />
            <Route path="/Strains/new" element={<New />} />
            <Route exact path="/Strains/:id" element={<Show />} />
            <Route path="/Strains/:id/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
