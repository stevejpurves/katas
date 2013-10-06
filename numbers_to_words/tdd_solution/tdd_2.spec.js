

function numbers_to_words(number) {
    if (number === null || number < 1)
        return "";

    var keywords = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
    "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    keywords[100] = " hundred";
    keywords[1000] = " thousand";
    keywords[1000000] = " million";

    var orders = [1000000, 1000, 100, 10, 1];

    for (var i = 0; orders[i] > 10; i++)
        if (number >= orders[i])
            return numbers_to_words(number / orders[i]) + keywords[orders[i]];
    return keywords[number];
}


describe("converting numbers to words", function() {

    function expectNumberAsWords(number, words) {
        expect(numbers_to_words(number)).toEqual(words);
    }

    it("given bad input, returns empty", function() {
        expectNumberAsWords(null, "");
        expectNumberAsWords(0, "");
        expectNumberAsWords(-1, "");
    });

    describe("for singular orders of magnitude", function(){
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
    });

    describe("for numbers that contain a single word", function() {
        it("2", function(){
            expectNumberAsWords(2, "two");
        });
        it("19", function(){
            expectNumberAsWords(19, "nineteen");
        });
    });
});