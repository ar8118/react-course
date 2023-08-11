let users1 = ['amir', 'amin', 'abbas']
let users2 = ['sara', 'sahar', 'saba']

let allusers = [...users1, ...users2]

console.log(allusers);
console.log(...users1);
console.log(...users2);

function showUsers (...users) {  // rest operator -> item => array
  users.forEach(user => console.log(user))
}

showUsers(...users1) // spread syntax -> array => item