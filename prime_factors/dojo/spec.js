chai = require('chai');
should = chai.should();
//chai.Assertion.includeStack = true;

function isDivisibleBy(n, divisor) {
     return n % divisor == 0 && n > divisor;
}

function primes (n){
    var i = 2;
    while (i < n) {
        if (isDivisibleBy(n, i))
            return [i].concat(primes(n/i));
        i++;
    }
    return [n];
}

function primeFactorsAre(expected){
  return {for: function(n){
      var actual = primes(n);
      if (actual.length !== expected.length) {
          console.log("different lengths", actual, expected);
          actual.length.should.equal(expected.length);
      }
      for (var i = 0; i < actual.length; i++){
        if (actual[i] !== expected[i]) {
            console.log(actual, expected);
            actual[i].should.equal(expected[i]);
        }
      }
     }
   }
  }



describe("prime factors kata", function(){
  it("knows that 2 is prime", function(){
     primeFactorsAre([2]).for(2);
  });
  it("knows that 3 is prime", function(){
     primeFactorsAre([3]).for(3);
  });
  it("knows the composition of the number 4", function(){
      primeFactorsAre([2,2]).for(4);
  });
  it("knows that 5 is prime ", function(){
      primeFactorsAre([5]).for(5);
  });
  it("knows the composition of number 6 ", function(){
      primeFactorsAre([2,3]).for(6);
  });

    it("knows the composition of the number 9", function(){
        primeFactorsAre([3,3]).for(9);
    });

    it("knows the composition of the number 27", function(){
        primeFactorsAre([3,3,3]).for(27);
    });

    it("knows the composition of the number 100", function(){
        primeFactorsAre([2,2,5,5]).for(100);
    });
});

