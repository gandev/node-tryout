var repl = require("repl"),
    msg = "message";

var ctx = repl.start('> ').context;

ctx.m = msg;
