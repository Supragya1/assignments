/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  	str= str.toLowerCase();
    let temp ="";
    for(let i=0;i<str.length;i++){
      if((str[i]>='a'&& str[i]<='z')||(str[i]>=0&& str[i]<=9)){
        temp += str[i];
      }
      str=temp;
      // method 1 using two pointers 0.39ms
      for(let i=0;i<str.length/2;i++){
            if(str[i]!==str[str.length-1-i]){
                return false;
              }
            }
            return true;
        }
        // method 2 using reverse method 0.43ms
        // temp="";
        // for(let i=0;i<str.length;i++){
        //   let ld = str.length-1-i;  
        //   temp += str[ld];
        // }
        // return temp === str;


        // method 3 using regular expression for removing non-alphanumeric characters 0.473ms
  // str = str.toLowerCase();
  // str = str.split(' ').join('');
  // str = str.replace(/[^a-zA-Z0-9]/g,'');
  // for(let i=0;i<str.length/2;i++){
  //   if(str[i]!==str[str.length-1-i]){
  //     return false;
  //   }
  // }
  // return true;
}

module.exports = isPalindrome;
