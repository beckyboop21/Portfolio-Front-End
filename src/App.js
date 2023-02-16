import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Components/Header'; 
import Footer from './Components/Footer';
import AgeModal from './Components/AgeModal';
import TodoList from './Components/TodoList';
import SearchBar from './Components/SearchBar';
import Strain from './Components/Strain';

import Home from './Components/Pages/Home';

import NewStrain from './Components/Pages/New';
import ShowStrain from './Components/Pages/ShowStrain';
import EditStrains from './Components/EditStrains';
import Error from './Components/Pages/Error';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a React app', completed: false },
    { text: 'Deploy React app to Netlify', completed: false }
  ]);

  const [showModal, setShowModal] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [strains, setStrains] = useState([]);

  function handleTodoClick(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function handleSearch(searchTerm) {
    const filteredTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredTodos);
  }

  useEffect(() => {
    const fetchStrains = async () => {
      const response = await fetch('https://api.example.com/strains');
      const data = await response.json();
      setStrains(data);
    };
    fetchStrains();
  }, []);

  return (
    <div className="App">
      <Header /> 
      <Router>
        <SearchBar onSearch={handleSearch} />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/strains">Strains</Link></li>
            <li><Link to="/strains/new">New Strain</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/strains" element={<Strain strains={strains} />} />
            <Route path="/strains/new" element={<NewStrain />} />
            <Route path="/strains/:id" element={<ShowStrain />} />
            <Route path="/strains/:id/edit" element={<EditStrain />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          {searchResults.length > 0 && (
            <TodoList todos={searchResults} onTodoClick={handleTodoClick} />
          )}
          {searchResults.length === 0 && (
            <TodoList todos={todos} onTodoClick={handleTodoClick} />
          )}
        </main>
      </Router>
      <Footer />
      {showModal && <AgeModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
