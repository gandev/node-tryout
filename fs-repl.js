var repl = require('repl'),
	fs = require('fs');

var ctx = repl.start('> ').context;

var ls = function(path) {
	fs.readdir(path, function(error, files) {
		if(error) {
			console.log(error);
			return;
		}

		for(var i = 0; i < files.length; i++) {
			console.log(files[i]);
		}
	});
};

//fs.open("D:\\dir.txt", "a+")

var cat = function(path) {
	fs.readFile(path, 'ascii', function(err, data) {
		if(err) console.log(err);
		else console.log(data);
	});
};

var addAscii = function(path, data) {
	fs.appendFileSync(path, data, 'ascii');
};

var watch = function(path) {
	fs.watch(path, function (event, filename) {
	  console.log('event is: ' + event);
	  if (filename) {
	    console.log('filename provided: ' + filename);
	  } else {
	    console.log('filename not provided');
	  }
	});
};

ctx.ls = ls;

ctx.cat = cat;

ctx.addAscii = addAscii;

ctx.watch = watch;