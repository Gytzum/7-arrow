const list = [10,2,8,4];

// palikti naujame sarase tik tas reiksmes kurios didesnes uz 5
// rez [1,8]

const didesniUz5= list.filter(n => n >5);
console.log(didesniUz5);

// grazinti tik teigiamus skaicius

const randomNumbers = [-10,10,-8,8,-4,4];
const onlyPossitives = randomNumbers.filter(n => n >= 0);
console.log(randomNumbers);
console.log(onlyPossitives);
