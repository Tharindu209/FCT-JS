let a = document.getElementById("a");
let b = document.getElementById("b");
let ans = document.getElementById("ans");

document.getElementById("calculate").addEventListener("click", function(){
    ans.value = Math.sqrt(Math.pow(parseInt(a.value), 2) + Math.pow(parseInt(b.value), 2));
});
