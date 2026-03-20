CREATE DATABASE library_db;

USE library_db;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    year INT
);

INSERT INTO books(title, author, year) VALUES
('React Basics', 'John Doe', 2022),
('Node.js Guide', 'Alice Smith', 2023),
('MySQL Handbook', 'David Lee', 2021);