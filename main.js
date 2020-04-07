const app = require("express")();
const request = require("request");

app.get("/", (req, res) => {
    res.status(200);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Lestining ..");
});

setInterval(() => {
    request.get("http://moodle.alazhar.edu.ps", (req,res) => {
        
    });
}, 5);