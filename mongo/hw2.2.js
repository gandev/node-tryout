var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/students", function(err, db) {

  db.collection("grades", function(err, collection) {
  	collection.find({type: "homework"}).sort({student_id: 1, score: 1}).toArray(function(err, items) {
  	  var student, score;
  	  var idsToDelete = [];
   	  items.forEach(function(i) {
   	    if(student !== i.student_id) {
   	  	  student = i.student_id;
   	  	  idsToDelete.push(i._id);
   	  	}
   	  });

   	  idsToDelete.forEach(function(s) { collection.remove({_id: s}, function() {}); })

      db.close();
    });
  });
});