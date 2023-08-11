let users = [
  {id: 1, name: 'amir', age: 21},
  {id: 2, name: 'ahmad', age: 20},
  {id: 3, name: 'arash', age: 19},
  {id: 4, name: 'arian', age: 21},
  {id: 5, name: 'amin', age: 18},
]

let mainUser = users.find(user => user.name = 'amir')
console.log(mainUser);