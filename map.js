const list = [10,2,8,4];

//gauti sarasa, kur kiekvienas skaicius yra padidintas nurodyta konstanta

const padydinti = (arr, multiplier) => {
    const newArr = [];
    for(let i = 0; i< arr.length; i++) {
        newArr.push(arr[i]*multiplier);
    }
    return newArr
}


console.log(padydinti (list, 2));   // [20, 4, 16, 8]

/*
--------------------------------------------------
*/

const mapDvygubas= list.map(n => n*2);
const mapTrygubas = list.map(n => n*3);
console.log(list);
console.log(mapDvygubas);
console.log(mapTrygubas);