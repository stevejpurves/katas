
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

    for (var order_of_magnitude = 1000; order_of_magnitude > 1; order_of_magnitude /= 10) {
        var multiplier = Math.floor( number / order_of_magnitude );
        if (number >= order_of_magnitude) {
            if (order_of_magnitude === 1000)
                words += keywords[multiplier] + " thousand";
            if (order_of_magnitude === 100)
                words += keywords[multiplier] + " hundred";
            if (order_of_magnitude === 10) {
                if (number < 20) {
                    words += keywords[number];
                    multiplier = number / 10;
                }
                else
                    words += keywords[order_of_magnitude * multiplier];
            }
            number -= order_of_magnitude*multiplier;
            if ( number > 0 )
                words += separator[order_of_magnitude];
        }
    }

    words += keywords[number];

    return words;
}

describe("when converting numbers to words", function(){
    function expectNumberInWords(number, words) {
        expect(numbers_to_words(number)).toBe(words);
    }


	describe("some numbers are expressed with one word", function(){
        it ("1 to 19", function(){
            expectNumberInWords(1, "one");
            expectNumberInWords(2, "two");
            expectNumberInWords(10, "ten");
            expectNumberInWords(19, "nineteen");
		});
		
		it("the 10's", function(){
            expectNumberInWords(20,"twenty");
            expectNumberInWords(30,"thirty");
            expectNumberInWords(90,"ninety");
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

//        it("one thousand and one", function(){
//            expect( numbers_to_words(1001)).toBe("one thousand and one");
//        });
    });
});
