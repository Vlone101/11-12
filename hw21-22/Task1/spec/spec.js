var load = require('../js/script.js');


describe("pow function", function() {
	it("check whether the function is considered true", function() {
		var  result;
		result = load.pow(2, 2);
		expect(result).toEqual(4);
	});
});

