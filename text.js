// is duoto teksto gauti pirma raide

// const firstLetter = text => text[0];
// console.log(firstLetter('Labas'));
// console.log(firstLetter('Rytas'));

// skaiciu vidurkis sarase (a.k.a pazymiu vidurkis)

const list = [10,8,2,4,6];

const vidurkis = list => list.reduce ((t,n) => t + n, 0) / list.length;

console.log(vidurkis[10,8,2,4,6]);