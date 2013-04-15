var repl = require('repl');
var net = require('net');

var client = net.connect({port: 23, host: '10.1.172.41' /*127.0.0.1*/}, function() {
	//send("FAOL W204/Prüfnest 1(0);n.i.O.;17.969999;0;17.969999;65.440002;0;65.440002;73.480003;0;73.480003;39.700001;0;39.700001;17.02;0;17.02;0;17.02;0;-0.700;-0.900;-0.500;-0.500;-0.600;-0.600;0.700;0.900;0.500;0.500;0.600;0.600\r\n");

	send("admin");
	send("");

	console.log("connected!");
});

var send = function(msg) {
	client.write(msg + "\r\n");
};

client.on('data', function(data) {
	console.log(data.toString() + "\r\n");
});

client.on('error', function(err){
	console.log(err);
});

var ctx = repl.start(': ').context;

ctx.client = client;

ctx.get = function(cell) {
	send("gv" + cell);	
};

ctx.trig = function() {
	send("SE8");
};

