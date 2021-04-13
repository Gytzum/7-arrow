// ... spread operator


const list = [10,2,8,4,6,6, 159,123,44,67];
const randomNumbers = [-10,10,-8,8,-4,4];

// const sortedList = [...list].sort((a,b)=> a - b); //  a>b ? -1 : 1, o b-a reversed
// console.log(list);
// console.log(sortedList);


const texts = ['as', 'labas','rytas', 'tu','suo', 'miau'];
const sortedTexts = [...texts].sort().reverse(); //abeceles tvarka sort(); reverse apvercia
console.log(texts);
console.log(sortedTexts);