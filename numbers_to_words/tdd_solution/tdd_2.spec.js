function addSeparators(number, quotient, order) {
    var remainder = (number - quotient * order);
    if (remainder > 0)
        return ((order === 100)
            || (order === 1000 && remainder < 100)
            || (order === 1000000 && remainder < 100)) ? " and " : " ";
    return "";
}

function convertRemainder(number, quotient, order) {
    var remainder = (number - quotient * order);
    return numbers_to_words(remainder);
}

function writeFirstPart(quotient, order, keywords) {
    if (order === 10)
        return keywords[order * quotient];
    return numbers_to_words(quotient) + keywords[order];
}

function writeWordsFor(number, order, keywords) {
    var quotient = Math.floor(number / order);
    return writeFirstPart(quotient, order, keywords)
        + addSeparators(number, quotient, order)
        + convertRemainder(number, quotient, order);
}

function numbers_to_words(number) {
    if (number === null || number < 1) return "";

    var keywords = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
    "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    keywords[20] = "twenty";
    keywords[30] = "thirty";
    keywords[40] = "forty";
    keywords[50] = "fifty";
    keywords[60] = "sixty";
    keywords[70] = "seventy";
    keywords[80] = "eighty";
    keywords[90] = "ninety";
    keywords[100] = " hundred";
    keywords[1000] = " thousand";
    keywords[1000000] = " million";
    var orders = [1000000, 1000, 100, 10, 1];

    if (number < 20) return keywords[number];

    for (var i = 0; orders[i] > 1; i++)
        if (number >= orders[i])
            return writeWordsFor(number, orders[i], keywords);
}


describe("converting numbers to words - ", function() {
    function expectNumberAsWords(number, words) {
        expect(numbers_to_words(number)).toEqual(words);
    }

    describe("tests created during tdd process, in order", function() {
        it("given bad input, returns empty", function() {
            expectNumberAsWords(null, "");
            expectNumberAsWords(0, "");
            expectNumberAsWords(-1, "");
        });

        it("1", function(){
            expectNumberAsWords(1,"one");
        });

        it("100", function(){
            expectNumberAsWords(100, "one hundred");
        });

        it("1,000", function(){
            expectNumberAsWords(1000, "one thousand");
        });

        it("10,000", function(){
            expectNumberAsWords(10000, "ten thousand");
        });

        it("100,000", function(){
            expectNumberAsWords(100000, "one hundred thousand");
        });

        it("1,000,000", function(){
            expectNumberAsWords(1000000, "one million");
        });

        it("10,000,000", function(){
            expectNumberAsWords(10000000, "ten million");
        });

        it("100,000,000", function(){
            expectNumberAsWords(100000000, "one hundred million");
        });

        it("2", function(){
            expectNumberAsWords(2, "two");
        });
        it("19", function(){
            expectNumberAsWords(19, "nineteen");
        });

        it("101", function(){
            expectNumberAsWords(101, "one hundred and one");
        });

        it("201", function(){
            expectNumberAsWords(201, "two hundred and one");
        });

        it("1001", function(){
            expectNumberAsWords(1001, "one thousand and one");
        });

        it("99", function(){
            expectNumberAsWords(99, "ninety nine");
        });

        it("9999", function(){
            expectNumberAsWords(9999, "nine thousand nine hundred and ninety nine");
        });

        it("999999", function(){
            expectNumberAsWords(999999, "nine hundred and ninety nine thousand nine hundred and ninety nine");
        });

        it("other numbers that need new keywords, 20 - 90", function(){
            expectNumberAsWords(20,"twenty");
            expectNumberAsWords(30,"thirty");
            expectNumberAsWords(40,"forty");
            expectNumberAsWords(50,"fifty");
            expectNumberAsWords(60,"sixty");
            expectNumberAsWords(70,"seventy");
            expectNumberAsWords(80,"eighty");
            expectNumberAsWords(90,"ninety");
        });

        it("1000001", function(){
            expectNumberAsWords(1000001, "one million and one");
        });
    });

    describe("additional acceptance tests from AOS coding challenge, just the interesting ones", function(){
        it("98", function(){
            expectNumberAsWords(98,"ninety eight");
        });

        it("199", function(){
            expectNumberAsWords(199,"one hundred and ninety nine");
        });

        it("1099", function(){
            expectNumberAsWords(1099,"one thousand and ninety nine");
        });

        it("100001", function(){
            expectNumberAsWords(100001, "one hundred thousand and one");
        });

        it("1001001", function(){
            expectNumberAsWords(1001001, "one million one thousand and one")
        });

        it("1010001", function(){
            expectNumberAsWords(1010001, "one million ten thousand and one")
        });

        it("101000001", function(){
            expectNumberAsWords(101000001, "one hundred and one million and one");
        });

        it("999999999", function(){
            expectNumberAsWords(999999999, "nine hundred and ninety nine million nine hundred and ninety nine thousand nine hundred and ninety nine");
        });

    });

});