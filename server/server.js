const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const bookRoutes = require("./routes/books");

app.use("/books", bookRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});