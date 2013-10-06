

function numbers_to_words(number) {
    if (number === null || number < 1)
        return "";
    if (number >= 100)
        return numbers_to_words(number / 100) + " hundred";
    return "one";
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

    it("1", function(){
        expectNumberAsWords(1,"one");
    });

    it("100", function(){
        expectNumberAsWords(100, "one hundred");
    });
});