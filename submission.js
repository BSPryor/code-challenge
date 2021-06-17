const findSum = function(array) {
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   return array.reduce(reducer);
   };

const findFrequency = function(array) {
  let frequency = {};  
  let max = 0;  
  let most;
  let min = 1000;
  let least;   
  for(let v in array) {
      frequency[array[v]]=(frequency[array[v]] || 0)+1; 
      if(frequency[array[v]] > max) { 
        max = frequency[array[v]];
        most = array[v];
      }
  };
  for(let word in frequency){
    if (frequency[word] < min) {
      min = frequency[word]
      least = word;
    }
  }
 return `most: ${most}, least: ${least}`;
};

const isPalindrome = function(str) {
  if(str.toLowerCase() === str.toLowerCase().split('').reverse().join('')){
    return true;
  } else{
    return false;
  }
};

const largestPair = function(array) {
  let product = [];
  for (let i = 0; i<array.length -1;  i++){
    product.push(array[i]*array[i+1]);
  };
  const largestProduct = Math.max(...product);
  return largestProduct;
 };

const removeParenth = function(str) {
  return str.replace(/\(([^\d]*)\)/,'');
};

const scoreScrabble = function(str) {
  const  score = [];
  for (let k = 0; k < str.length; k++ )  {
    switch (str[k]) {
      case 'a' :
      case 'e' :
      case 'i' :
      case 'o' :
      case 'u' :
      case 'l' :
      case 'n' :
      case 'r' :
      case 's' :
      case 't' :
        score.push(1);
      break;
      case 'd' :
      case 'g' :
        score.push(2);
      break;
      case 'b' :
      case 'c' :
      case 'm' :
      case 'p' :
        score.push(3);
      break;
      case 'f' :
      case 'h' :
      case 'v' :
      case 'w' :
      case 'y' :
        score.push(4);
      break;
      case 'k' :
        score.push(5);
      break;      
      case 'j' :
      case 'x' :
        score.push(8);
      break;
      case 'q' :
      case 'z' :
        score.push(10);
      break; 
      default :
        score.push(0);
    }
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
   return score.reduce(reducer);
};
