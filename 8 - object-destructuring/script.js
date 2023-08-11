let user = {
  id: 1,
  name: 'Amir',
  family: 'Mohammadi',
  age: 23
}

let {name: firstName, family: lastName} = user

console.log(firstName, lastName);