let array = [12, 'amir', true, 'reza']

let [item1, item2, , item3] = array

console.log(item1, item2, item3);

let [i = 4, j = 5] = [6, 7]
console.log(i, j);