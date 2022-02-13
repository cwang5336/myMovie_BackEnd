const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { json } = require("express");
const compression = require("compression"); 
const bodyParser = require("body-parser"); 
const db = require("./db"); 
const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
    console.log("server from port 5432");  //server running on port 5000
});

//middleware

app.use(cors());
app.use(express.json()); //req.body
app.use(compression()); 
app.use(bodyParser.json()); 


 app.get("/", (req, res) => {
     res.send("hi");
 });

//signup routes / login routes

app.post("/users", db.signup); 
app.post("/login", db.login);

//movie routes

app.post("/movielist", db.addMovie);
app.get("/movielist", db.getAllMovie);
app.get("/movielist/:id", db.getMovie);
app.put("/movielist/:id", db.editMovie);     
app.delete("/movielist/:id", db.deleteMovie);