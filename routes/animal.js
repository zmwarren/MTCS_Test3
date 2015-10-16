var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))

var realAnimals = [];

function filterByTitle(obj) {
 if ('name' in obj && typeof(obj.name) === 'string') {
   realAnimals.push(obj);
   return true;
 } else {
   return false;
 }
};

router.route('/')

/* GET All the Animals */
  .get(function(req, res) {
    mongoose.model('Animal').find({}, function(err, animal){
      if(err){
        return console.log(err);
      } else {
        var arrByTitle = animal.filter(filterByTitle);
        res.json(arrByTitle);
      }
    });
  })

  .post(function(req, res){
    
    var type = req.body.type;
    var name = req.body.name;

    mongoose.model('Animal').create({
      type: type,
      name: name
    }, function(err, animal){
      if(err){
        res.send("That's not an animal, son")
      } else{
        console.log("Hey, you didn't screw it up for once! " + animal + " has been added to the database.");
        res.send(animal);
      }
    });
  });

module.exports = router;