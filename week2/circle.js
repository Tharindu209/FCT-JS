const pi = 22/7;
let r = document.getElementById("radius");
let C = document.getElementById("circumference");
let A = document.getElementById("area");

document.getElementById("calculate").addEventListener("click", function(){
    C.value = 2 * parseInt(r.value) * pi;
    A.value = pi * parseInt(r.value) * parseInt(r.value);
});

