/*     --------------------------------------TASK------------------------------------
*     By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that
*     the 6th prime is 13.
*
*     What is the 10 001st prime number?
*/

//Initialisation of primes array
var primes = ['2','3','5'];
//Number which needs to be tested
var currentNumber = 6;

//Tests whether the number is prime
function primeTest(numberToTest){
  //tests all numbers between 2 and n-1 to see if they are divisible
  var numberCount = numberToTest-2;
  
  for (var i=2; i<numberToTest;i++){
    if(numberCount > 1){
    if (numberToTest%i ==0){
      // 'numberToTest' is divisible by 'i' ,therefore not a prime.
      break;
    } else {
      numberCount--;
    }
  } else {
      //'numberToTest' is prime!
      primes.push(numberToTest);
    }  
  }
}

//Run test against a number, untill 'Primes' array is 10,001 items long
function get10001Prime(){
  while(primes.length < 10001){
    primeTest(currentNumber);
    currentNumber++;
  }
}

//Run
get10001Prime();
//Prints answer
console.log(primes[primes.length-1]);


/*    -----------------------------------ANSWER------------------------------------
*     The Answer I got for this question was '104743' which was proved to be correct
*
*     See: https://projecteuler.net/problem=7
*/
