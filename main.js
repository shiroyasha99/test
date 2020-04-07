const app = require("express")();
const request = require("request");

app.get("/", (req, res) => {
    res.send("ALL IS WELL");
    res.end();
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Lestining ..");
});

setInterval(() => {
    request.get("http://moodle.alazhar.edu.ps", (req,res) => {
        if(res.statusCode!=200){
            console.log("ERROR");
        }
        console.log(res.statusCode);
    });
}, 5);