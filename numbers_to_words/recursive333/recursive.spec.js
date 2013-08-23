
function numbers_to_words( number ) {
	var keywords = ["","one","two","three", "four", "five","six","seven","eight",
	"nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sizteen",
	"seventeen","eighteen","nineteen","twenty"];
	keywords[30] = "thirty";
	keywords[40] = "forty";
	keywords[50] = "fifty";
	keywords[60] = "sixty";
	keywords[70] = "seventy";
	keywords[80] = "eighty";
	keywords[90] = "ninety";

	if (keywords[number] !== undefined) 
		return keywords[number];
		
	var tens = 10 * Math.floor( number / 10 );
	return numbers_to_words(tens) + " " + numbers_to_words(number-tens);	
}

describe("when converting numbers to words", function(){

	describe("some numbers map to single words", function(){
		it ("one", function(){
			expect( numbers_to_words(1) ).toBe("one");
		});
		
		it("two", function(){
			expect( numbers_to_words(2) ).toBe("two");
		});
		
		it("twenty", function(){
			expect( numbers_to_words(20) ).toBe("twenty");
		});

		it("thirty", function(){
			expect( numbers_to_words(30) ).toBe("thirty");
		});
	});
	
	describe("other numbers", function(){
		it("twenty one", function(){
			expect( numbers_to_words(21) ).toBe("twenty one");
		});
		
		it("thirty one", function(){
			expect( numbers_to_words(31) ).toBe("thirty one");
		});
		
		it("ninety nine", function(){
			expect( numbers_to_words(99) ).toBe("ninety nine");
		});		
	});
});
