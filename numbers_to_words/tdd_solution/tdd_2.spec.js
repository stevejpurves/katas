

function numbers_to_words(number) {
    if (number === null || number < 1)
        return "";

    var keywords = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
    "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    keywords[100] = " hundred";
    keywords[1000] = " thousand";
    keywords[1000000] = " million";

    var orders = [1000000, 1000, 100, 10, 1];

    if (number < 20 )
        return keywords[number];

    for (var i = 0; orders[i] > 10; i++) {
        var words = "";
        if (number >= orders[i]) {
            var number_of_order = Math.floor(number / orders[i]);
            words += numbers_to_words(number_of_order) + keywords[orders[i]];
            var remainder = (number - number_of_order*orders[i]);
            if ( remainder > 0)
                words += " and " + numbers_to_words(remainder);
            return words;
        }
    }
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

    describe("numbers containing the word 'and'", function() {
        it("101", function(){
            expectNumberAsWords(101, "one hundred and one");
        });

        it("201", function(){
            expectNumberAsWords(201, "two hundred and one");
        });
    });
});