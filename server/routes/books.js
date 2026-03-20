const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
    db.query("SELECT * FROM books", (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

router.get("/:id", (req, res) => {
    db.query("SELECT * FROM books WHERE id=?", [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

router.post("/", (req, res) => {
    const { title, author, year } = req.body;

    db.query(
        "INSERT INTO books(title, author, year) VALUES(?,?,?)",
        [title, author, year],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Book Added" });
        }
    );
});

router.put("/:id", (req, res) => {
    const { title, author, year } = req.body;

    db.query(
        "UPDATE books SET title=?, author=?, year=? WHERE id=?",
        [title, author, year, req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Book Updated" });
        }
    );
});

router.delete("/:id", (req, res) => {
    db.query(
        "DELETE FROM books WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) throw err;
            res.json({ message: "Book Deleted" });
        }
    );
});

module.exports = router;