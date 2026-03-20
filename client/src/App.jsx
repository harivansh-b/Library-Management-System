import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import DeleteBook from "./DeleteBook";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1>Library Management System</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Book</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;