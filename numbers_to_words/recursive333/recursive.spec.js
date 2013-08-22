
function numbers_to_words( number ) {
	var words = ["","one","two","three", "four", "five","six","seven","eight",
	"nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sizteen",
	"seventeen","eighteen","nineteen","twenty"];
	words[30] = "thirty";
	if (words[number] === undefined)
		return numbers_to_words(20) + " " + numbers_to_words(number-20);
	return words[number];
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
	});
});
