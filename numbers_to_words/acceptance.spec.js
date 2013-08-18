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
    keywords[100] = 'one hundred';
    keywords[200] = 'two hundred';
    if (keywords[number] !== undefined) // is a keyword
    {
        return keywords[number];
    }
    if ( number < 99 )
    {
        nearest_ten = 10 * Math.floor( number / 10 );
        return keywords[nearest_ten] + " " + keywords[number - nearest_ten];
    }
    return keywords[0];
}

for (var i = 0; i < 201; i++){
    console.log(i.toString() + '=' + polyglot(i));
}