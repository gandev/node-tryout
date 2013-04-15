var repl = require('repl'),
	fs = require('fs');

var ctx = repl.start('> ').context;

var watchedPath;

function tail(path, lineCount) {
	fs.readFile(path, 'ascii', function(err, data) {
		if(err) console.log(err);
		else {
			var lastLine = data.substring(data.lastIndexOf("\n") + 1);
			console.log(lastLine);
		}
	});
};

var watch = function(path) {
	watchedPath = path;

	fs.watch(path, function (event, filename) {
	  //console.log('event is: ' + event);
	  if (filename) {
	  	//console.log('filename provided: ' + filename);
	  	console.log("---->" + filename);
	  	tail(path + '\\' + filename);	    
	  } else {
	    console.log('filename not provided');
	  }
	});
};

ctx.watch = watch;

watch("D:\\Proj\\VolkswagenBrasilTaubateCentralPC\\Log");
