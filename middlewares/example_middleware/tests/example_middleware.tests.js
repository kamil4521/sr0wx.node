var expect = require('chai').expect;
var ExampleMiddleware = require('../index.js');

describe('example_middleware tests', function(){
    var exampleModule = null;
    before(function(done){
        exampleModule = new ExampleMiddleware();
        done();
    });

    it('Should process - received proper data', function(done){
        exampleModule.on('data', function(data){
            console.log(data);
            expect(data).is.not.null;
            expect(data).is.equal('Received object "Hello World!"');
            done();
        });
        exampleModule.process('Hello World!');
    });
});