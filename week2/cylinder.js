const pi = 22/7;
let r = document.getElementById("radius");
let h = document.getElementById("height");
let area = document.getElementById("area");
let volume = document.getElementById("volumn");

document.getElementById("calculate").addEventListener("click", function(){
    area.value = 2 * pi * parseInt(r.value) * parseInt(h.value) + 2 * pi * Math.pow(parseInt(r.value), 2);
    volume.value = pi * Math.pow(parseInt(r.value), 2) * parseInt(h.value);
});

