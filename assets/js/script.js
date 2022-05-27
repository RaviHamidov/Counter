let sum = 0;
function plus() {
    sum++;
    document.querySelector(".num span").innerHTML = sum;
}
function minus() {
    sum--;
    document.querySelector(".num span").innerHTML = sum;
}
function reset() {
    sum = 0;
    document.querySelector(".num span").innerHTML = sum;
} 