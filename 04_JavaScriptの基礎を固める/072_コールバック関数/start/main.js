
// コールバック関数・・・引数に関数を渡す
function hello(callback) {
  console.log("hello " + callback());
}


function getName() {
  return "yasumi"
}

hello(getName); //実行部分に関数名を渡すとcallbackにgetName関数が渡り、callback関数を実行することで、返り値が出力される

hello(function(){
  return "ryota"
});




// コールバックの引数に関数を渡す
function hello(callback, firstName) {
  console.log("hello " + callback(firstName));
}

hello(function(name){
  return "ryota " + name;
}, "yasumi");


function doSomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b
}

doSomething(2, 2, multiply)