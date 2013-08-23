
function numbers_to_words( number ) {
	var keywords = ["","one","two","three", "four", "five","six","seven","eight",
	"nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen",
	"seventeen","eighteen","nineteen","twenty"];
    keywords[30] = "thirty";
    keywords[40] = "forty";
    keywords[50] = "fifty";
    keywords[60] = "sixty";
    keywords[70] = "seventy";
    keywords[80] = "eighty";
    keywords[90] = "ninety";

    var separator = [""];
    separator[10] = " ";
    separator[100] = " and ";

    var words = "";

    var thousands = Math.floor( number / 1000 );
    if (number >= 1000) {
        words += keywords[thousands] + " thousand";
        number -= 1000*thousands;
    }

    var hundreds = Math.floor( number / 100 );
    if (number >= 100) {
        words += keywords[hundreds] + " hundred";
        number -= 100*hundreds;
        if ( number > 0 )
            words += separator[100];
    }

    var tens = Math.floor( number / 10 );
    if (number >= 10) {
        words += keywords[10 * tens];
        number -= 10*tens;
        if ( number > 0 )
            words += separator[10];
    }

    words += keywords[number];

    return words;
}

describe("when converting numbers to words", function(){

	describe("some numbers are expressed with one word", function(){
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
	
	describe("other numbers expressed in two words", function(){
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

        it("one thousand", function(){
            expect( numbers_to_words(1000)).toBe("one thousand");
        });
	});

    describe("other expressions contain the word 'and'", function() {
        it("one hundred and one", function(){
            expect( numbers_to_words(101)).toBe("one hundred and one");
        });

        it("nine hundred and ninety nine", function(){
            expect( numbers_to_words(999)).toBe("nine hundred and ninety nine");
        });


    });
});
