var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm5.staticflickr.com/4082/4857023755_7e2be75031.jpg"},
        {name: "Granite hill", image: "https://farm2.staticflickr.com/1266/973330600_c1360f7cd3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2512/5733464781_8787e851b0.jpg"}
    ]
    
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has Started!")
});