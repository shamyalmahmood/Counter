const dec = document.getElementById("decrease");
const re = document.getElementById("reset");
const inc = document.getElementById("increase");
const cntr = document.getElementById("counter");

let count = 0;

dec.onclick = function () {
    count--;
    cntr.textContent = count;
}

re.onclick = function () {
    count = 0;
    cntr.textContent = count;
}

inc.onclick = function () {
    count++;
    cntr.textContent = count;
}