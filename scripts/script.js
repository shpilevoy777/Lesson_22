// .........................task_#1.............................................
// let users = ['Mike', 'Nikola', 'Tom'];
// console.log(users[1]);
// users[1] = 'Alex';
// console.log(users[1]);
// users.splice(1, 2);
// console.log(users);
// console.log(users.length);

// .........................task_#2.............................................
// let a = [5, 3, -4, 25, 32, -16, 6];
// let b = [21, -30, 9, 5, 12, -19, 5, 25];

// function diff (a, b){
//     if (a.length > b.length){
//         return ('a > b')
//     } else if (a.length < b.length){
//         return ('a < b')
//     } else { return ('a = b')}
// }
// console.log(diff (a, b))


// .........................task_#3.............................................
// let phrase = 'I am learning JavaScript right now';
// console.log(phrase.split(' ')); 
// console.log(phrase); 
// phrase = phrase.split(' ');
// console.log(phrase);

// .........................task_#4.............................................
// let a = [5, 3, 8, 5, 3, 2, 1, 2];
// let b = [];
// a.forEach((elem) =>{
//     b.push(elem)
//     b = a.filter((item, index) => {
//         return index === a.indexOf(item);
//     });
// })
// console.log(b);


// .........................task_#5.............................................
const users = [
  {id: 1, age: 17},
  {id: 2, age: 18},
  {id: 3, age: 19},
  {id: 4, age: 21},
  {id: 5, age: 17},
  {id: 6, age: 20},
  {id: 7, age: 25}
];
function findUsers(users) {
  let ids = [];
  users.forEach((user) => {
    if (user.age > 18 && user.age < 21) {
      ids.push(user.id);
    }
  });
  return ids;
}
let result = findUsers(users);
console.log(result);