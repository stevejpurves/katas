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
	var numbers = getTheNumberPart( tokens );
	throwIfNegative( numbers );
	numbers = removeNumbersOver(1000, numbers);
	if (numbers.length)
		return numbers.reduce( function(memo, value) {return memo + value;} );
	return 0;
}

function getTheNumberPart( tokens ) {
	var regexp = new RegExp( tokens.separator );
	return tokens.string
			.split( regexp )
			.map(function(value){ return parseInt(value); });
}

function throwIfNegative(numbers) {
	var negatives = numbers.filter(function(values) { return values < 0; });
	if (negatives.length > 0) 
		throw "negatives not allowed:" + negatives.toString();
}

function removeNumbersOver(limit, numbers) {
	var theLimit = limit;
	return numbers.filter( function(value) { return value <= theLimit; } )
}

function expectAddedNumbers(string, number) {
	expect(add(string)).toBe(number);
}

function expectException(string, exception) {
	expect(function() { add(string); } ).toThrow(exception);
}

describe("string calculator", function() {
	it("should return zero for an empty string", function() {
		expectAddedNumbers("", 0);
		expectAddedNumbers(undefined, 0);
	});

	it("should return the integer for any string  with a single number", function() {
		expectAddedNumbers("1", 1);
		expectAddedNumbers("2", 2);
		expectAddedNumbers("999", 999);
	});	
	
	it("should return the sum of a string with many numbers", function() {
		expectAddedNumbers("1,2", 3);
		expectAddedNumbers("1,2,3,4,5,6,7", 28);
	});
	
	it("Introducing a new line character, we have to sum the numbers", function()
	{
		expectAddedNumbers("1\n2,3", 6);
	});
	
	it("Introducing any separator character and maybe new line characters", function() {
		expectAddedNumbers("//;\n1;2", 3);
	});
	
	it("throws and exception for negative numbers", function() {
		expectException("1,-1", "negatives not allowed:-1");
		expectException("1,-1,-2", "negatives not allowed:-1,-2");
	});
	
	it("numbers greater then 1000 should be ignored", function () {
		expectAddedNumbers("2,1001", 2);
		expectAddedNumbers("1001", 0);
	});
});
