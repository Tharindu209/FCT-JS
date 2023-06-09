let bdate = document.getElementById("bdate").value;
let age = document.getElementById("age").value;

document.getElementById("calculate").addEventListener("click", function(){
    let years = (new Date(new Date() - new Date(bdate)).getFullYear() - 1970);
    age.value = parseInt(years);
});

