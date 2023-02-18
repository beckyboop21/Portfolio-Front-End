
// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
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
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Header from './Components/Header'; 
// import Footer from './Components/Footer';
// import AgeModal from './Components/AgeModal';
// // import TodoList from './Components/TodoList';
// import SearchBar from './Components/SearchBar';
// import Nav from './Components/NavBar';

// //pages
// import Home from './Pages/Home';
// import New from './Pages/New';
// import Show from './Pages/Show';
// import Edit from './Pages/Edit';
// import Error from './Pages/Error';
// import StrainsAll from './Components/StrainsAll';

// function App() {
//   const [todos, setTodos] = useState([
//     { text: 'Get your Strain', completed: false },
//     { text: 'Get Local Dispensaries', completed: false },
//     { text: 'Strain reviews', completed: false }
//   ]);

//   const [showModal, setShowModal] = useState(true);
//   const [searchResults, setSearchResults] = useState([]);
//   const [strain, setStrains] = useState([]);

//   function handleTodoClick(index) {
//     const newTodos = [...todos];
//     newTodos[index].completed = !newTodos[index].completed;
//     setTodos(newTodos);
//   }

//   function handleSearch(searchTerm) {
//     const filteredTodos = todos.filter(todo =>
//       todo.text.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(filteredTodos);
//   }

//   useEffect(() => {
//     const fetchStrains = async () => {
//       const response = await fetch('https://api.example.com/strains');
//       const data = await response.json();
//       setStrains(data);
//     };
//     fetchStrains();
//   }, []);

//   return (
//     <div className="App">
//       <Router>
//       <Header /> 
//         <SearchBar onSearch={handleSearch} /> 
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/strains">Strains</Link></li>
//             <li><Link to="/strains/new">New Strain</Link></li>
//           </ul>
//         </nav>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/strains" element={<StrainsAll />} />
//             <Route path="/strains/new" element={<New />} />
//             <Route path="/strains/:id" element={<Show/>} />
//             <Route path="/strains/:id/edit" element={<Edit />} />
//             <Route path="/error" element={<Error />} />
//           </Routes>
//           {searchResults.length > 0 && (
//             <TodoList todos={searchResults} onTodoClick={handleTodoClick} />
//           )}
//           {searchResults.length === 0 && (
//             <TodoList todos={todos} onTodoClick={handleTodoClick} />
//           )}
//         </main>
//         <Footer />
//       {showModal && <AgeModal onClose={() => setShowModal(false)} />}
//       </Router>
//     </div>
//   );
// }

// export default App;
