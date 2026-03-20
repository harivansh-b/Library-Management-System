import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBook() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        author: "",
        year: ""
    });

    useEffect(() => {
        fetch(`http://localhost:5000/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
            .catch(err => console.error(err));
    }, [id]);

    const updateBook = () => {

        if (!book.title || !book.author || !book.year) {
            alert("Please fill all fields");
            return;
        }

        fetch(`http://localhost:5000/books/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        }).then(() => navigate("/"));
    };

    return (
        <div>
            <h2>Edit Book</h2>

            <input
                placeholder="Title"
                value={book.title}
                onChange={e => setBook({ ...book, title: e.target.value })}
            />

            <br /><br />

            <input
                placeholder="Author"
                value={book.author}
                onChange={e => setBook({ ...book, author: e.target.value })}
            />

            <br /><br />

            <input
                placeholder="Year"
                value={book.year}
                onChange={e => setBook({ ...book, year: e.target.value })}
            />

            <br /><br />

            <button onClick={updateBook}>Update</button>
        </div>
    );
}

export default EditBook;