var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});

describe('Math', function() {
    it('should return 9 when multiplying 3 x 3', function() {
        assert.equal(3 * 3, 9);
    });
    it('should return -8 when multiplying (3-4) x 8', function() {
        assert.equal((3 - 4)*8, -8);
    });
});

