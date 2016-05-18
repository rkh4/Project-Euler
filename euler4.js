/*     --------------------------------------TASK------------------------------------
*      A palindromic number reads the same both ways. The largest palindrome made from the 
*      product of two 2-digit numbers is 9009 = 91 × 99.
*      Find the largest palindrome made from the product of two 3-digit numbers.
*/

function euler4(){
	//Initialisation
  var product1 = 999;
  var product2 = 999;
  var result;
  var largestResult = 0;
  //Loop through products
  for (var i = 1; i <= product1; i++){
  	for (var j = 1; j <= product2; j++){
    	result = i * j;
      reverseResult = String(result).split("").reverse().join("");
      if (String(result) == reverseResult){
      	console.log(i +" * "+ j +" = "+ result);
      	console.log("reverse = " + reverseResult);
        console.log("Palindrome!");
        if (result > largestResult){
        	largestResult = result;
       	}
      }
    }
  }
  console.log("Largest result for any two 3 digit numbers, is: " + largestResult);
}

euler4();
