var expect = require('chai').expect;
var Sr0wx = require('../app');
var ExampleMiddleware = require('example-middleware');

describe('Adding example middleware to app', function(){
    var sr0wx = null;

    describe('Plugging example middleware to app', function(){
        before(function(done){
            sr0wx = new Sr0wx();
            done();
        });

        it('Should use middleware', function(done){
            var exampleMiddleware = new ExampleMiddleware();
            exampleMiddleware.on('data', function(data){
                expect(JSON.stringify(sr0wx)).is.equal(data);
                done();
            });
            sr0wx.use(exampleMiddleware);
        });
    });
});