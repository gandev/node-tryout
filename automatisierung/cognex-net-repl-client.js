var repl = require('repl');
var net = require('net');

var client = net.connect({port: 23, host: '10.1.172.41' /*127.0.0.1*/}, function() {
    //send("FAOL W204/Prüfnest 1(0);n.i.O.;17.969999;0;17.969999;65.440002;0;65.440002;73.480003;0;73.480003;39.700001;0;39.700001;17.02;0;17.02;0;17.02;0;-0.700;-0.900;-0.500;-0.500;-0.600;-0.600;0.700;0.900;0.500;0.500;0.600;0.600\r\n");

    send("admin");
    send("");

    console.log("connected!");
});

function send(msg) {
    client.write(msg + "\r\n");
};

client.on('data', function(data) {
    console.log(data.toString());
});

client.on('error', function(err) {
    console.log(err);
});

var ctx = repl.start(': ').context;

ctx.client = client;

// repl methods for Cognex Native Mode Commands

ctx.get = function(cell) {
    send("GV" + cell);
};

ctx.fill = function() {
  var columns = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var rows = 398;
  for(var i = 1;i < rows; i++)
    for(var n = 0; n < columns.length; n++) {
      var row = ('000' + i).slice(-3);  	  	    	  	  
      var sendstr = "SS" + columns[n] + row + 'test';
  	  	    	  	  
      send(sendstr);
    }   
};

ctx.trig = function() {
    send("SE8");
};

