module.exports = function zeros(expression) {
  
  
  let factOne = [];
  let factTwo = [];
  let fives = 0;
  let count = 0;

  let sort = expression.split('*');
  for (let i = 0; i < sort.length; i++){
    (/\!\!/.test(sort[i])) ? factTwo.push(sort[i].replace('!!', '')) : factOne.push(sort[i].replace('!', ''));
  }
 
for(let i = 0; i < factOne.length; i++) {
  for(let j = 5; factOne[i]/j >= 1; j *= 5) {
    fives += Math.floor(factOne[i]/j);
    count += 1;
 }
}
for(let i = 0; i < factTwo.length; i++) {
  if(factTwo.includes)
  if(factTwo[i] % 2 == 0) {
    fives += Math.floor(factTwo[i]/10);
    fives += Math.floor(factTwo[i]/50);
    count += 1;
  } else if (factTwo[i] % 2 == 1) {
    fives += (Math.round(factTwo[i]/10));
    fives += (Math.round(factTwo[i]/50))
  }
}

  return (count == 0) ? 0 : fives;
 }
  

