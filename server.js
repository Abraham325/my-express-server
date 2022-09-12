const express = require("express"); 

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello world!</h1>");
});

app.get("/contact", function(request, response){
    response.send("Contact me at: myemail@gmail.com");
});

app.get("/about", function(request, response){
    response.send("My name is <b>Abraham.</b><br>I am a web developer.");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});