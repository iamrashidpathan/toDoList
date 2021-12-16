const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

iteams = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function(request, response){
    //response.send("Hello");
    let today = new Date();

    let options = { weekday: 'long', day: 'numeric', month: 'long'};


    //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    //console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016

    let day = today.toLocaleDateString("en-US", options);

    //console.log(day)

    response.render('list', {kindOfDay : day, newIteams : iteams});

});

app.post("/", function(request, response){
    let iteam = request.body.newIteam;
    iteams.push(iteam);
    //console.log(iteam);
    //console.log("We are in post")
    response.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
})