// iprastine funkcokjps delaracija
function suma(a, b) {
        return a+b;
}
// console.log(suma(8,5));


//anonimines funkcijos (logikos) priskirimas kintamajam.
const minus = function (a, b) {
    return a - b;
}
// console.log(minus(8,5));


// arrow function (rodikline funkcija).
const multi = (a, b) => {
    return a * b;
}
// console.log(multi(8,5));

// arrow function, kai logikos tera viena operacija. (viena eilute kodo)
// galima nerasyti {}
const divide = (a, b) =>  a / b;
// console.log(divide(8,5));

// kai gaunamas vienas parametras.
//galima nerasyti skliaustu parametru vietoje
const kvadratu = a =>  a * a;
// console.log(kvadratu(8));



