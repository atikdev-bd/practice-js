function getLowestNumber(numbers){
let lowest = numbers[0];
for( let i =0; i< numbers.length; i++){
  const index =  i;
  const element = numbers[index];
  if(element < lowest){
  lowest = element;
}

}
return lowest ;
}
const numbers =[221,332,123,442,231,124,99,88,];
const lowest = getLowestNumber(numbers);
console.log(lowest)