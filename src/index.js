module.exports = function zeros(expression) {
  
  
  let arraySingleFactorials = [];
  let arrDoubleFactorials = [];
  let countFives = 0;
  let countFactorialContainEvenElement = 0;

  let arrayFactorials = expression.split('*');
  for (let i = 0; i < arrayFactorials.length; i++){
    (/\!\!/.test(arrayFactorials[i])) ? arrDoubleFactorials.push(arrayFactorials[i].replace('!!', '')) : arraySingleFactorials.push(arrayFactorials[i].replace('!', ''));
  }
 
for(let i = 0; i < arraySingleFactorials.length; i++) {
  for(let j = 5; arraySingleFactorials[i]/j >= 1; j *= 5) {
    countFives += Math.floor(arraySingleFactorials[i]/j);
    countFactorialContainEvenElement += 1;
 }
}
for(let i = 0; i < arrDoubleFactorials.length; i++) {
  if(arrDoubleFactorials.includes) {
    if(arrDoubleFactorials[i] % 2 == 0) {
      countFives += Math.floor(arrDoubleFactorials[i]/10);
      countFives += Math.floor(arrDoubleFactorials[i]/50);
      countFactorialContainEvenElement += 1;
    } else if (arrDoubleFactorials[i] % 2 == 1) {
      countFives += (Math.round(arrDoubleFactorials[i]/10));
      countFives += (Math.round(arrDoubleFactorials[i]/50))
    }
  }
}

  return (countFactorialContainEvenElement == 0) ? 0 : countFives;
 }
  

