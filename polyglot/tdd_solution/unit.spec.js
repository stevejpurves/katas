function polyglot( number ) {
    var keywords = ['', 'one', 'two','three','four','five','six','seven',
        'eight','nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen', 'twenty'];
    keywords[30] = 'thirty';
    keywords[40] = 'forty';
    keywords[50] = 'fifty';
    keywords[60] = 'sixty';
    keywords[70] = 'seventy';
    keywords[80] = 'eighty';
    keywords[90] = 'ninety';
    keywords[100] = 'hundred';
    keywords[1000] = 'thousand';

    function renderDoubleDigits(number) {
        var nearest_ten = 10 * Math.floor(number / 10);
        if (nearest_ten > 0) {
            return keywords[nearest_ten] + " " + keywords[number - nearest_ten];
        }
        else {
            return keywords[number - nearest_ten];
        }
    }

    var words = "";

    if (number >= 1000) {
        var n_thousands =  Math.floor(number/1000);
        words = renderDoubleDigits(n_thousands) + ' ' + keywords[1000];
        if ( number%1000 > 0) { words = words + " and " + renderDoubleDigits(number - n_thousands*1000); }
    }
    else if ( number >= 100 ) {
        var n_hundreds = Math.floor(number/100);
        words = renderDoubleDigits(n_hundreds) + ' ' + keywords[100];
        if ( number%100 > 0) { words = words + " and " + renderDoubleDigits(number - n_hundreds*100); }
    }
    else
    {
        if (number < 21 || number < 99 && number%10 === 0) { words = keywords[number]; }
        else { words = renderDoubleDigits(number); }
    }

    return words;
}

describe("when transforming Numbers to Words",function(){
    describe("the first twenty number are all one word",function(){
        it("one", function(){
            expect(polyglot( 1 )).toBe("one");
        });

        it("two", function(){
            expect(polyglot( 2 )).toBe("two");
        });

        it("three", function(){
            expect(polyglot( 3 )).toBe("three");
        });

        it("ten", function(){
            expect(polyglot( 10 )).toBe("ten");
        });

        it("twenty", function(){
            expect(polyglot( 20 )).toBe("twenty");
        });

        it("thirty", function(){
            expect( polyglot( 30 )).toBe("thirty");
        });
    });

    describe("some number have two words",function(){
        it("translate the twenties", function(){
            expect( polyglot( 21 )).toBe("twenty one");
        });

        it("works for all twenties with two words", function(){
            expect( polyglot( 29 )).toBe("twenty nine");
        });
    });

    describe("in the hundreds",function(){
        it("one hundred", function(){
            expect( polyglot( 100 )).toBe("one hundred");
        });

        it("two hundred", function(){
            expect( polyglot( 200 )).toBe("two hundred");
        });

        it("one hundred and one", function(){
            expect( polyglot( 101 )).toBe("one hundred and one");
        });

        it("one hundred and ninety nine", function(){
            expect( polyglot( 199 )).toBe("one hundred and ninety nine");
        });

        it("two hundred", function(){
            expect( polyglot( 200 )).toBe("two hundred");
        });

        it("nine hundred and ninety nine", function(){
            expect( polyglot( 999 )).toBe("nine hundred and ninety nine");
        });
    });

    describe("in the thousands",function(){
        it("one thousand", function(){
            expect( polyglot( 1000 )).toBe("one thousand");
        });

        it("two thousand", function(){
            expect( polyglot( 2000 )).toBe("two thousand");
        });

        it("one thousand and ninety nine", function(){
            expect( polyglot( 1099 )).toBe("one thousand and ninety nine");
        });

        it("nine thousand and ninety nine", function(){
            expect( polyglot( 9099 )).toBe("nine thousand and ninety nine");
        });
    });
});