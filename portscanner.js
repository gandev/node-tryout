var portscanner = require('portscanner')

// Checks the status of a single port
var port = 80;
var iprange = "10.1.130.x";

for(var i = 0; i < 255; i++) {
	(function(idx) {
		var ip = iprange.replace("x", "" + idx);
		portscanner.checkPortStatus(port, ip, function(error, status) {
		  // Status is 'open' if currently in use or 'closed' if available
		  if(status === "open") 
		  	console.log(status + ": " + ip + ":" + port)
		})
	})(i);
}
