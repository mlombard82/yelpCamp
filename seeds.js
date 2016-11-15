var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
   {
      name: "Cloud's Rest",
      image: "https://farm1.staticflickr.com/221/489378747_8b8bc1bec5.jpg",
      description: "blah blah blah"
   },
   {
      name: "Desert Mesa",
      image: "https://farm5.staticflickr.com/4081/4857628316_1266d4ff2d.jpg",
      description: "blah blah blah"
   },
   {
      name: "Canyon Floor",
      image: "https://farm5.staticflickr.com/4101/4866190595_9bd5020b2f.jpg",
      description: "blah blah blah"
   } 
];

function seedDB(){
    //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
           Campground.create(seed, function(err, campground){
               if(err){
                   console.log(err);
               } else {
                   console.log("added a campground");
                   //create a comment
                   Comment.create(
                       {
                           text: "This place is great, but I wish there was internet",
                           author: "Homer"
                       }, function(err, comment){
                           if(err){
                               console.log(err);
                           } else {
                                campground.comments.push(comment);
                                campground.save();                   
                                console.log("Created new comment");
                           }

                    });
               }
           });
       });
   });  

   //add a few comments
}

module.exports = seedDB;