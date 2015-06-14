var util = require("util");
var events = require("events");

function ExampleMiddleware() {
    events.EventEmitter.call(this);
}

util.inherits(ExampleMiddleware, events.EventEmitter);

ExampleMiddleware.prototype.register = function(obj) {
    this.emit("data", JSON.stringify(obj));
};

exports = module.exports = ExampleMiddleware;