const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

iteams = ["Buy Food", "Cook Food", "Eat Food"];
workItems= [];

app.get("/", function(request, response){
    //response.send("Hello");
    //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    //console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016

    let today = new Date();

    let options = { weekday: 'long', day: 'numeric', month: 'long'};
    
    let day = today.toLocaleDateString("en-US", options);

    response.render('list', {listTitle : day, newIteams : iteams});

});

app.post("/", function(request, response){

    let iteam = request.body.newIteam;
    console.log(request.body);

    if(request.body.list === "Work"){
        workItems.push(iteam);
        response.redirect("/work");
    }else{
        iteams.push(iteam);
        response.redirect("/");
    }
    //console.log(iteam);
    //console.log("We are in post")
    
});

app.get("/work", function(request, response){
    response.render('list', {listTitle: "Work List", newIteams: workItems});
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
})