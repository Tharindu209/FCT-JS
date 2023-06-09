let b = document.getElementById("b");
let h = document.getElementById("h");
let area = document.getElementById("area");

document.getElementById("calculate").addEventListener("click", function(){
    area.value = (parseInt(b.value) * parseInt(h.value))/2;
});

