var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm5.staticflickr.com/4082/4857023755_7e2be75031.jpg"},
        {name: "Granite hill", image: "https://farm2.staticflickr.com/1266/973330600_c1360f7cd3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2512/5733464781_8787e851b0.jpg"},
        {name: "Salmon Creek", image: "https://farm5.staticflickr.com/4082/4857023755_7e2be75031.jpg"},
        {name: "Granite hill", image: "https://farm2.staticflickr.com/1266/973330600_c1360f7cd3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2512/5733464781_8787e851b0.jpg"},
        {name: "Salmon Creek", image: "https://farm5.staticflickr.com/4082/4857023755_7e2be75031.jpg"},
        {name: "Granite hill", image: "https://farm2.staticflickr.com/1266/973330600_c1360f7cd3.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2512/5733464781_8787e851b0.jpg"}
    ]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has Started!")
});