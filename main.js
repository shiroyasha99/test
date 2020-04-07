const app = require("express")();
const request = require("request");
let interval= 9999999;
app.get("/", (req, res) => {
    res.send("ALL IS WELL");
    res.end();
});
app.get("/start",(req,res)=>{
    interval = 5;
    res.send("Started");
    res.end();
});
app.get("/stop",(req,res)=>{
    interval = 99999999999;
    res.send("Stopped");
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
}, interval);
