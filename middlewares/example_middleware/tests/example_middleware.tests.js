var expect = require('chai').expect;
var ExampleMiddleware = require('../index.js');

describe('example_middleware tests', function(){
    var exampleMiddleware = null;
    before(function(done){
        exampleMiddleware = new ExampleMiddleware();
        done();
    });

    it('Should process - received proper data', function(done){
        exampleMiddleware.on('data', function(data){
            expect(data).is.not.null;
            expect(data).is.equal('{}');
            done();
        });
        exampleMiddleware.register({});
    });
});