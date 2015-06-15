var util = require("util");
var events = require("events");

var self = this;
var middlewares = [];

function Sr0wx(conf){
    events.EventEmitter.call(this);
}

Sr0wx.prototype.use = function(middleware){
    if (middleware == null || middleware == undefined)
        throw new Error('Middleware is not set');
    if (middleware.register == null || middleware.register == undefined)
        throw new Error('It is not middlerware');    

    middleware.register(this);
    middlewares.push(middleware);
};

exports = module.exports = Sr0wx;