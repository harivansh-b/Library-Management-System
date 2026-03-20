import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/books")
        .then(res => res.json())
        .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h2>Book List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.year}</td>

                        <td>
                        <Link to={`/edit/${book.id}`}>Edit</Link>
                        </td>
                        <td>
                        <Link to={`/delete/${book.id}`}>Delete</Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;