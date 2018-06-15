const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');




describe('fizzBuzzer', function(){
   //it should be a number
    it('it return fizzbuzz for multiples of 15', function(){
      let answers = [15,30,45]
        answers.forEach(function(input){
          expect(fizzBuzzer(input)).to.equal("fizz-buzz")
        });
    });
    
    it('it should return buzz', function(){
        let answers = [5, 10, 20];  answers.forEach(function(input){
          expect(fizzBuzzer(input)).to.equal("buzz")
        });
    });
     it('it should return fizz', function(){
        let answers = [3, 6, 9];  answers.forEach(function(input){
          expect(fizzBuzzer(input)).to.equal("fizz")
        });
    }); 
})