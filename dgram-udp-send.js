var udp = require("dgram");
var udpSock = udp.createSocket("udp4");
var tb = new Buffer(10);

tb.fill("a");
udpSock.sendto(tb, 0, 10, 514, "127.0.0.1");

tb.fill("b");
udpSock.sendto(tb, 0, 10, 514, "127.0.0.1");

tb.fill("c");
udpSock.sendto(tb, 0, 10, 514, "127.0.0.1");

