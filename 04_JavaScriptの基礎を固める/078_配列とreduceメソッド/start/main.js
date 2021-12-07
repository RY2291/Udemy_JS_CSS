const arry = [1,2,3,4,5];


// reducaメソッド・・・・配列データの各要素を累積して1つの値にする

arry.reduce(function(accu, curr){
  console.log(accu, curr);
  return accu + curr;
}, 10);


const str = "animation"
const srtArry = str.split("");

console.log(srtArry)

const resulut = srtArry.reduce((accu, curr) => {
  return accu + "<" + curr + ">";
}, "")

console.log(resulut);