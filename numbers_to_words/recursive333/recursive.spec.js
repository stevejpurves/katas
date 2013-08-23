
function numbers_to_words( number ) {
	var words = ["","one","two","three", "four", "five","six","seven","eight",
	"nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen",
	"seventeen","eighteen","nineteen","twenty"];
	words[30] = "thirty";
	words[40] = "forty";
	words[50] = "fifty";
	words[60] = "sixty";
	words[70] = "seventy";
	words[80] = "eighty";
	words[90] = "ninety";


	if (words[number] !== undefined) 
		return words[number];

    if (number >= 100) {
        var hundreds = Math.floor( number / 100 );
        return numbers_to_words( hundreds ) + " hundred";
    }

    var tens = 10 * Math.floor( number / 10 );
    return numbers_to_words(tens) + " " + numbers_to_words( number - tens );
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

        it("one hundred", function(){
            expect( numbers_to_words(100)).toBe("one hundred");
        });

        it("two hundred", function(){
            expect( numbers_to_words(200)).toBe("two hundred");
        });
	});
});
