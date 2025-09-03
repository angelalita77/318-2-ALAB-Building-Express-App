//Import (1)
import express from "express";



//Setup (2)
const app = express();
const PORT = 3000;


//Middleware

//Routes
app.get("/", (req, res) => {
    res.send("You found me bro!");
})
//Global Error Hardling Middleware

//Server Listener (3)
app.listen(PORT, (req, res) => {
    console.log(`Successfully connected through port ${PORT}`);
})