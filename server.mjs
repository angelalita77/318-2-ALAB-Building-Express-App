//Import (1)
import express from "express";



//Setup (2)
const app = express();
const PORT = 3000;


//Middleware
app.use(logReq);


function logReq(req, res, next){
    console.log(`${req.method} request made to '${req.url}'`);
    next();
}

//Routes
app
.route('/horror')
.get((req, res) => {
    res.send("The Ring");
    console.log(req.params.id)
})
.post( (req, res) => {
    res.send(`New Title Added: "Skinamarink" `);
})
.put((req, res) => {
    res.send(`Title Updated: "The Ring (US)"`)
})
.delete( (req, res) => {
    res.send(`Title Deleted: "The Ring (US)"`)
})

app
.route("/horror/:id")
.put((req,res) => {
    res.send(`Testing PUT Param value ${req.params.id}.`)
})
.delete( (req, res) => {
    res.send(`Testing DELETE Param value ${req.params.id}"`)
});

//Global Error Hardling Middleware
app.use((err, req, res, next) =>{
    res.status(500), send(err.message);
});

//Server Listener (3)
app.listen(PORT, (req, res) => {
    console.log(`Successfully connected through port ${PORT}`);
})