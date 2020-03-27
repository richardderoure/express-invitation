const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(express.static('views'));


app.post("/card", (req, res, next) => {
    console.log(req.body);
    let inputObject = {
        greeting: req.body.text,
        event: req.body.event,
        message: req.body.message,
    }
    res.send(inputObject);
});

app.get("/card", (req, res) => {
    
    res.send();

});



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});