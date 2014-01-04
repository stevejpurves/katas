function add(string) {
	var sum  = 0;
	if (string !== undefined && string !== "" ) {
		var matches = string.match(/\/\/(.*)\n(.*)/);
		if (matches)
			sum = sumTheNumberPart( matches[2], matches[1] );
		else
			sum = sumTheNumberPart( string , '[,\n]' );
	}				
	return sum;
}

function sumTheNumberPart(string, separator) {
	var sum = 0;
	var reg = new RegExp(separator);
	string.split(reg)
		.forEach(function(value) {
			sum += parseInt(value);
			});	
	return sum;
}

function expectAddedNumbers(string, number) {
	expect(add(string)).toBe(number);
}

describe("string calculator", function() {
	it("should return zero for an empty string", function() {
		expectAddedNumbers("", 0);
		expectAddedNumbers(undefined, 0);
	});

	it("should return the integer for any string  with a single number", function() {
		expectAddedNumbers("1", 1);
		expectAddedNumbers("2", 2);
		expectAddedNumbers("283478934", 283478934);
	});	
	
	it("should return the sum of a string with many numbers", function() {
		expectAddedNumbers("1,2", 3);
		expectAddedNumbers("1,2,3,4,5,6,7", 28);
	});
	
	it("Introducing a new line character, we have to sum the numbers", function()
	{
		expectAddedNumbers("1\n2,3", 6);
		expect(add("1\n")).not.toBe(1);
		expect(add("1,\n2,3")).not.toBe(6);
	});
	
	it("Introducing any separator character and maybe new line characters", function()
	{
		expectAddedNumbers("//;\n1;2", 3);
	});
});
