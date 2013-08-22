
function numbers_to_words( number ) {
	words = ["","one","two","three"];
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
		
		it("three", function(){
			expect( numbers_to_words(3) ).toBe("three");
		});
	});
});
