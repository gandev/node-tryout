var repl = require('repl');
var net = require('net');

var client = net.connect({port: 10000, host: '192.168.0.15'}, function() {
	console.log("connected!");
});

var send = function(msg) {
	client.write(msg + "\r\n");
};

var countReceivedTel = 0;

client.on('data', function(data) {
	var datajson = data.toJSON();
	console.log(datajson + " - T:" + countReceivedTel + "\r\n");

	if(data[4] === 0) {
	  countReceivedTel++;
	  console.timeEnd('single-read');
	}
});

client.on('error', function(err){
	console.log(err);
});

var ctx = repl.start(': ').context;

ctx.client = client;

ctx.sr = function(startAddress) {
	console.time('single-read');

	var buf = new Buffer(6);

	buf.writeUInt8(0x0, 0); //telegram length high byte
	buf.writeUInt8(0x6, 1); //telegram length low byte
	buf.writeUInt8(0x10, 2); //command code (0x10 = SingleRead)
	
	var i_WordCountAndChannel = 14;	
	i_WordCountAndChannel = i_WordCountAndChannel << 3;
	i_WordCountAndChannel = i_WordCountAndChannel + 1;
	i_WordCountAndChannel = i_WordCountAndChannel << 1;

	buf.writeUInt8(i_WordCountAndChannel, 3);

	var i_StartAddressHighByte = startAddress >> 8;
	var i_StartAddressLowByte = 0xFF & startAddress;
	buf.writeUInt8(i_StartAddressHighByte, 4);
	buf.writeUInt8(i_StartAddressLowByte, 5);

	console.log(buf);
	client.write(buf);
};