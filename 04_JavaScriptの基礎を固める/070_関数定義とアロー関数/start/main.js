

// 関数定義
function hello(name) {
  console.log("hello" + " " + name);
}
hello("yasumi");

const hey = function(name = "tom") {
  console.log("hey " + name)
}
hey();



// アロー関数 
  // 実行部分が１行の場合{}が削除が可能 デフォルト値がない場合は関数名の（）も省略できる
  const bye = name  => console.log("bye " + name);

  bye();

  // 関数の引数が複数の場合
  const hi = (name, age) => {
    console.log("hi " + name + age);
    console.log("hi " + name + age);
  }
  hi("tom", 13);

const arry = [1,2,3,4,5,6];

arry.forEach(vale => console.log(vale))