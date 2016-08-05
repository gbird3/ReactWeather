var names = ['Greg', 'Becca', 'Bob', 'John'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('Arrow:', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Greg'));

// var person = {
//   name: 'Greg',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// Challenge AREA!!!!!!!!!!!!!!!!!
function add (a, b) {
  return a + b;
}

var addExpression = (a, b) => a + b;

var addStatement = (a, b) => {
  return a + b
}

console.log(add(1,3));
console.log(add(9,0));
console.log(addExpression(1,2));
console.log(addStatement(1,2));
