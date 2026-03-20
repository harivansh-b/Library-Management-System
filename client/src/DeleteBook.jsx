import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DeleteBook(){

    const { id } = useParams();
    const navigate = useNavigate();

    const [book,setBook] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/books/${id}`)
        .then(res => res.json())
        .then(data => setBook(data));

    },[]);

    const deleteBook = () => {

        fetch(`http://localhost:5000/books/${id}`,{
            method:"DELETE"
        }).then(()=>navigate("/"));

    };

    return(
        <div>

        <h2>Delete Book</h2>

        <p>Are you sure?</p>

        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>

        <button onClick={deleteBook}>Yes Delete</button>

        <button onClick={()=>navigate("/")}>Cancel</button>

        </div>
    );
}

export default DeleteBook;