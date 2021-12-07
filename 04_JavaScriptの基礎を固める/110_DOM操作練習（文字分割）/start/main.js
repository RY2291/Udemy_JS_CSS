// document.addEventListener("DOMContentLoaded", function(){
//   const el = document.querySelector(".animate-title");
//   const str = el.innerHTML.trim();
//   let concatStr = "";

//   for(let c of str) {
//     c = c.replace(" ", "&nbsp;")
//     concatStr += `<span class="char">${c}</span>`;
//   }
//   el.innerHTML = concatStr
//   console.log(concatStr);
// });


// ------------reduceで書き換え-------------------------------------------------

document.addEventListener("DOMContentLoaded", function(){
  const el = document.querySelector(".animate-title");
  const str = el.innerHTML.trim().split("");
  // console.log(str)


  el.innerHTML = str.reduce((acc, curr) => {
    // console.log(acc, curr)
    curr = curr.replace(" ", "&nbsp;")
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});

