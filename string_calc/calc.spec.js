var _ = require('underscore');

function add(string) {	
	if (string === undefined || string === "" ) 
		return 0;
	return sumTheNumberPart( getSeparatorAndString(string) );
}

function getSeparatorAndString( string ) {
	var matches = string.match(/\/\/(.*)\n(.*)/);
	if (matches)
		return { string: matches[2], separator: matches[1] };
	return { string: string, separator: '[,\n]' };
}

function sumTheNumberPart( tokens ) {
	var sum = 0;
	var regexp = new RegExp( tokens.separator );
	var numbers = tokens.string
					.split( regexp )
					.map(function(value){ return parseInt(value); });
	throwIfNegative( numbers );
	return numbers.reduce( function(memo, value) {return memo + value;} );
}

function throwIfNegative(numbers) {
	var negatives = numbers.filter(function(values) { return values < 0; });
	console.log(negatives.length);
	if (negatives.length > 0) {
		console.log('pong');
		throw "negatives not allowed:" + negatives.toString();
		}
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
	
	it("throws and exception for negative numbers", function() {
		expect(function() { add("1,-1"); } ).toThrow("negatives not allowed:-1");
	});
});
