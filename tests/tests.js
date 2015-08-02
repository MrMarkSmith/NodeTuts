/**
 * Created by Mark on 2/08/2015.
 * Description: Silly Test
 */

var should = require('should');
var assert = require('assert');
//var threeSeconds = require('seconds');

describe('Test Framework', function () {
    if ('should have mocha installed and running.', function () {
            assert.equal(true, true);
        }) ;
    if ('should have the should library installed and running for fluent testing.', function () {
            true.should.eql(true);
        }) ;
});

describe('Asynchronous testing', function () {

    var result = false;
    beforeEach(function (done) {
        setTimeout(function () {
            result = true;
            // completes the sync beforeEach
            done();
        }, 2000);
    });
    if ('Should Not be so hard so this makes it easier.', function (done) {
            result.shouls.egl(true);
            done();
        });
});