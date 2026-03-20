import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");

    const navigate = useNavigate();

    const addBook = () => {

        fetch("http://localhost:5000/books", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ title, author, year })

        }).then(() => navigate("/"));
    };

    return (
        <div>

        <h2>Add Book</h2>

        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <br/><br/>

        <input placeholder="Author" onChange={e => setAuthor(e.target.value)} />
        <br/><br/>

        <input placeholder="Year" onChange={e => setYear(e.target.value)} />
        <br/><br/>

        <button onClick={addBook}>Add Book</button>

        </div>
    );
}

export default AddBook;