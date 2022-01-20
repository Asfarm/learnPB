// // Olekseenko Dmitrij dn170691odv dmitrij.olekseenko@privatbank.ua

// // task 1

// function f(a) {
// if (typeof a === 'number') {
//     return  a * 2 * 2
// } else {
//     throw new Error('parameter type is not a Number')
// } 
// }
// console.log(f(2));
// console.log(f('Content'))

// task2

// function f() {
//     let sum = 0;
//     for (i = 0; i < arguments.length; i++){
//         if (typeof arguments[i] === 'number') {
//             sum += arguments[i]
//         } else {
//             throw new Error('parameter type is not a Number')
//         }        
//     }
//     return sum
// }

// console.log(f(1,2,3));
// console.log(f(1,1,1,1,1,1,1,1));
// console.log(f(1,2,'s',4));

// // task 3

// function f(a,b,c) {
//     for (key in arguments){
//         if (typeof arguments[key] === 'number') {
//             return (a - b) / c
//         } else {
//             throw new Error('parameter type is not a Number')
//         }
//     }
// }
// console.log(f(9,3,2));
// console.log(f('s',9,3));

// // task 4
// function f() {
//     let day;
//     for (key in arguments){
//          if (typeof arguments[key] === 'number') {
//             switch(arguments[key]){
//                 case 1:
//                     day = "Воскресенье";
//                     break;
//                 case 2: 
//                     day = "Понедельник";
//                     break;
//                 case 3:
//                     day = "Вторник";
//                     break;
//                 case 4:
//                     day = "Среда";
//                     break;
//                 case 5:
//                     day = "Четверг";
//                     break;
//                 case 6:
//                     day = "Пятница";
//                     break;
//                 case 7:
//                     day = "Суббота";
//                     break;
//                 default:
//                     throw new Error ('parameter should be in the range of 1 to 7')
//             } 
//          } else {
//             throw new Error('parameter type is not a Number')
//          }
//     }
//     return day;
// }
// console.log(f(1));
// console.log(f(2));
// console.log(f(8));
// console.log(f('1'));

// // task 5
// Если Вашу задачу правильно понял.

// let arr = [1, 2, -4, 3, -9, -1, 7];
// let newArr = []
// for (i = 0; i < arr.length; i++) {
//         newArr.push(isPositive(arr[i]))
    
// }
// function isPositive() {
//     for (key in arguments) {
//         if (typeof arguments[key] === 'number' && arguments[key] > 0){
//             return true
//         } else if (arguments[key] < 0) {
//             return false
//         } else {
//             throw new Error('parameter type is not a Number')
//         }
        
//     }
// }
// console.log(isPositive(-3));
// console.log(isPositive(3));
// console.log(newArr);
// console.log(isPositive('s'));

// // task 6 

// function isEven() {     
//         for (key in arguments) {
//             if (typeof arguments[key] === 'number') {
//                 if (Number.isInteger(arguments[key]) && arguments[key] % 2 === 0 ){
//                     return true
//                 } else {
//                     return false
//                 }
//             } else {
//                 throw new Error('parameter type is not a Number')
//             }
//     }
// }

// console.log(isEven(3));
// console.log(isEven(4));
// console.log(isEven('Content'));

// // task 7

// function getDivisors(a) {
//     let arr = [];
//     if (typeof a === 'number' && a > 0) {
//         for (i = 1; i <= a; i++) {
//             if (a % i === 0) {
//                 arr.push(i);
//             }
//         }
//     } else if (a <= 0) {
//         throw new Error(`Error: parameter can't be a 0`)
//     } else {
//         throw new Error('parameter type is not a Number')
//     }
//     return arr
// }
// console.log(getDivisors(12));
// console.log(getDivisors('Content'));
// console.log(getDivisors(0));

// // task 8

// let newArr = [1, 2, 3];
// let test = newArr
// function f(arr) {
//     if (Array.isArray(arr) && arr.length > 0) {
//         if (arr.length === 0) {
//             return
//         } else {
//             console.log(arr.toString())
//             return f(arr.splice(1,))
            
//         }
//     } else if (arr.length < 0) {
//         throw new Error(`parameter can't be an empty`)
//     } else {
//         throw new Error(`parameter type should be an array`)
//     }

        
// }

// f(newArr);


