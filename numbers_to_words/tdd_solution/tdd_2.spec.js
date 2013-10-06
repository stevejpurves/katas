

function numbers_to_words(number) {
    if (number === null || number < 1)
        return "";

    var keywords = [];
    keywords[1] = "one"
    keywords[10] = "ten";
    keywords[100] = " hundred";
    keywords[1000] = " thousand";
    keywords[1000000] = " million";

    if (number >= 1000000)
        return numbers_to_words(number / 1000000) + keywords[1000000];

    for (var order = 1000; order > 10; order /= 10)
        if (number >= order)
            return numbers_to_words(number / order) + keywords[order];
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

        it("1000", function(){
            expectNumberAsWords(1000, "one thousand");
        });

        it("10000", function(){
            expectNumberAsWords(10000, "ten thousand");
        });

        it("100000", function(){
            expectNumberAsWords(100000, "one hundred thousand");
        });

        it("1000000", function(){
            expectNumberAsWords(1000000, "one million");
        });
    });
});