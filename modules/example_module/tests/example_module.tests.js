var expect = require('chai').expect;
var ExampleModule = require('../index.js');

describe('example_module tests', function(){
    var exampleModule = null;
    before(function(done){
        exampleModule = new ExampleModule();
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