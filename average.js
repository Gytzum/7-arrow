/*
funkcija kuri suskaiciuoja tteigiamu skaiciu vidurki
*/

const studentMarkAverage = (name,...marks) => {
    return marks.reduce((t,n) => t+n,0)/marks.length;
}

console.log(studentMarkAverage('Peter', 1,2,3), '---->', 2);

const didziausias = Math.max(1,5,7,14,-8,0)
console.log(didziausias);