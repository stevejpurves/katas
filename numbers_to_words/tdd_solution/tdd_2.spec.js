

function numbers_to_words(number) {
    if (number === null || number < 1)
        return "";

    var keywords = [];
    keywords[1] = "one"
    keywords[10] = "ten";
    keywords[100] = " hundred";
    keywords[1000] = " thousand";

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

    it("for singular orders of magnitude", function(){
        expectNumberAsWords(1,"one");
        expectNumberAsWords(100, "one hundred");
        expectNumberAsWords(1000, "one thousand");
        expectNumberAsWords(10000, "ten thousand")
    });
});