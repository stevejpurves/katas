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
        var n_ten = Math.floor(number / 10);
        if (n_ten > 0) {
            return keywords[10*n_ten] + ' ' + keywords[number - 10*n_ten];
        }
        else {
            return keywords[number - 10*n_ten];
        }
    }

    var words = "";

    if (number >=100) {
        var first_digit = 0;
        var factor = 0;
        if (number >= 1000) {
            factor = 1000;
            first_digit =  Math.floor(number/factor);
        }
        else {
            factor = 100;
            first_digit =  Math.floor(number/factor);
        }

        words = renderDoubleDigits(first_digit) + ' ' + keywords[factor];
        if ( number%factor > 0) { words = words + " and " + renderDoubleDigits(number - first_digit*factor); }
    }
    else if (number >= 10) {
        if (keywords[number] !== undefined) { words = keywords[number] }
        else { words = renderDoubleDigits(number); }
    }
    else
    {
        words = keywords[number];
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