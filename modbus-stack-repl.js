var repl = require('repl');

var ctx = repl.start('> ').context;

// 'WSC' contains the "Function Code" that we are going to invoke on the remote device
var WSC = require('modbus-stack').FUNCTION_CODES.WRITE_SINGLE_COIL;

// IP and port of the MODBUS slave, default port is 502
var client = require('modbus-stack/client').createClient(502, '10.1.220.5');

ctx.l = function(value) {
	// 'req' is an instance of the low-level `ModbusRequestStack` class
	var req = client.request(WSC, 		// Function Code
	                         12322,		// Start at address
	                         value);	// Write

	// 'response' is emitted after the entire contents of the response has been received.
	req.on('response', function(registers) {
	  console.log(registers);
	  client.end();
	});
};
