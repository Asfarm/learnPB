// Olekseenko Dmitrij dn170691odv dmitrij.olekseenko@privatbank.ua

// task1
var a = 1;
var b = 5;
var result = (a + b > 4) ? true : false;
console.log(result);

// task 2
var login = "Dima";
var message = (login == 'Pitter') ? 'Hi' :
(login == 'Owner') ? 'Hello' :
(login == '') ? 'unknown' : "something"
console.log(message);

// task3
var val = "b";
if (val === "a") {
    console.log("a");
} else if (val === "b" || val === "c" || val === "d" || val === "e") {
    console.log('others');
} else {
    console.log( 'unknown' );
}

// task4

var a = 1;
switch(a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3')
        break;
} 

// task5
var i = 0;
while (i < 3) {
    console.log(i);
    i++ 
}

// task6
var arr = [1,2,3,4];
var sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);

// task7

var arr = [1,2,3,4];
var sum = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum += arr[i];
    }
}
console.log(sum);

// task8

var arr = [1,2,3,4];
var sum = 0;
for (i = 0; i < arr.length; i++) {
    if ((arr[i] >= 3) && (arr[i] % 2 === 0)) {
        sum += arr[i]
    }
}
console.log(sum);

// task9

var arr = [1,2,3,4,5,6];
for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// task10
var arr = [6,5,4,3,2,1];
for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// task11
var arr = [2, 5, 9, 15, 0, 4];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

// task12
var arr = [1,2,3,-5,-2,1,-4];
var sum = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log(sum)

// task13

var arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(true);
        break;
    }
}

// task 14

var n = 1000;
var num = 0;
for (i = 1; n > 50; n = n / 2, i++) {
    num = i  
}
console.log(num, n)

