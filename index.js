// 🌞🌞🌞🌞🌞Модуль 1.🌞🌞🌞🌞🌞
// 🌻 Модуль 1 (Урок 1). Змінні та типи.

// const value = prompt('Java Script');
  // if(value === 'js') {
  //   alert('YES');
  // } else {
  //   alert('NO')
  // }
  // console.log(value);

// const userInput = prompt('Введи число');
// const parsedInput = Number(userInput);
// if (isNaN(parsedInput)) {
//   console.log('це не число');
// } else if (parsedInput === 0) {
//   console.log('це нуль');
// } else if (parsedInput > 0) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

  // const userInput = Number(prompt('Введи число'));
  // console.log(userInput % 2 ? 'не парне' : 'парне');

  // if(!0) { // за допомогою ! робимо true в if
  //   console.log('00000')
  // } else {
  //   console.log('0')
  // }

// 🌻Модуль 1 (Урок 2). Розгалуження. Цикли.

  // const a = 90;
  // const b = 130;
  // if(a > 100 && b > 100) {
  //   console.log(a > b ? a : b);
  // }else {
  //   console.log(b + 512);
  // }

  // let link = 'https://my-site.com/about';
  // if(!(link[link.length - 1] === '/')) {
  //   link += '/';
  // };
  // console.log(link);
  
  let link = 'https://my-site.com/about';
  if(!link.endsWith('/')) {
    link += '/'
  };
  console.log(link);

  // let link = 'https://my-site.com/about';
  // if(!link.endsWith('/') && link.includes('my-site')) {
  //     link += '/'
  // } 
  // console.log(link);

  // let link = 'https://my-site.com/about';
  // console.log(!link.endsWith('/') && link.includes('my-site') ? link += '/' : link);

  // const daysDeadline = 5;
  // switch(daysDeadline) {
  //   case 0: console.log('сьогодні');
  //   break;
  //   case 1: console.log('завтра');
  //   break;
  //   case 2: console.log('після завтра');
  //   break;
  //   default: console.log('дата у майбутньому');
  // };

  // function caseInSwitch(val) {
  //   let answer = "";
  //   switch(val) {
  //     case 1:
  //       answer = "alpha";
  //       break;
  //     case 2:
  //       answer = "beta";
  //       break;
  //     case 3:
  //       answer = "gamma";
  //       break;
  //     case 4:
  //       answer = "delta";
  //       break;
  //   }
  //   return answer;
  // };
  // console.log(caseInSwitch(1));

// let count = 0;
// function cc(card) {
//   switch(card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6: 
//       count += 1;
//       break;
//     case 7:
//     case 8:
//     case 9: 
//       count;
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count -= 1;
//       break;
//   }
//   return count > 0 ? `${count} Bet`: `${count} Hold`;
// };
// console.log(cc(2)); console.log(cc(3)); console.log(cc(7)); 
// console.log(cc('K')); console.log(cc('A'));

  // const min = 50;
  // const max = 100;
  // for(let i = min; i <= max && i >= min; i +=1) {
  //   if(!(i % 5)) {
  //     console.log(i);
  //   }
  // }
  
// let a = 15;
// if (true) {
//   let a = 1;
//     a = 25;
// }
// console.log(a);

// const myArray = [1, 'Hello', true, [1, 2, 3]];
// for (let i = 0; i < myArray.length; i += 1) {
//   const item = myArray[i];
//   if (Array.isArray(item)) {
//     for (let j = 0; j < item.length; j += 1) {
//       console.log(item[j])
//     }
//     continue;
//   }
//   console.log(myArray[i])
// };
// console.log(Array.isArray(myArray));
// myArray.push();

// const fruits = ['🍅', '🍎', '🍓', '🍐', '🍌'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i+1} - ${fruits[i]}`);
// }

// const fruits = ['🍅', '🍎', '🍓', '🍐', '🍌'];
// for (let i = 0, n = 1; i < fruits.length; i += 1, n +=1 ) {
//   console.log(`${n} - ${fruits[i]}`);
// }

// const names = 'Bob,Max,Dilan,Artem';
// const phones = '11111,22222,33333,44444';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');
// // console.log(namesArr);
// for (let i = 0; i < namesArr.length, i < phonesArr.length; i += 1){
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`)
// }

// const string = 'Welcome to the future';
// const arr = string.split(' ');
// arr.pop();
// arr.shift();
// const result = arr.join(' ');
// const result1 = string.split(' ').slice(1, -1).join(' ');
// console.log(result); // to the
// console.log(result1); // to the

// ---------------------------------------------------
// const langs = ['php', 'js', 'ruby', 'c++', 'haskel'];
// // for (let i = 1; i < langs.length; i++) {
// //   if (langs[0] > langs[i]) {
// //     const result = langs.splice(i, 1)[0];
// //     langs.unshift(result);
// //   }
// // }
// // console.log(langs); //  ['c++', 'haskel', 'js', 'php', 'ruby']
// // Реалізація сортування бульбашкою
// for (let i = 0; i < langs.length; i++) {
//   for (let j = 0; j < langs.length - 1 - i; j++) {
//     if (langs[j] > langs[j + 1]) {
//       // Міняємо місцями елементи, якщо вони не в порядку
//       const temp = langs[j];
//       langs[j] = langs[j + 1];
//       langs[j + 1] = temp;
//     }
//   }
// }
// console.log(langs); //  ['c++', 'haskel', 'js', 'php', 'ruby']
// console.log(langs.sort()); //  ['c++', 'haskel', 'js', 'php', 'ruby']

// const numbers = [2, 15, 4, 57, 1, 63];
// let min = numbers[0];
// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
// }
// console.log(min); // 1


// let value = 1;
// let test = value;
// value += 10;
// console.log(value);
// console.log(test);

// const myArray = [];
// let i = 5;
//   while (i >= 0) {
//     myArray.push(i);
//     i -= 1;
//   }
// console.log(myArray); // [5, 4, 3, 2, 1, 0]

// const myArray = [];
// for(let i = 1; i <= 5; i +=1) {
// myArray.push(i);
// }
// console.log(myArray); // [1, 2, 3, 4, 5]

// const myArray = [];
// for(let i = 1; i <= 9; i += 2) {
// myArray.push(i);
// }
// console.log(myArray); // [1, 3, 5, 7, 9]

// const myArray = [];
// for(let i = 9; i > 0; i -= 2) {
// myArray.push(i);
// }
// console.log(myArray); // [9, 7, 5, 3, 1]

// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for(let i = 0; i < myArr.length; i += 1) {
// console.log(total += myArr[i]); // 20
// }

// function multiplyAll(arr) {
//   let product = 1;
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   return product;
// }
// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); // 5040

// const myArray = [];
// let i = 10;
// do {
// myArray.push(i);
//   i++;
// }
// while (i < 10);
// console.log(myArray); // [10]

// function checkSign(num) {
//   return num > 0 ? "positive" : (num < 0) ? "negative" : "zero";
// }
// console.log(checkSign(10));


// 🌞🌞🌞🌞🌞🌞Модуль 2.🌞🌞🌞🌞🌞  
// 🌻Модуль 2 (Урок 1). Масиви.

  // const array = [1, 'Hello', null, true, [1, 2, 3]];
  // for(let i = 0; i < array.length; i += 1) {
  //   if(Array.isArray(array[i])) {
  //     for(let j = 0; j < array[i].length; j +=1) {
  //       console.log(array[i][j])
  //     }
  //     continue;
  //   }
  //   console.log(array[i]);
  // }

  // const array = [1, 'Hello', null, true, [1, 2, 3]];
  // for(let i = 0; i < array.length; i += 1) {
  //   const item = array[i];
  //   if(Array.isArray(item)) {
  //     for(let j = 0; j < item.length; j +=1) {
  //       console.log(item[j])
  //     }
  //     continue;
  //   }
  //   console.log(array[i]);
  // }

  // const array = [1, 'Hello', null, true, [1, 2, 3]];
  // for(const item of array) {
  //   console.log(item);
  // }

  // const values = '8 11';
  // const array = values.split(' ');
  // const first = Number(array[0]);
  // const last = Number(array[array.length-1]);
  // const result = first * last;
  // console.log(result);

  // let names = 'Poli, Doli, Mango';
  // let number = '0501112233, 0661472536, 0951475623';
  // names = names.split(',');
  // number = number.split(',');
  // for(let i = 0; i < names.length, i < number.length; i += 1) {
  //   console.log(`${names[i]} - ${number[i]}`);
  // };
 
  // const string = 'Welcome to the future';
  // const result = string.split(' ').slice(1, -1).join(' ');
  // console.log(result);

  // const langs = ['cb', 'as', 'dfg', 'op'];
  // for(let i = 0; i < langs.length; i +=1) {
  //   if(langs[0] > langs[i]) {
  //     const result = langs.splice(i,1)[0];
  //     langs.unshift(result);
  //   }
  // };
  // console.log(langs);

//   const numbers = [2, 5, 94, 6, 1, 57];
//   let min = numbers[0];
//   for (const number of numbers) {
//     if(number < min) {
//       min = number
//     }
//   };
//   console.log(min);

// 🌻Модуль 2 (Урок 2). Функції.

// Функції
// let a = 10;
// function foo() {
//   a = 45;
// }
// foo();
// console.log(a); // 45

// let a = 10;
// function foo(a) {
//   a = 45;
// }
// foo(a); // or foo();
// console.log(a); // 10

// const test = [1, 2, 3];
// function foo(arr) {
//   // let arr = test; 
//   arr.splice(0, 1); 
// }
// foo(test);
// console.log(test); // [2, 3]

// function foo() {
//   let max;
//   for (const num of arguments) {
//     if (typeof num === "number") {
//       max = num;
//       break;
//     }
//   }
//   for (const num of arguments) {
//     if (typeof num === 'number') {
//         if (num > max) {
//           max = num;
//         } 
//     } else {
//       max = foo(...num)
//     }
//   }
//   return max;
// }
// console.log(foo(1, 2, 3, [1, 9, [200]])); // 200

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   minutes = Math.floor(minutes % 60);
//   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`; 
// }
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
//   // const first = array.slice(0, 1);
//   // const second = array.slice(array.length - 1, array.length);
//   // return first.concat(second); 
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // ["Earth", "Venus"]

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " ")); //  ["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage("Mango", "")); // ["M", "a", "n", "g", "o"]

// function calculateEngravingPrice(message, pricePerWord) {
//   const arr = message.split(' ');
//   return arr.length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)) // 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)) // 100

// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter)
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")) // "Mango hurries to the train"

// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }
// console.log(slugify("Arrays for begginers")) // "arrays-for-begginers"

// function makeArray(firstArray, secondArray, maxLength) {
//   const jointArray = firstArray.concat(secondArray);
//   return jointArray.slice(0, maxLength);
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)) // ["Mango", "Poly", "Ajax"]

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(calculateTotal(3)); // 6

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total = total + order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

// function findLongestWord(string) {
//   let longestWord = '';
//   const arr = string.split(' ');
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length > longestWord.length) {
//       longestWord = arr[i];
//    }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("Google do a roll")); // Google
// console.log(findLongestWord('May the force be with you')); // force

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i])
//     }
//   } 
//   return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]

// function getEvenNumbers(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getEvenNumbers(2, 5)); // [2, 4]

// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return number = i;
//     }
//   }
//   return number;
// }
// console.log(findNumber(2, 6, 5)); // 5

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3)); // true


// let sum = 0;
// function addSum(num) {
//   sum = sum + num;
// }
// console.log(addSum(3)); // undefined  бо не має return

// function orderMyLogic(val) {
//   if (val < 5) {
//     return "Less than 5";
//   } else if (val < 10) {
//     return "Less than 10";
//   } else {
//     return "Greater than or equal to 10";
//   }
// }
// console.log(orderMyLogic(4));

// function add() {
//     let sum = 0;
//     console.log(arguments); //виведе всі аргументи, скільки б їх не було
//     for (let i = 0; i < arguments.length; i +=1) {
//         sum += arguments[i];
//     };
//     console.log(sum);
// };
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5);
// add(1, 2, 3, 4, 5, 6);

// function add() {
//     let sum = 0;
//     const arr = [...arguments];
//     console.log(arguments); //виведе всі аргументи, скільки б їх не було
//     console.log(arr);
//     for (const value of arguments) {
//         sum += value;
//     };
//     console.log(sum);
// };
// add(1, 2, 3, 4);
// add(1, 2, 3, 4, 5);
// add(1, 2, 3, 4, 5, 6);

// function calsBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));

//     // return Number((weight/Math.pow(height, 2)).toFixed(1));
//     return Number((weight/height**2).toFixed(1));
// }
// const bmi = calsBMI('88,3', '1.75');
// console.log(bmi);

// function min(a, b) {
//   if(a > b) {
//     return b;
//   }
//   return a;
// };
// console.log(min(5, 10));
// console.log(min(-13, 12));
// console.log(min(1, 1));

// function min(a, b) {
//   return a > b ? b : a;
// };
// console.log(min(5, 10));
// console.log(min(-13, 12));
// console.log(min(1, 1));

// function getRectArea(dimensions) {
//   dimensions = dimensions.split(' '); //перетворили рядок на масив
//   const first = Number(dimensions[0]);
//   const second = Number(dimensions[1]);
//   return first * second;
// };
// console.log(getRectArea('8 11'));
// console.log(getRectArea('13 19'));
// console.log(getRectArea('9 23'));

// function logItems(items) {
//   for(let i = 0, num = 1; i < items.length; i += 1, num += 1) {
//     console.log(`${num} - ${items[i]}`); 
//   }
// };
// logItems(['Mango', 'Poli', 'Ajax', 'Doli']);
// logItems(['🍅', '🍎', '🍓', '🍐', '🍌', '🍍']);

// function printContactInfo(names, phone) {
//   names = names.split(',');
//   phone = phone.split(',');
//   for(let i = 0; i < names.length, i < phone.length; i += 1) {
//     console.log(`${names[i]} - ${phone[i]}`);
//   }
// };
// printContactInfo('Solomon, Jacob, Artem', '0501471213, 0661234556, 0951593526');

// function findLargesNumber() {
//   const arr = [...arguments];
//   let max = arr[0];
//   for(const num of arr) {
//     if(num > max) {
//       max = num;
//     }
//   }
//   return max;
// };
// console.log(findLargesNumber(2, 17, 62, 1, 23, 57)); //62
// console.log(findLargesNumber(49, 4, 7, 83, 12)); //83

//Рівень Junior с зірочкой 🌟
// function findLargesNumber() {
//   let max;
//   for(const num of arguments) {
//     if(typeof num === 'number') {
//       max = num;
//       break;
//     }
//   }
//   for(const num of arguments) {
//     if(typeof num === 'number') {
//       if(num > max) {
//         max = num;
//       }
//     } else {
//       max = findLargesNumber(...num);
//     }
//   }  
//    return max; 
// };
// console.log(findLargesNumber(2, [123, 15], 17, 62, 1, 23, 57)); //123

// function calAverage() {
//   let total = 0;
//   for(const num of arguments) {
//     total += num;
//   }
//   return total / arguments.length;
// };
// console.log(calAverage(1, 2, 3, 4, 5));

// function formatTime(minutes) {
//   const hours = Math.floor(minutes/60);
//   minutes = minutes % 60;
//   return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}`;
// };
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// function foo(array) {
//   for(let i = 0; i < array.length; i++) {
//     array[i] *=2;
//   }
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(foo(numbers)); // undefined, бо немає return
// console.log(numbers); // [2, 4, 6, 8, 10]

// let courses = ['HTML', 'JS', 'React', 'Node'];
// function updateCourse(oldCourse, newCourse) {
//   const idx = courses.indexOf(oldCourse);
//   if(!!~idx) {
//     courses.splice(idx, 1, newCourse);
//     return courses; 
//   }
//   return 'Такий курс не знайдено';
// };
// console.log(updateCourse('React', 'React Native'));

// console.log(!!~-1); // !!~ працює по формулі -(x+1)

// // рекурсія
// function sum(arr, n) {
//   if(n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n-1]
//   }
// }
// console.log(sum([1, 2, 3], 2)); // 3 - сума двох перших елементів масива

// Використання рекурсії для створення зворотного відліку
// function countdown(n){
//   if (n < 1) {
//    return [];
//  } else {
//    const countArray = countdown(n - 1);
//    countArray.unshift(n);
//    return countArray;
//  }
// }
// console.log(countdown(5)); // [5, 4, 3, 2, 1]

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum > endNum) {
//   return [];
// } else {
//   const countArray = rangeOfNumbers(startNum, endNum - 1);
//   countArray.push(endNum);
//   return countArray;
// }
// }
// console.log(rangeOfNumbers(3, 7)); // [3, 4, 5, 6, 7]


// 🌞🌞🌞🌞🌞Модуль 3.🌞🌞🌞🌞🌞  
// 🌻Модуль 3 (Урок 1). Об'єкти.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// 

// const user = {
//   score: falseconst user = {
//   score: false
// }
// if('score' in user) {
//   console.log('yes')
// } else {
//   console.log('no')
// }
// }
// if(user.hasOwnProperty('score')) {
//   console.log('yes')
// } else {
//   console.log('no')
// }

// const user = {
//   name: 'Mango',
//   age: 30,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skyjumping';
// user['premium'] = false;
// // const key = 'premium';
// // user[key] = false;
// console.log(user);
// const keys = Object.keys(user);
// for(const key of keys) {
//   console.log(user[key]);
// }
// console.log(keys);

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// }
//for...in - 1 способ
// let sum = 0;
// for(const key in salaries) {
//   sum += salaries[key]
// }
// console.log(sum);
// Object.values and for...of - 2 способ
// let sum = 0;
// const values = Object.values(salaries);
// for(const value of values) {
//   sum += value ;
// }
// console.log(sum);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) { // просто для прикладу, тут воно не потрібно
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// function countProps(object) {
//   // let propCount = 0;
//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }
//   // return propCount;
//   // ---------------------------------------------------
//   return Object.keys(object).length;
// }
// console.log(countProps({ name: "Mango", age: 2 })); // 2

// function countProps(object) {
//  let propCount = 0;
//   for (const key of Object.keys(object)) {
//     propCount += 1;
//   }
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 })); // 2

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"] 
// console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar")); // 1300
// console.log(getProductPrice("Grip")); // 1200
// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Droid")); // 400
// console.log(getProductPrice("Engine")); // null
//------------------------------------------------
// function getAllPropValues(propName) {
//   const allValue = [];
//   for (const value of products) {
//     if (value.hasOwnProperty(propName)) {
//       for (const key in value) {
//         if (key === propName) {
//            allValue.push(value[propName]);
//         }
//       }
//     }
//   }
//   return allValue;
// }
// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []
//----------------------------------------------------------------------------------
// function calculateTotalPrice(productName) {
//   // let total = 0;
//   // for (const value of products) {
//   //   for (const key in value) {
//   //     if (value.name === productName) {
//   //     return total = value.price * value.quantity 
//   //   }
//   //   }
//   // }
//   // return total;
// //------------------------------------------------------------------------------------
//   // let prices = 0;
//   // for (let product of products) {
//   //   const key = Object.keys(product);
//   //   if (productName === product.name) {
//   //     prices = product.price * product.quantity;
//   //   }
//   // }
//   // return prices;
// }
// console.log(calculateTotalPrice("Blaster")); // 0
// console.log(calculateTotalPrice("Radar")); // 5200

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures; // деструктуризація об'єкта
// console.log(today); // 26
// const {
//   yesterday,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", 
//   today,
//   tomorrow } = highTemperatures; // додаємо дефолтне значення

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);  
// }
// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
//   //--------------------------------------------------------------------------------------------------------
//   const {
//     today: {
//       low: todayLow,
//       high: todayHigh
//     },
//     tomorrow: {
//       low: tomorrowLow,
//       high: tomorrowHigh,
//     }
//   } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })); // 28.5

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     return this.books.splice(index, 1, newName);
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.books); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Метод для отримання всього зілля
//   getPotions() {
//     return this.potions;
//   },
//   // Метод для додавання зілля
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//    // Метод для додавання зілля
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//    // Метод для оновлення назви зілля
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
// // const atTheOldToad = {
// //   potions: [
// //     { name: "Speed potion", price: 460 },
// //     { name: "Dragon breath", price: 780 },
// //     { name: "Stone skin", price: 520 },
// //   ],
// //   // Метод для отримання всього зілля
// //   getPotions() {
// //     return this.potions;
// //   },
// //   // Метод для додавання зілля
// //   addPotion(newPotion) {
// //     for (const potion of this.potions) {
// //       if (potion.name === newPotion.name) {
// //         return `Error! Potion ${newPotion.name} is already in your inventory!`;
// //       }
// //     }
// //     this.potions.push(newPotion);
// //   },
// //   // Метод для видалення зілля
// //   removePotion(potionName) {
// //     const potionIndex = this.potions.findIndex(potion => potion.name === potionName);
// //     if (potionIndex === -1) {
// //       return `Potion ${potionName} is not in inventory!`;
// //     }
// //     this.potions.splice(potionIndex, 1);
// //   },
// //   // Метод для оновлення назви зілля
// //   updatePotionName(oldName, newName) {
// //     const potion = this.potions.find(potion => potion.name === oldName);
// //     if (!potion) {
// //       return `Potion ${oldName} is not in inventory!`;
// //     }
// //     potion.name = newName;
// //   },
// // };
// console.log(atTheOldToad.getPotions());
// // [{ name: "Speed potion", price: 460 }, 
// //  { name: "Dragon breath", price: 780 }, 
// //  { name: "Stone skin", price: 520 }]
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions());
// // [{ name: "Speed potion", price: 460 }, 
// // { name: "Dragon breath", price: 780 }, 
// // { name: "Stone skin", price: 520 }, 
// // { name: "Invisibility", price: 620 }]
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));
// // "Error! Potion Speed potion is already in your inventory!"
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.getPotions());
// // [{ name: "Speed potion", price: 460 }, 
// // { name: "Stone skin", price: 520 }, 
// // { name: "Invisibility", price: 620 }]
// console.log(atTheOldToad.removePotion("Healing potion"));
// // "Potion Healing potion is not in inventory!"
// atTheOldToad.updatePotionName("Stone skin", "Earth shield");
// console.log(atTheOldToad.getPotions());
// // [{ name: "Speed potion", price: 460 }, 
// // { name: "Earth shield", price: 520 }, 
// // { name: "Invisibility", price: 620 }]
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Fire breath"));
// // "Potion Dragon breath is not in inventory!"





// 🌻Модуль 3 (Урок 2). Операції rest та spread.

// function makeTask(data) {
//   const { text } = data;
//   const dataNew = {
//     completed: false,
//     category: "General",
//     priority: "Normal",
//   }
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   return { ...dataNew, ...data };
// }
// console.log(makeTask({})); // { category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })); // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// function add(...args) {
//   let sum = 0; 
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(add(15, 27)); // 42
// console.log(add(12, 4, 11, 48)); // 75

// function addOverNum(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) { 
//     if (args[i] > args[0]) {
//        total += args[i];
//     }
//   }
//   return total;
// }
// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71

// function findMatches(first, ...args) {
//   const matches = []; 
//   for (let i = 0; i < first.length; i++) {
//     if (args.includes(first[i])) {
//       matches.push(first[i]);
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // [17, 89, 2]












// const arr = [1, 2, 3];
// const [a, b, c] = arr; // деструктуризація масиву
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// -------------------------------------------------
// const [_, b, c] = arr; // деструктуризація масиву
// console.log(b); // 2
// console.log(c); // 3

// const user = {
//   name: 'Mango',
//   age: 11,
//   skills: {
//     html: true,
//     css: true,
//     js: false
//   }
// };
// const {name, skills} = user; // деструктурізація об'єкту 
// console.log(skills); // { html: true, css: true, js: false}
// -------------------------------------------------------------
// const {name: userName, skills} = user; // переіменування ключа об'єкта
// console.log(userName); // Mango
// --------------------------------------------------------------------
// const {name, skills: {js}} = user;
// console.log(js); // false
// console.log(skills); // Uncaught ReferenceError: skills is not defined помилка в консолі
// -----------------------------------------------------------------------------------------

// const users = [{
//   name: 'User1',
//   language: 'html'
// }, {
//   name: 'User2',
//   language: 'css'
// }, {
//   name: 'User3',
//   language: 'js'
// }];
// for(const {name, language} of users) {
//   console.log(name, language); // User1 html і т.д
// }; 
// ------------------------------------------------------------------------------------
// for(const {name, language = 'no'} of users) { // language = 'no' значення по дефолту
//   console.log(name, language); // User1 html і т.д
// }; 

// const arr = [56, 22, 4, 25, 7];
// const min = Math.min(...arr); //...spread
// console.log(min); // 4
// ----------------------------------------------
// const arr1 = [...arr]; // робимо копію масива arr
// console.log(arr1);
// ----------------------------------------------
// const [first, ...props] = arr; // ...rest
// console.log(first); // 56
// console.log(props); // [22, 4, 25, 7]
// for(i = 0; i < props.length; i += 1) {
//   props[i] *= first;
// };
// console.log(props); // [1232, 224, 1400, 392]
//--------------------------
// це дока до функцуії foo()
/** 
 * 
 * @param {Number} first 
 * @param {Number} second 
 */
// function foo(first, second) {
//   console.log(first, second);
// };
// foo(...arr); // spread // 56 22

// деструктурізація функціі, щоб не використовувати for...of
// function getStockReport({companyName, stock: {repairBots, deferenceBots}}) {
//   const total = repairBots + deferenceBots;
//   return `${companyName} has ${total} items in stock`
// };
// console.log(getStockReport({
//   companyName: 'Cyber Systems', 
//   stock: {
//     repairBots: 150,
//     deferenceBots: 200
//   }
// }));

// function transformUserName({firstName, lastName, ...props}) {
//   return {
//     fulName: `${firstName} ${lastName}`,
//     ...props
//   }
// };
// console.log(transformUserName({
//   id: 1,
//   firstName: 'Jacob',
//   lastName: 'Dorn',
//   email: 'jd@gmail.com',
//   friendCount: 40
// }));

// const user = {
//   email: 'us@gmail.com',
//   age: 30
// };
// const {username = 'User'} = user; // Деструктуризація з установленням значення за замовчуванням не змінює вихідний об'єкт, вона просто створює локальну змінну з відповідним значенням.
// console.log(username); // User
// console.log(user.username); // undefined

// const user = {
//   email: 'us@gmail.com',
//   age: 30,
//   location: {
//     lat: 10,
//     lon: 20
//   }
// };
// const {location: {lat, lon}} = user;
// console.log(lat, lon); // 10, 20

// function foo({username} = {}) {
//   console.log(username); // undefined
// };
// foo();

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];
// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }
// console.log(lookUpProfile("Akira", "likes"));

// // Використання функції parseInt з розрядом
// function convertToInteger(str) { 
//   return parseInt(str, 2);  // parseInt(string, radix);
//   }
// console.log(convertToInteger("10011")); // 19


// 🌞🌞🌞🌞🌞Модуль 4.🌞🌞🌞🌞🌞 
// 🌻Модуль 4 (Урок 1). Колбеки та стрілочні функції

// const arr = [2, 6, 8, 5, 4, 3];
// function each(arr, callback) {
//   let total = arr[0];
//   for(let i = 1; i < arr.length; i += 1) {
//     // console.log(callback);
//     total = callback(total, arr[i]);
//   }
//   return total;
// };
// function add(first, second) { // callback function
//   return first + second;
// };
// function sum(first, second) { // callback function
//   return first * second;
// };
// console.log(each(arr, add));
// console.log(each(arr, sum));

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     const isExists = this.pizzas.includes(pizzaName);
//     if (isExists) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(item => {
//     if (secondArray.includes(item)) {
//       commonElements.push(item);
//     }
//   })
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]

// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach(item => {
//     if (item % 2 === 0) {
//       newArray.push(item += value);
//     } else { newArray.push(item) }
//   }) 
//   return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]

// forEach
// const arr = [1, 2, 3, 4, 5];
// arr.forEach(element => console.log(element));
// ----------------------------------------------
// arr.forEach(function(element, i, arr){
//   arr[i] = element * 2;
// })
// console.log(arr); // [2, 4, 6, 8, 10]
// forEach не можна присвоювати до змінної, бо завжди буде undefined
// також в ньому не може бути break і return

// const logItems = arr => arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
// logItems(['Poly', 'Mango', 'Ajax']);
// logItems(['🍅', '🍋', '🍐', '🍑']);

// const calculateAverage = (...arr) => {
//   let total = 0;
//   arr.forEach(value => total += value);
//   return total / arr.length;
// };
// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(11, 23, 3, 7, 4)); //9.6

// function foo(callback) {
//   callback(10);
// }
// function logger(value) {
//   console.log(value);
// }
// foo(logger); // так повинна передаватися ф-ція logger як ф-ція-колбек

// Функція updateRecords приймає 4 аргументи, представлені такими параметрами функції:
// records — об’єкт, що містить декілька окремих альбомів
// id — число, що позначає певний альбом в об’єкті records
// prop — рядок, що позначає назву властивості альбому, яку потрібно оновити
// value — рядок, що містить інформацію, яка використовується для оновлення властивості альбому
// --------------------------------------------------------------------------------------------
// Завершіть функцію, використовуючи правила нижче, щоб змінити об’єкт, переданий до функції.
// Ваша функція завжди повинна повертати весь об’єкт records.
// Якщо value є пустим рядком, видаліть дану властивість prop з альбому.
// Якщо prop не є tracks та value не є пустим рядком, призначте value до prop альбому.
// Якщо prop є tracks та value не є пустим рядком, вам треба оновити масив tracks в альбомі. 
// Якщо альбом не має властивості tracks, то призначте порожній масив. 
// Потім додайте value як останній елемент у масиві tracks альбому.
// --------------------------------------------------------------------------------------------
// Примітка: копія об’єкту recordCollection використовується для тестів. 
// Ви не повинні напряму змінювати об’єкт recordCollection.
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };
// function updateRecords(records, id, prop, value) {
//   const updatedRecords = { ...records };
//   if (!updatedRecords[id]) {
//     return updatedRecords;
//   }
//   if (value === "") {
//     delete updatedRecords[id][prop];
//   } else if (prop !== "tracks") {
//     updatedRecords[id][prop] = value;
//   } else {
//     if (!updatedRecords[id].hasOwnProperty("tracks")) {
//       updatedRecords[id]["tracks"] = [];
//     }
//     updatedRecords[id]["tracks"].push(value);
//   }
//   return records;
// };
// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// const myConcat = (arr1, arr2) => arr1.concat(arr2);
// console.log(myConcat([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]

// const increment = (number, value = 1) => number + value;
// console.log(increment(4, 5)); // 9
// console.log(increment(4)); // 5

// 🌻Модуль 4 (Урок 2). Перебираючі методи масиву

// 🔷map
// const arr = [1, 2, 3, 4, 5];
// const result = arr.map((item) => item * 2); // .map((item, idx, arr) => {})
// console.log(result); // [ 2, 4, 6, 8, 10]
// console.log(arr); // [1, 2, 3, 4, 5]
// -------------------------------------------------------------------------
// const result = arr.map(item => {
//   if(!(item%2)) {
//     return item * 3
//   }
//   return item
// });
// console.log(result); // [1, 6, 3, 12, 5]
// --------------------------------------------------------------------------
// const result = arr.map(item => !(item%2) ? item * 3 : item);
// console.log(result); // [1, 6, 3, 12, 5]

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(item => item.length);
// console.log(planetsLengths); // [5, 4, 5, 7]

// 🔷flatMap - щоб розгладити масив
// const arr = [{
//   name: 'User1', 
//   skills: ['html', 'css']
// }, {
//   name: 'User1', 
//   skills: ['js', 'react']
// }, {
//   name: 'User1', 
//   skills: ['node.js', 'express']
// }];
// const resultMap = arr.map(item => item.skills.map(skill => skill));
// console.log(resultMap); // [['html', 'css'], ['js', 'react'], ['node.js', 'express']] 
// const result = arr.flatMap(item => item.skills);
// console.log(result); // ['html', 'css', 'js', 'react', 'node.js', 'express']

// 🔷find - дозволяє знайти один конкретний елемент в масиві
// const arr = [1, 2, 3, 4, 5];
// const result = arr.find(item => item > 3);
// console.log(result); // 4
// --------------------------------------------------------
// const arr = [{
//   name: 'User1', 
//   skills: ['html', 'css']
//   }, {
//   name: 'User2', 
//   skills: ['js', 'react']
//   }, {
//   name: 'User3', 
//   skills: ['node.js', 'express']
// }];
// const result = arr.find(item => item.skills.includes('js')).name;
// console.log(result); // User2

// 🔷findIndex
// const arr = [{
//   name: 'User1', 
//   skills: ['html', 'css']
//   }, {
//   name: 'User2', 
//   skills: ['js', 'react']
//   }, {
//   name: 'User3', 
//   skills: ['node.js', 'express']
// }];
// const result = arr.findIndex(item => item.skills.includes('js'));
// console.log(result); // 1

// 🔷filter - знаходить всі елементи, які задовольняють вимогам
// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter(item => !(item%2)); // повертає всі парні
// console.log(result); // [2, 4] 

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((item, index, array) => array.indexOf(item) === index);
// console.log(allGenres);// ['adventure', 'history', 'fiction', 'mysticism', 'horror', 'mysticism', 'adventure']
// console.log(uniqueGenres);// ['adventure', 'history', 'fiction', 'mysticism', 'horror']

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// 🔷every - чи всі елементи відповідають умові
// const arr = [1, 2, 3, 4, 5];
// const result = arr.every(item => !(item%2)); 
// console.log(result); // false

// 🔷some - хоча б один задовільняє умові
// const arr = [1, 2, 3, 4, 5];
// const result = arr.some(item => !(item%2)); 
// console.log(result); // true

// 🔷sort 
// const arr = [21, 2, 35, 4, 15];
// const result = arr.sort((a, b) => a - b); 
// console.log(result); // [2, 4, 15, 21, 35]
// ---------------------------------------
// const result = arr.sort((a, b) => b - a); 
// console.log(result); // [35, 21, 15, 4, 2]
// console.log(arr); // [35, 21, 15, 4, 2] - мутує похідний масив!!!
// ------------------------------------------------------------------
// const result = [...arr].sort((a, b) => b - a); 
// console.log(result); // [35, 21, 15, 4, 2]
// console.log(arr); // [21, 2, 35, 4, 15] - не мутує похідний масив!!!
// ---------------------------------------------------------------------
// const str = ['s', 'b', 'A', 'a', 'f'];
// const result = str.sort(); // сортування по юнікоду
// console.log(result); // ['A', 'a', 'b', 'f', 's']
// const result = str.sort((a, b) => a.localeCompare(b));
// console.log(result); // ['a', 'A', 'b', 'f', 's']

// 🔷reduce
// const arr = [21, 2, 35, 4, 15];
// const result = arr.reduce((acc, item) => {
//   console.log('acc', acc);
//   console.log('item', item);
//   acc.push(item * 2);
//   return acc
// }, []);
// console.log(result); // [42, 4, 70, 8, 30]

// const cars = [
//   {make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true},
//   {make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true},
//   {make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false},
//   {make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true},
//   {make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true},
//   {make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true}
// ];
// const getModels = cars.map(item => item.model);
// console.log(getModels); // ['CR-V', 'Accord', 'Mazda 6', 'CX-9', 'F-150', 'Fusion']
// --------------------------------------------------------------------------------------
// const makeCarWithDiscount = (cars, discount) => {
//   return cars.map(item => ({
//     ...item, 
//     price: item.price * (1 - discount)})
//     )
// };
// console.log(makeCarWithDiscount(cars, 0.2)); // масив об'єктів зі зміненими цінами
// ---------------------------------------------------------------------------------------
// const filterByPrice = (cars, threshold) => {
//   return cars.filter(({price}) => price < threshold);
// };
// console.log(filterByPrice(cars, 30000)); // масив об'єктів з price < 30000
// ---------------------------------------------------------------------------------------
// const carOnSale = (cars) => cars.filter(({onSale}) => onSale);
// console.log(carOnSale(cars));
// ---------------------------------------------------------------------------------------
// const getCarType = (cars, type) => {
//   return cars.filter(({type: carType}) => carType === type)
// };
// console.log(getCarType(cars, 'suv'));
// ---------------------------------------------------------------------------------------
// const getByAmount = cars => {
//   return [...cars].sort((a, b) => a.amount - b.amount)
// };
// console.log(getByAmount(cars));
// ---------------------------------------------------------------------------------------
// const sortByModel = (cars, order) => {
// //  return [...cars].sort((a, b) => order === 'abc' 
// //  ? a.model.localeCompare(b.model) 
// //  : b.model.localeCompare(a.model))
// // };
// // або деструктуризувати
// return [...cars].sort(({model: a}, {model: b}) => order === 'abc' 
// ? a.localeCompare(b) 
// : b.localeCompare(a))
// };
// console.log(sortByModel(cars, 'abc')); // model по алфавіту
// console.log(sortByModel(cars, 'desc')); // model з кінця алфавіту
// -----------------------------------------------------------------------------------------
// const getTotalAmount = cars => cars.reduce((acc, {amount}) => acc + amount, 0);
// console.log(getTotalAmount(cars));
// -----------------------------------------------------------------------------------------
// const getModelOnSale = cars => cars.filter(({onSale}) => onSale).map(({make, model}) => `${make} ${model}`);
// console.log(getModelOnSale(cars));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// const names = [...books].filter(item => {
//   if (item.rating > MIN_BOOK_RATING) {
//     return item.author;
//   }
// }).map(item => item.author).sort((a,b) => a.localeCompare(b));
// console.log(names); //  ['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a, b) => a.friends.length - b.friends.length).map(item => item.name);
// };
// const getSortedFriends = users => {
//   return users.flatMap(item => item.friends)
//     .filter((item, index, array) => array.indexOf(item) === index).sort();
// };
// const getTotalBalanceByGender = (users, gender) => {
//   // return users.reduce((acc, item) => {
//   //   if (item.gender === gender) {
//   //     return acc + item.balance;
//   //   }
//   //   return acc;
//   // }, 0)
//   //---------------------------------------------------------------------------------------------
//   return users.filter(item => item.gender === gender)
//     .reduce((acc, item) => acc + item.balance, 0)
// };
// console.log(getNamesSortedByFriendCount(users));
// // ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", 
// // "Blackburn Dotson"]
// console.log(getSortedFriends(users));
// // ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", 
// // "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", 
// // "Sharron Pace", "Solomon Fokes"]
// console.log(getTotalBalanceByGender(users, "male")); // 12053
// console.log(getTotalBalanceByGender(users, "female")); // 8863


// ❗❗❗таке може бути на співбесіді 
// const str = 'jkfnvtydbvvdfpoimdjkldscvzaa';
// const result = str.split('').reduce((acc, item) => {
//   acc.hasOwnProperty(item) ? acc[item] +=1 : acc[item] = 1;
//   return acc;
// }, {})
// console.log(result);
//-------------------------------------------------------------
// function getLettersCount(input) {
//   const result = {};
//   for (const letter of input) {
//     result[letter] = (result[letter] || 0) + 1;
//     console.log(result.letter);
    
//   }
//   return result;
// }
// console.log(getLettersCount(str)); // об'єкт в якого літера: кількість літер в рядку (ключ: значення)

// function logCars(arr) {
// //   const result = arr.reduce((acc, item, idx) => {
// //     return acc + `${idx+1} - ${item}\n`
// // }, arr.length ?`Загальна кількість авто: ${arr.length}\n` : `Вибачте авто немає 🤷‍♀️`)
//   // return result
//   const result = arr.reduce((acc, item, idx) => {
//     return acc + `${idx+1} - ${item}\n`

//   }, arr.length ? `Загальна кількість авто: ${arr.length}\n` : `Вибачте авто немає 🤷‍♀️`)
//   return result;
// }
// console.log(logCars(['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault']));
// console.log(logCars([]));

// const fruitBasket = ['apple', 'banana', 'orange', 'cherry', 'banana', 'apple', 'orange'];
// const count = fruitBasket.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});
// console.log(count); {banana: 2, cherry: 1, apple: 2, orange: 2}


// 🌞🌞🌞🌞🌞Модуль 5.🌞🌞🌞🌞🌞 
// 🌻Модуль 5 (Урок 1). Ключове слово this. Прототипи та класи

// Калькулятор. Створіть об'єкт calculator з трьома методами
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//     return `Values set: a = ${this.a}, b = ${this.b}`;
//   },
//   add() {
//     return (this.a ?? 0) + (this.b ?? 0);
//   }, 
//   mult() {
//     return (this.a ?? 1) * (this.b ?? 1);
//   }
// }
// calculator.read(3); 
// console.log(calculator.add()); // 3
// console.log(calculator.mult()); // 3
// console.log(calculator.read(3, 2)); // Values set: a = 3, b = 2
// console.log(calculator.add()); // 5
// console.log(calculator.mult()); // 6

// function foo(a, b) {
//   console.log(this, a, b);
// }
// foo.call({}, 5, 10); 
// foo.apply({}, [6, 11]); 
// foo.bind({}, 7, 12); 

// const objA = {
//   name: 'A',
//   myAge(a, b) {
//     console.log(this, a, b);
//   }
// }
// const objB = {
//   name: 'B',
//   myAge: objA.myAge
// }
// const fromBackEnd = [1, 2];
// const str = objA.myAge.call(objB, ...fromBackEnd);
// console.log(str);

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (this.a ?? 0) + (this.b ?? 0);
//   },
//   mult() {
//     return (this.a ?? 1) * (this.b ?? 1);
//   }
// };
// calculator.read();
// console.log(calculator.add());
// console.log(calculator.mult());

// class Car {
//   #brand
//    // Синтаксис оголошення методу класу
//   constructor( brand, model, price ) {
//     // Ініціалізація властивостей екземпляра
//     this.#brand = brand; // #приватна властивість
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//   return this.price;
//   };
//   changePrice(newPrice) {
//     return this.price = newPrice;
//   };
// };
// console.log(new Car('Audi', 'Q3', 36000)); // {brand: 'Audi', model: 'Q3', price: 36000 }

// class Storage {
//   constructor(items) {
//     this.items = items;
//   };
//   getItems() {
//     return this.items;
//   };
//   addItem(newItem) {
//     return this.items.push(newItem);
//   };
//   removeItem(reItem) {
//     return this.items = this.items.filter(item => item !== reItem);
//   };
// };
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// console.log(storage.addItem("Droid"));
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// console.log(storage.removeItem("Prolonger"));
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

class User {
  email;
  constructor(email) {
    this.email = email;
  }
  get emaiil() {
    return this.email;
  }
  set emaiil(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
}
const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});
console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"



//📌📌📌Завдання для тренування
//1️⃣Фільтрація та перетворення даних
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 }
// ];
// function filterUsers(users, minAge) {
//   return users.filter(item => item.age >= minAge).map(item => item.name)
// };
// console.log(filterUsers(users, 18)); // ["Alice", "Charlie"]
//----------------------------------------------------------------------------------------------
//🔹
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 35 }
// ];
// function getUniqueAges(users) {
//   return users.map(item => item.age).filter((item, index, arr) => arr.indexOf(item) === index);
// }
// console.log(getUniqueAges(users)); // [25, 30, 35]
//------------------------------------------------------------------------------------------------
//🔹
// const users = [
//   { name: "Alice", isActive: true },
//   { name: "Bob", isActive: false },
//   { name: "Charlie", isActive: true },
//   { name: "David", isActive: false }
// ];
// function getActiveUsers(users) {
//   return users.filter(item => item.isActive).map(item => item.name);
// }
// console.log(getActiveUsers(users)); // ["Alice", "Charlie"]
//------------------------------------------------------------------------------------------------
//🔹
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
//   { name: "Smartwatch", price: 250 }
// ];
// function filterProducts(products, minPrice, maxPrice) {
//   return products.filter(item => item.price >= minPrice && item.price <= maxPrice)
//     .map(item => item.name);
// }
// console.log(filterProducts(products, 200, 850)); // ['Phone', 'Tablet', 'Smartwatch']
//-------------------------------------------------------------------------------------------------
//🔹
// const users = ["Alice", "Bob", "Charlie", "David"];
// function getNameLengths(users) {
//   return users.map(item => item.length);
// };
// console.log(getNameLengths(users)); // [5, 3, 7, 5]
//-------------------------------------------------------------------------------------------------
//🔹
// const books = [
//   { title: "Dune", genre: "Sci-Fi" },
//   { title: "1984", genre: "Dystopia" },
//   { title: "The Hobbit", genre: "Fantasy" },
//   { title: "Brave New World", genre: "Dystopia" }
// ];
// function getBooksByGenre(books, genre) {
//   return books.filter(item => item.genre === genre).map(item => item.title);
// };
// function getUniqueGenres(books) {
//   return books.map(item => item.genre).filter((item, idx, arr) => arr.indexOf(item) === idx);
// }
// console.log(getBooksByGenre(books, "Dystopia")); // ["1984", "Brave New World"]
// console.log(getUniqueGenres(books)); // ['Sci-Fi', 'Dystopia', 'Fantasy']
//--------------------------------------------------------------------------------------------------
//🔹
// const users = [
//   { name: "Alice", email: "alice@gmail.com" },
//   { name: "Bob", email: "bob@yahoo.com" },
//   { name: "Charlie", email: "charlie@gmail.com" },
//   { name: "David", email: "david@outlook.com" }
// ];
// function getUsersByDomain(users, domain) {
//   return users.filter(item => item.email.includes(domain)).map(item => item.name);
// };
// console.log(getUsersByDomain(users, "gmail.com")); // ["Alice", "Charlie"]
//--------------------------------------------------------------------------------------------------
//🔹
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
//   { name: "Smartwatch", price: 250 }
// ];
// function getMostExpensiveProduct(products) {
//   return products.reduce((acc, item) => (item.price > acc.price ? item : acc), products[0]).name;
// };
// console.log(getMostExpensiveProduct(products)); // "Laptop"
//--------------------------------------------------------------------------------------------------
//🔹
// const users = ["Alice", "Bob", "Charlie"];
// function greetUsers(users) {
//   return users.map(item => `Привіт, ${item}!`)
// };
// console.log(greetUsers(users)); // ["Привіт, Alice!", "Привіт, Bob!", "Привіт, Charlie!"]
//---------------------------------------------------------------------------------------------------
//🔹
// const users = [
//   { name: "Alice", friends: ["Bob", "Charlie", "Alice", "David"] },
//   { name: "Bob", friends: ["Alice", "Charlie"] },
//   { name: "Charlie", friends: ["Bob", "David"] },
//   { name: "David", friends: ["Alice", "Charlie"] }
// ];
// function getMostPopularFriend(users) {
//   // 1 варіант ("Charlie")
//   // const friendCount = {};
//   // users.forEach(user => user.friends.forEach(friend => {
//   //    friendCount[friend] = (friendCount[friend] || 0) + 1;
//   // }));
//   // return Object.keys(friendCount).reduce((acc, friend) =>
//   //   friendCount[friend] > friendCount[acc] ? friend : acc
//   // );
//   //----------------------------------------------------------------------------------------
//   // 2 варіант (['Charlie', 'Alice'])
//   const friendCount = {};
//   users.forEach(user => {
//     user.friends.forEach(friend => {
//       friendCount[friend] = (friendCount[friend] || 0) + 1;
//     });
//   });
//   const maxCount = Math.max(...Object.values(friendCount));
//   return Object.keys(friendCount).filter(friend => friendCount[friend] === maxCount);
//   //------------------------------------------------------------------------------------------
// 3 варіант (['Charlie', 'Alice'])
  // const arrFriends = users.flatMap(item => item.friends);
  // const obj = {};
  // arrFriends.forEach(item => {
  //   if (!obj[item]) {
  //     obj[item] = 1
  //   } else {obj[item] += 1}
  // })
  // const arrVal = Object.values(obj);
  // const maxNumber = Math.max(...arrVal);
  // const arr = Object.entries(obj);
  // return arr.filter(([key, val]) => val === maxNumber ? key : 0).map(item => item[0])
  //-----------------------------------------------------------------------------------------
  // 4 варіант (['Charlie', 'Alice'])
//   const friendCount = {};
//   users.forEach(item => item.friends.forEach(item => {
//     friendCount[item] ? friendCount[item] +=1 : friendCount[item] = 1
//   }))
//   const maxNumber = Math.max(...Object.values(friendCount));
//   return Object.keys(friendCount).filter(item => friendCount[item] === maxNumber)
// };
// console.log(getMostPopularFriend(users)); // ім'я друга, якого найчастіше згадують у friends
//----------------------------------------------------------------------------------------------
// 🔹 потрібно перевірити, чи можна скласти слово word з літер, які є в рядку letters
// function isPossibleToCompose(word, letters) {
//   // 1 варіант
//   // const wordObj = {};
//   // const lettersObj = {};
//   // word.split('').forEach(item => {
//   //   wordObj[item] = (wordObj[item] || 0) + 1
//   // })
//   // letters.split('').forEach(item => {
//   //   lettersObj[item] = (lettersObj[item] || 0) + 1
//   // })
//   // for (const key in wordObj) {
//   //   if (wordObj[key] > (lettersObj[key] || 0)) {
//   //     return false
//   //   }
//   // }
//   // return true
//   //--------------------------------------------------
//   // 2 варіант
//   const countChars = str => {
//     return str.split('').reduce((acc, char) => {
//       acc[char] = (acc[char] || 0) + 1;
//       return acc;
//     }, {})
//   }
//   const wordObj = countChars(word);
//   const lettersObj = countChars(letters);
//   return Object.keys(wordObj).every(char => wordObj[char] <= (lettersObj[char] || 0));
// }
// console.log(isPossibleToCompose('aa', 'abc')) // false
// console.log(isPossibleToCompose('abc', 'dcba')); // true
// console.log(isPossibleToCompose('aabbcc', 'bcabcaddff')); // true

//2️⃣Обробка асинхронних операцій.
// Реалізуй функцію fetchData(url), яка використовує fetch для отримання JSON-даних
// за переданим URL і повертає їх. Використовуй async/await.
// async function fetchData(url) {
//   try {
//     const response = await fetch(url) // Виконуємо HTTP-запит
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`); // Перевіряємо статус відповіді
//     }
//     const data = await response.json(); // Розбираємо JSON-дані
//     return data
//   } catch (error) {
//     console.error("Помилка при отриманні даних:", error);
//     return null; // Повертаємо null у разі помилки
//   }
// }
// // Приклад використання:
// fetchData("https://jsonplaceholder.typicode.com/todos/1")
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

//3️⃣Напиши рекурсивну функцію sumTo(n), яка повертає суму всіх чисел від 1 до n
// function sumTo(n) {
//   if (n === 1) return 1;
//   return n + sumTo(n - 1);
// };
// console.log(sumTo(5)); // 15 (1 + 2 + 3 + 4 + 5)

//4️⃣Асинхронна функція з Promise
// Напиши функцію delay(ms), яка повертає Promise, що виконується через ms мілісекунд.
// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//     }, ms)
//   })

// };
// delay(2000).then(() => console.log("Прошло 2 секунды"));

//5️⃣Чисті функції та іммутабельність
// 🔹Напиши функцію updateUserEmail(users, name, newEmail), яка не мутує вихідний масив,
// а повертає новий масив користувачів з оновленою електронною поштою для вказаного name.
// function updateUserEmail(users, name, newEmail) {
//   // мутує вихідний масив
//   // const user = users.find(item => item.name === name);
//   // if (user) {
//   //   user.email = newEmail;
//   //   return user;
//   // }
//   // return null
//   //--------------------------------------------------------------------------------------
//   // не мутує вихідний масив
//   return users.map(user =>
//     user.name === name
//       ? { ...user, email: newEmail } // Створюємо новий об'єкт із оновленою email
//       : user // Інші об'єкти залишаються без змін
//   );
// }
// const users = [
//   { name: "Alice", email: "alice@example.com" },
//   { name: "Bob", email: "bob@example.com" }
// ];
// console.log(updateUserEmail(users, "Alice", "alice@new.com"));
// console.log(users);
//-------------------------------------------------------------------------------------------
//🔹
// const users = [
//   { name: "Alice", status: "active" },
//   { name: "Bob", status: "inactive" }
// ];
// function updateUserStatus(users, name, newStatus) {
//   return users.map(user => user.name === name ? { ...user, status: newStatus } : user)
// };
// const updatedUsers = updateUserStatus(users, "Bob", "active");
// console.log(updatedUsers);
//-------------------------------------------------------------------------------------------
// 🔹Видалення користувача (Іммутабельна версія)
// const users = [
//   { name: "Alice", email: "alice@example.com" },
//   { name: "Bob", email: "bob@example.com" }
// ];
// function deleteUser(users, name) {
//   return users.filter(user => user.name !== name);
// };
// const newUsers = deleteUser(users, "Alice");
// console.log(newUsers); // [{ name: "Bob", email: "bob@example.com" }]
// console.log(users); // Початковий масив не змінюється
//--------------------------------------------------------------------------------------------
// 🔹Підрахунок активних користувачів (Чиста функція)
// const users = [
//   { name: "Alice", status: "active" },
//   { name: "Bob", status: "inactive" },
//   { name: "Charlie", status: "active" }
// ];
// function countActiveUsers(users) {
//   return users.reduce((acc, user) => {
//     return user.status === "active" ? acc + 1 : acc
//   }, 0);
// }
// console.log(countActiveUsers(users)); // 2
//-------------------------------------------------------------------------------------------
// 🔹Додавання нового користувача (Іммутабельна версія)
// const users = [
//   { name: "Alice", email: "alice@example.com" }
// ];
// function addUser(users, newUser) {
//   const userExists = users.some(user => user.name === newUser.name);
//   return userExists ? [...users] : [...users, newUser];
// }
// const updatedUsers = addUser(users, { name: "Bob", email: "bob@example.com" });
// console.log(updatedUsers);
// // [
// //   { name: "Alice", email: "alice@example.com" },
// //   { name: "Bob", email: "bob@example.com" }
// // ]
// console.log(users); // Початковий масив не змінюється
//-------------------------------------------------------------------------------
// 🔹Оновлення кількості товару (Іммутабельна версія)
// const products = [
//   { id: 1, name: "Laptop", quantity: 5 },
//   { id: 2, name: "Phone", quantity: 10 }
// ];
// function updateProductQuantity(products, id, newQuantity) {
//   return products.map(item => item.id === id ? { ...item, quantity: newQuantity } : item);
// }
// const updatedProducts = updateProductQuantity(products, 1, 8);
// console.log(updatedProducts);
// // [
// //   { id: 1, name: "Laptop", quantity: 8 },
// //   { id: 2, name: "Phone", quantity: 10 }
// // ]
// console.log(products); // Початковий масив не змінюється

//6️⃣Маніпуляція з об'єктами
// Напиши функцію groupByAge(users), яка згрупує масив користувачів за віком у вигляді об'єкта.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 }
// ];
// function groupByAge(users) {
//   return users.reduce((acc, user) => {
//     const age = user.age;
//     if (!acc[age]) {
//       acc[age] = [];
//     }
//     acc[age].push(user)
//     return acc;
//   }, {})
// };
// console.log(groupByAge(users));
// // Вихідний об'єкт:
// // {
// //   25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
// //   30: [{ name: "Bob", age: 30 }]
// // }
//------------------------------------------------------------------------------------------
//🔹
// const users = [
//   { name: "Alice", status: "active" },
//   { name: "Bob", status: "inactive" },
//   { name: "Charlie", status: "active" },
//   { name: "David", status: "pending" }
// ];
// function countByStatus(users) {
//   // // 1 варіант
//   // return users.reduce((acc, user) => {
//   //   const status = user.status;
//   //   if (!acc[status]) {
//   //     acc[status] = 1
//   //   } else {acc[status] += 1}
//   //   return acc;
//   // }, {})
//   // 2 варіант
//   // return users.reduce((acc, { status }) => {
//   //   acc[status] = (acc[status] || 0) + 1;
//   //   return acc;
//   // }, {});
// }
// console.log(countByStatus(users)); // { active: 2, inactive: 1, pending: 1 }
//------------------------------------------------------------------------------------------
// 🔹Об'єднання масиву об'єктів за ключем
// Напиши функцію mergeById(arr1, arr2), яка об'єднує два масиви об'єктів за однаковим id.Якщо
// об'єкт з однаковим id є в обох масивах, об'єднай їхні властивості.
// const arr1 = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ];
// const arr2 = [
//   { id: 1, age: 25 },
//   { id: 3, name: "Charlie", age: 30 }
// ];
// function mergeById(arr1, arr2) {
//   const mergedMap = {};
//   [...arr1, ...arr2].forEach(item => {
//     if (mergedMap[item.id]) {
//       mergedMap[item.id] = {...mergedMap[item.id], ...item}
//     } else {mergedMap[item.id] = {...item}}
//   })
//   return mergedMap;
// }
// console.log(mergeById(arr1, arr2));
// [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie", age: 30 }
// ]
//-----------------------------------------------------------------------------------------
// 🔹Фільтрація об'єкта за значенням
// Напиши функцію filterObject(obj, value), яка повертає новий об'єкт тільки з тими
// властивостями, значення яких дорівнює value.
// const data = {
//   a: 1,
//   b: 2,
//   c: 1,
//   d: 3
// };
// function filterObject(obj, value) {
//   return Object.fromEntries(Object.entries(obj).filter(([key, val]) => val === value));
// }
// console.log(filterObject(data, 1)); // { a: 1, c: 1 }
//----------------------------------------------------------------------------------------------
// 🔹Групування об'єктів за першим символом імені
// Напиши функцію groupByFirstLetter(users), яка згрупує користувачів за першою літерою їх імені.
// const users = [
//   { name: "Alice" },
//   { name: "Arnold" },
//   { name: "Bob" },
//   { name: "Charlie" }
// ];
// function groupByFirstLetter(users) {
//   const obj = {};
//   users.forEach(item => {
//     const firstLetter = item.name[0];
//     if (!obj[firstLetter]) {
//       obj[firstLetter] = [item]
//     } else {obj[firstLetter].push(item)}
//   });
//   return obj;
// };
// console.log(groupByFirstLetter(users));
// // {
// //   A: [{ name: "Alice" }, { name: "Arnold" }],
// //   B: [{ name: "Bob" }],
// //   C: [{ name: "Charlie" }]
// // }
//--------------------------------------------------------------------------------------------------
//🔹Перетворення масиву об'єктів у об'єкт з ключами
// Напиши функцію arrayToObject(arr, key), яка перетворює масив об'єктів у об'єкт, де ключами будуть
// значення, що відповідають переданому параметру key.
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ];
// function arrayToObject(arr, key) {
//   return arr.reduce((acc, item) => {
//     acc[item[key]] = item;
//     return acc;
//   }, {})
// }
// console.log(arrayToObject(users, 'id'));
// // {
// //   1: { id: 1, name: "Alice" },
// //   2: { id: 2, name: "Bob" },
// //   3: { id: 3, name: "Charlie" }
// // }

//7️⃣Обхід вкладених структур
// Напиши функцію countNestedKeys(obj), яка підраховує кількість ключів у вкладеному об'єкті.
// const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
// function countNestedKeys(obj) {
//   let count = 0;
//   for (const key in obj) {
//     count += 1;
//     if (typeof obj[key] === 'object' && obj[key] !== null) {
//       count += countNestedKeys(obj[key])
//     }
//   }
//   return count;
// }
// console.log(countNestedKeys(obj)); // 5 (a, c, e, d, b)
// console.log(typeof null); // object

//8️⃣💦Створення простого сервера (якщо дозволено Node.js)
// Напиши простий HTTP - сервер на http - модулі Node.js,
// який повертає JSON з повідомленням { message: "Hello, world!" }.
// const http = require('http'); // Імпорт модуля http
// const PORT = 3000; // Порт, на якому працюватиме сервер
// // Створення сервера
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' }); // Встановлення заголовків
//   res.end(JSON.stringify({ message: 'Hello, world!' })); // Відправлення JSON-відповіді
// });
// // Запуск сервера
// server.listen(PORT, () => {
//   console.log(`Сервер працює на http://localhost:${PORT}`);
// });

//--------------------------------------------------------------------------------------------
// let a = 5;
// let b = 7;
// let c = a+++b;
// console.log(a, b, c);
// console.log(true + true);
// var a = false;
// if (a == `0`) {
//     alert(`==`);
// }
// if (a === `0`) {
//     alert(`===`);
// }

// for (var i = 0; i > -10; i-=3) {
//   i++;
//   console.log(i); // 1 -1 -3 -5 -7
// }

// var i = 0;
// while (i++ < 5) {alert( i );} // 1 2 3 4 5

// What is output to the console in 2 line?
// var f = function printLog() {
// console.log('My function');
// }
// f; // nothing

// var a = 1;
// function foo() {
//   function innertFoo(b=3) {
//     let a = 3;
//     return a + b;
//   }
//   return innertFoo(2) + a; // innertFoo(2) повертає 5, і далі 5+1=6
// }
// console.log(foo()); // 6

// function sum(a, b){
//   a + b;
// }
// let result = sum(2, 5);
// console.log(result); // undefined

// 🔥🔥🔥🔥🔥freeCodeCamp🔥🔥🔥🔥🔥
// Шаблон у межах рядка
// Зверніть увагу, що синтаксис .match є протилежним 
// до методу .test, яким ви користувались дотепер:
// 'string'.match(/regex/);
// /regex/.test('string');


// // Гетери й сетери для управління доступом до об’єкта
// class Thermostat {
//   constructor(F) {
//     this._tempF = F;
//   }
//   // getter
//   get temperature() {
//     return (5 / 9) * (this._tempF - 32);
//   }
//   // setter для встановлення температури в градусах Цельсія
//   set temperature(updatedTempC) {
//     this._tempF = updatedTempC * 9.0 / 5 + 32;
//   }
// }
// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// let temp = thermos.temperature; // 24.44 градусів за Цельсієм
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 градусів за Цельсієм


// // Функція повинна створити двовимірний масив із m рядками та n стовпцями з нулів 
// function zeroArray(m, n) {
//   // Створіть 2-D масив із m-рядків m та n-стовпчиків нулів
//   let newArray = [];
//     for (let i = 0; i < m; i++) {
//     // Додайте m-ий рядок до newArray
//   let row = [];
//     for (let j = 0; j < n; j++) {
//     // Додає n нулів до поточного рядка, щоб створити стовпчики
//     row.push(0);
//     }
//     // Штовхає поточний рядок, який тепер містить n нулів, до масиву
//     newArray.push(row);
//   }
//   return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix); // [[ 0, 0 ], [ 0, 0 ], [ 0, 0 ]]

// function forecast(arr) {
//   return arr.splice(2, 2);
// }
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // ['warm', 'sunny']

// function forecast(arr) {
//   arr.splice(2, 2);
//   return arr;
// }
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // ['cold', 'rainy', 'cool', 'thunderstorms']

// Копіювання елементів масиву за допомогою slice()
// function forecast(arr) {
//   return arr.slice(2, 4);
// }
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // ['warm', 'sunny']

// Копіювання масиву за допомогою оператора розширення
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//    newArr.push([...arr]); 
//     num--;
//   }
//   return newArr;
// }
// console.log(copyMachine([true, false, true], 2)); // [[ true, false, true ], [ true, false, true ]]

// function quickCheck(arr, elem) {
//   return arr.indexOf(elem) !== -1;
// }
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); // false

// Використан цикл for, щоб повернути відфільтровану версію переданого масиву так, щоб було 
// вилучено будь-який вкладений масив з elem в межах arr.   
// function filteredArray(arr, elem) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // []

// let myNestedArray = [
//   ["unshift", false, 1, 2, 3, "complex", "nested"],
//   ["loop", "shift", 6, 7, 1000, "method"],
//   ["concat", false, true, "spread", "array", ["deep"]],
//   ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
//   ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]]
// ];
// let myNestedArray = [
//   'level 1',                   /* myNestedArray[0]             */
//   ['level 2'],	               /* myNestedArray[1][0]          */
//   [['level 3','deep']],	       /* myNestedArray[2][0][0]       */
//   [[['level 4','deeper']]],    /* myNestedArray[3][0][0][0]    */
//   [[[['level 5','deepest']]]]  /* myNestedArray[4][0][0][0][0] */
// ];

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
// function checkInventory(scannedItem) {
// return foods[scannedItem];
// }
// console.log(checkInventory("apples")); // 25

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
// delete foods.oranges;
// delete foods.plums;
// delete foods.strawberries;
// console.log(foods); // {apples: 25, bananas: 13, grapes: 35}

// Функція повертає true, якщо переданий їй об’єкт містить всі чотири імені: Alan, Jeff, 
// Sarah та Ryan, а в іншому випадку щоб повертала false
// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };
// function isEveryoneHere(userObj) {
//   return userObj.hasOwnProperty("Alan") &&
//   userObj.hasOwnProperty("Jeff") &&
//   userObj.hasOwnProperty("Sarah") &&
//   userObj.hasOwnProperty("Ryan");
// }
// -----------------------------------------
// function isEveryoneHere(userObj) {
//   return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//     userObj.hasOwnProperty(name)
//   );
// }
// console.log(isEveryoneHere(users)); // true

// function countOnline(usersObj) {
//   let result = 0;
//   for (let user in usersObj) {
//     if (usersObj[user].online === true) {
//       result++;
//     }
//   }
//   return result;
// }

// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
// return Object.keys(obj);
// }
// console.log(getArrayOfUsers(users)); // ['Alan', 'Jeff', 'Sarah', 'Ryan']

// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };
// function addFriend(userObj, friend) {
//   userObj.data.friends.push(friend);
//   return userObj.data.friends;
// }
// console.log(addFriend(user, 'Pete')); // ['Sam', 'Kira', 'Tomo', 'Pete']

// function reverseString(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }
// -------------------------------------------
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

// function factorialize(num) {
//   let n = 1;
//   for(let i = 1; i <= num; i++) {
//     n *= i; 
//   }
//   return n;
// }
// console.log(factorialize(5)); // 1*2*3*4*5=120 

// 1️⃣Поверніть довжину найдовшого слова у даному реченні.
// Ваша відповідь повинна бути числом.
// function findLongestWordLength(str) {
//   let arr = str.split(' ');
//   let maxLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > maxLength) {
//       maxLength = arr[i].length;
//     }
//   }
//   return maxLength;
// }
// ------------------------------------------------------------------------------------
// function findLongestWordLength(s) {
//   return s.split(' ').reduce((longest, word) => Math.max(longest, word.length), 0);
// }
// ------------------------------------------------------------------------------------
// function findLongestWordLength(str) {
//   return Math.max(...str.split(" ").map(word => word.length));
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6

// 2️⃣Поверніть масив, який містить найбільше число з кожного наданого підмасиву.
// function largestOfFour(arr) {
//   const results = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largestNumber = arr[i][0];
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largestNumber) {
//         largestNumber = arr[i][j];
//       }
//     }
//     results[i] = largestNumber;
//   }
//   return results;
// }
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [5, 27, 39, 1001]

// 3️⃣Перевірте, чи рядок (перший аргумент, str) закінчується заданим 
// цільовим рядком (другий аргумент, target).
// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target;
// }
// ----------------------------------------------------------------
// function confirmEnding(str, target) {
//   return str.slice(str.length - target.length) === target;
// }
// console.log(confirmEnding("Bastian", "n"));

// 4️⃣Повторіть заданий рядок str (перший аргумент) num разів (другий аргумент). Поверніть порожній рядок, 
// якщо num не є додатним числом.
// function repeatStringNumTimes(str, num) {
//   let accStr = '';
//   for(let i = 0; i < num; i++) {
//     accStr += str
//   }
//   return accStr;
// }
// ----------------------------------------------------------------------------------------------------
// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
// }
// console.log(repeatStringNumTimes("abc", 3)); // "abcabcabc"

// 5️⃣Скоротіть рядок (перший аргумент), якщо він довший за максимальну довжину рядка (другий аргумент). 
// Поверніть скорочений рядок із закінченням ....
// function truncateString(str, num) {
//   return str.length > num ? str.slice(0, num) + "..." : str;
// }
// -------------------------------------------------------------------------------------------------
// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...

// 6️⃣Створіть функцію, яка переглядає масив arr та повертає перший елемент у ньому, який проходить 
// тест на «істинність». Це означає, що даний елемент x пройшов тест на «істинність», 
// якщо func(x) є true. Якщо жодний елемент не проходить тест, поверніть undefined.
// function findElement(arr, func) {
//   return arr.find(func);
// }
// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // 2

// 7️⃣Перевірте, чи значення належить до булевого примітивного. Поверніть true або false.
// function booWho(bool) {
//   return typeof bool === 'boolean';
// }
// console.log(booWho(null)); // false

// 8️⃣Поверніть заданий рядок, де кожне слово починається з великої літери. 
// Переконайтеся, що інші літери написані в нижньому регістрі.
// function titleCase(str) {
//   const arr = str.split(" ");
//   const updatedTitle = [];
//   for (let st in arr) {
//     updatedTitle[st] = arr[st][0].toUpperCase() + arr[st].slice(1).toLowerCase();
//   }
//   return updatedTitle.join(" ");
// }
// ------------------------------------------------------------------------------------------
// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
//     .join(" ");
// }
// console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot

// 9️⃣Вам надано два масиви та індекс.
// Скопіюйте кожний елемент з першого масиву у другий за порядком.
// Розпочніть вставляти елементи з індексу n другого масиву.
// Поверніть отриманий масив. Вхідні масиви повинні залишатись незмінними після запуску функції.
// function frankenSplice(arr1, arr2, n) {
//   return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
// }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // [4, 1, 2, 3, 5, 6]

// 🔟Видаліть всі неправильні значення з масиву. Поверніть новий масив; не змінюйте вихідний масив.
// Неправильні значення в JavaScript: false, null, 0, "", undefined та NaN.
// Підказка: спробуйте перетворити кожне значення у булеве.
// function bouncer(arr) {
//   let newArr = [];
//   for(let i=0; i< arr.length; i++) {
//     if(arr[i]) {
//        newArr.push(arr[i])
//     }
//   }
//   return newArr;
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// function bouncer(arr) {
//   return arr.filter(Boolean);  // створює новий масив, в якому включені тільки ті елементи arr, які є "істинними" за правилами перевірки значень в JavaScript.
// }
// console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]

// 1️⃣1️⃣Поверніть найменший індекс, при якому потрібно вставити значення (другий аргумент) 
// в масив (перший аргумент), після того, як він був відсортований. Поверненим значенням повинне 
// бути число.
// Наприклад, getIndexToIns([20,3,5], 19) має повертати 2, оскільки після сортування масиву він виглядатиме як [3,5,20], 
// а 19 менше за 20 (індекс 2) та більше за 5 (індекс 1).
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) return i;
//   }
//   return arr.length;
// }
// --------------------------------------------------------------------------------------------------------------------
// function getIndexToIns(arr, num) {
//   return arr.filter(val => num > val).length;
// }
// --------------------------------------------------------------------------------------------------------------------
// function getIndexToIns(arr, num) {
//   return arr
//     .concat(num)
//     .sort((a, b) => a - b)
//     .indexOf(num);
// }
// console.log(getIndexToIns([40, 60], 50)); // 1

// 1️⃣2️⃣Поверніть true, якщо рядок у першому елементі масиву містить усі літери рядка у 
// другому елементі масиву.
// Наприклад, ["hello", "Hello"] має повертати true, оскільки всі літери другого рядка наявні 
// у першому, незважаючи на регістр.
// function mutation(arr) {
//   const test = arr[1].toLowerCase();
//     const target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0) return false;
//     }
//     return true;
//   }
// --------------------------------------------------------------------------------------------
// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(function(letter) {
//       return arr[0].toLowerCase().indexOf(letter) !== -1;
//     });
// }
// console.log(mutation(["hello", "hey"])); // false

// 1️⃣3️⃣Напишіть функцію, яка ділить масив (перший аргумент) на групи довжиною size 
// (другий аргумент) та повертає їх як двовимірний масив.
// function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// }
// ------------------------------------------------------------------------------------
// function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size));
//   }
//   return newArr;
// }
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));   // [["a", "b"], ["c", "d"]]

// ❗❗❗Об'єктноорієнтоване програмування (ООП)
// 1️⃣Повторне використання коду з ключовим словом this
// let duck = {
//   name: "Aflac",
//   numLegs: 2,
//   sayName: function() {return "The name of this duck is " + this.name + ".";}
// };

// 2️⃣Визначення функції-конструктора
// Ось приклад конструктора:
// function Bird() {
//   this.name = "Albert";
//   this.color = "blue";
//   this.numLegs = 2;
// }

// 3️⃣Використання конструктора для створення об’єктів
// function Bird() {
//   this.name = "Albert";
//   this.color  = "blue";
//   this.numLegs = 2;
// }
// let blueBird = new Bird();

// 4️⃣Розширення конструкторів для отримання аргументів
// function Bird(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }

// 5️⃣Перевірка конструктора об’єкта за допомогою instanceof
// let Bird = function(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 2;
// }
// let crow = new Bird("Alexis", "black");
// crow instanceof Bird;

// 6️⃣Додайте власні властивості canary до масиву ownProps.
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }
// let canary = new Bird("Tweety");
// let ownProps = [];
// for (let property in canary) {
//   if (canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

// 7️⃣Ітерація через усі властивості
// function Bird(name) {
//   this.name = name;  //own property
// }
// Bird.prototype.numLegs = 2; // prototype property
// let duck = new Bird("Donald");
// // Ось так ви додаєте власні властивості duck до масиву ownProps і 
// // властивості prototype до масиву prototypeProps:
// let ownProps = [];
// let prototypeProps = [];
// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }
// console.log(ownProps); // ["name"]
// console.log(prototypeProps); // ["numLegs"]

// 8️⃣Властивість конструктора
// Напишіть функцію joinDogFraternity, яка приймає параметр candidate та, 
// використовуючи властивість constructor, поверніть true, якщо кандидатом 
// є Dog, в іншому випадку поверніть false.
// function Dog(name) {
//   this.name = name;
// }
// function joinDogFraternity(candidate) {
// if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(joinDogFraternity(Dog)); // false

// 9️⃣Зміна прототипа на новий об’єкт
// Додайте властивість numLegs і два методи (eat() й describe()) до прототипу Dog, 
// встановивши prototype на новий об’єкт.
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype = {
// numLegs: 4, 
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };

// 🔟Не забудьте налаштувати властивості конструктора під час зміни прототипу
// не забудьте власноруч визначити властивість constructor під час налаштування прототипу
// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype = {
//  constructor: Dog,
//   numLegs: 4,
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };

// 1️⃣1️⃣Прототип об’єкта
// Використайте isPrototypeOf, щоб перевірити beagle prototype.
// function Dog(name) {
//   this.name = name;
// }
// let beagle = new Dog("Snoopy");
// Dog.prototype.isPrototypeOf(beagle); // true

// 1️⃣2️⃣Ланцюг прототипів
// function Dog(name) {
//   this.name = name;
// }
// let beagle = new Dog("Snoopy");
// Dog.prototype.isPrototypeOf(beagle);  // показує правильно
// Object.prototype.isPrototypeOf(Dog.prototype);

// 1️⃣3️⃣Успадкування поведінки від супертипу
// function Animal() { }
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
// let duck = Object.create(Animal.prototype); 
// let beagle = Object.create(Animal.prototype); 

// 1️⃣4️⃣Налаштування прототипу дочірнього елемента на екземпляр батьківського елемента
// Змініть код, щоб екземпляри Dog успадковували від Animal.
// function Animal() { }
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
// function Dog() { }
// Dog.prototype = Object.create(Animal.prototype);
// let beagle = new Dog();
// beagle.eat(); // nom nom nom

// 1️⃣5️⃣Скидання властивості успадкованого конструктора
// Змініть код, щоб duck.constructor та beagle.constructor повернули відповідні конструктори.
// function Animal() { }
// function Bird() { }
// function Dog() { }
// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);
// let duck = new Bird();
// let beagle = new Dog();
// // ----------------------------------------------
// Bird.prototype.constructor = Bird;
// duck.constructor;
// Dog.prototype.constructor = Dog;
// beagle.constructor

// 1️⃣6️⃣Додавання методів після успадкування
// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };
// function Dog() { }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };
// let beagle = new Dog();
// beagle.eat(); // nom nom nom
// beagle.bark(); // Woof!

// 1️⃣7️⃣Перевизначення успадкованих методів
// Перевизначте метод fly() для Penguin, щоб він повернув рядок Alas, this is a flightless bird.
// function Bird() { }
// Bird.prototype.fly = function() { return "I am flying!"; };
// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;
// // ----------------------------------------------------------
// Penguin.prototype.fly = function() {
//   return "Alas, this is a flightless bird.";
// };
// // -----------------------------------------------------------
// let penguin = new Penguin();
// console.log(penguin.fly()); // Alas, this is a flightless bird.

// 1️⃣8️⃣Міксини, щоб налаштувати спільну поведінку між непов’язаними об’єктами
// Створіть міксин під назвою glideMixin, який визначає метод під назвою glide. 
// Потім використайте glideMixin, щоб надати bird та boat можливість плавно рухатись.
// let bird = {
//   name: "Donald",
//   numLegs: 2
// };
// let boat = {
//   name: "Warrior",
//   type: "race-boat"
// };
// // ---------------------------------
// let glideMixin = function(obj) {
//   obj.glide = function() {
//     console.log("glide");
//   }
// };
// glideMixin(bird);
// glideMixin(boat);

// 1️⃣9️⃣Замикання, щоб захистити властивості об’єкта від зовнішніх змін
// Змініть оголошення weight у функції Bird, щоб вона стала приватною змінною. 
// Потім створіть метод getWeight, який поверне значення weight 15.
// function Bird() {
//   let weight = 15;
//     this.getWeight = function() { 
//       return weight;
//     };
// }

// 2️⃣0️⃣Вираз негайно викликаної функції (IIFE)
// Перепишіть функцію makeNest та видаліть виклик, щоб це був анонімний 
// вираз негайно викликаної функції (IIFE).
// function makeNest() {
//   console.log("A cozy nest is ready");
// }
// makeNest();
// // -------------------------------------
// (function () {
//   console.log("A cozy nest is ready");
// }) (); // A cozy nest is ready

// 2️⃣1️⃣IIFE для створення модуля
// Створіть модуль під назвою funModule, щоб загорнути два міксини (isCuteMixin та singMixin). 
// funModule має повернути об’єкт.
// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };
// // -------------------------------------------
// let funModule = (function () {
//   return {
//     isCuteMixin: function(obj) {
//       obj.isCute = function() {
//         return true;
//       };
//     },
//     singMixin: function(obj) {
//       obj.sing = function() {
//         console.log("Singing to an awesome tune");
//       };
//     }
//   }
// })();

// ❗❗❗Функційне програмування
// Функційне програмування — це стиль програмування, у якому рішення є простими ізольованими 
// функціями без будь-яких побічних ефектів, які виходять за межі області дії 
// функції: INPUT -> PROCESS -> OUTPUT
// 1️⃣Функції prepareTea та getTea вже визначені у редакторі коду. Викличте функцію getTea, 
// щоб отримати 40 чашок чаю для команди, і збережіть їх у змінній tea4TeamFCC.
// Функція, що повертає рядок, який представляє чашку зеленого чаю
// const prepareTea = () => 'greenTea';
// /*
// Беручи до уваги функцію (що відповідає типу чаю) та потрібну кількість чашок, наступна 
// функція повертає масив рядків (кожен позначає чашку із певним видом чаю).
// */
// const getTea = (numOfCups) => {
//   const teaCups = [];
//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };
// // --------------------------------------------------
// const tea4TeamFCC = getTea(40); 
// console.log(tea4TeamFCC);

// 2️⃣Передача аргументів для уникнення зовнішньої залежності у функції
// Напишіть функцію incrementer так, щоб вона приймала аргумент, а потім 
// повертала значення, збільшене на один.
// Глобальна змінна
// let fixedValue = 4;
// function incrementer(fixedValue) {
// return fixedValue +1;
// }

// 3️⃣Рефакторинг глобальних змінних поза функціями
// Перепишіть код так, щоб глобальний масив bookList не змінювався всередині жодної 
// з функцій. Функція add повинна додати наданий bookName в кінець переданого масиву 
// та повернути новий масив (список). Функція remove повинна видалити наданий bookName 
// з переданого масиву.
// Глобальна змінна
// const bookList = ["The Hound of the Baskervilles", 
//                   "On The Electrodynamics of Moving Bodies", 
//                   "Philosophiæ Naturalis Principia Mathematica", 
//                   "Disquisitiones Arithmeticae"];
// // --------------------------------------------------------------
// function add(arr, bookName) {
// let newArr = [...arr]; 
//   newArr.push(bookName); 
//   return newArr;
// }
// // ---------------------------------------------------------------
// function remove(arr, bookName) {
// let newArr = [...arr];
// if (newArr.indexOf(bookName) >= 0) {
//     newArr.splice(newArr.indexOf(bookName), 1);
//     return newArr; 
// }
// }
// ------------------------------------------------------------------
// function add(list, bookName) {
//   return [...list, bookName];
// }
// //  ------------------------------------------------------------------
// function remove(list, bookName) {
//   return list.filter(book => book !== bookName);
// }
// console.log(add(bookList, "A Brief History of Time")); // ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
// console.log(bookList); // не повинен змінюватись

// 4️⃣Використання методу map для отримання даних з масиву
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];
// // const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
// // -----------------------------------------------------------------------------------------
// const ratings = watchList.map(item => ({
//   title: item["Title"],
//   rating: item["imdbRating"]
// }));
// console.log(JSON.stringify(ratings));

// 5️⃣Імплементація map на прототипі
// Напишіть свій Array.prototype.myMap(), який поводиться як Array.prototype.map(). Ви не повинні 
// використовувати вбудований метод map. Доступ до екземпляра Array можна отримати у методі myMap 
// за допомогою this.
// Array.prototype.myMap = function(callback) {
//   const newArray = [];
//   for(let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this))
//   }
//   return newArray;
// };
// // ---------------------------------------2------------------------------------------------------
// Array.prototype.myMap = function (callback) {
//   const newArray = [];
//   this.forEach((element, index, originalArr) =>
//     newArray.push(callback(element, index, originalArr))
//   );
//   return newArray;
// };

// 6️⃣Використання методу filter для отримання даних з масиву
// Змінна watchList містить масив об’єктів з інформацією про декілька фільмів. Використайте 
// комбінацію filter та map на watchList, щоб отримати новий масив об’єктів із ключами title 
// та rating. Новий масив повинен містити лише ті об’єкти, де imdbRating більше або дорівнює 8.0.
//  Зверніть увагу, що значення rating збережено в об’єкті як рядки і, можливо, вам знадобиться 
//  конвертувати їх у числа, щоб виконати математичні операції.
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];
// const filteredList = watchList
//   .filter(movie => {
//     return parseFloat(movie.imdbRating) >= 8.0;
//   })
//   .map(movie => {
//     return {
//       title: movie.Title,
//       rating: movie.imdbRating
//     };
//   });
// // ----------- 2 -------------------------------
// const filteredList = watchList
//   .filter(movie => movie.imdbRating >= 8.0)
//   .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }));
// // ------------3--------------------------------
// const filteredList = watchList
//   .filter(({ imdbRating }) => imdbRating >= 8.0)
//   .map(({ Title: title, imdbRating: rating }) => ({ title, rating }));
// console.log(filteredList); // [ { title: 'Inception', rating: '8.8' },
//                              // { title: 'Interstellar', rating: '8.6' },
//                              // { title: 'The Dark Knight', rating: '9.0' },
//                              // { title: 'Batman Begins', rating: '8.3' } ]

// 7️⃣Імплементація методу filter на прототипі
// Array.prototype.myFilter = function(callback) {
//   const newArray = [];
//   for(let i = 0; i < this.length; i++) {
//     if (Boolean(callback(this[i], i, this)) === true) {
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// }
// // -------------------2---------------------------------
// Array.prototype.myFilter = function (callback) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this) == true) {
//       newArray.push(this[i]);
//     }
//   }
//   return newArray;
// };

// 8️⃣Повернення частини масиву за допомогою методу slice
// function sliceArray(anim, beginSlice, endSlice) {
// return anim.slice(beginSlice, endSlice);
// }
// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// sliceArray(inputAnim, 1, 3); // ["Dog", "Tiger"]

// 9️⃣Видалення елементів з масиву за допомогою slice замість splice
// метод slice не змінює вихідний масив, а повертає новий, який можна зберегти як змінну.
// метод splice змінює вихідний масив, у якому викликається. 
// function nonMutatingSplice(cities) {
//   return cities.splice(0, 3);
// }
// console.log(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])); // ["Chicago", "Delhi", "Islamabad"].

// 🔟Об’єднання двох масивів за допомогою методу concat
// function nonMutatingConcat(original, attach) {
// return original.concat(attach);
// }
// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingConcat(first, second); // [1, 2, 3, 4, 5, 6]

// 1️⃣1️⃣Додавання елементів в кінець масиву за допомогою concat замість push
// concat надає можливість додавати нові елементи в кінець масиву без побічних ефектів.
// push додає елементи в кінець того масиву, в якому викликаний, тим самим змінюючи його.
// function nonMutatingPush(original, newItem) {
//   return original.concat(newItem);
// }
// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingPush(first, second); // [1, 2, 3, 4, 5, 6]

// 1️⃣2️⃣Використання методу reduce для аналізу даних
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];
// // -----------------1----------------------------------------------------
// function getRating(watchList){
//   const averageRating = watchList
//     .filter(film => film.Director === "Christopher Nolan")
//     .map(film => Number(film.imdbRating))
//     .reduce((sumOfRatings, rating) => sumOfRatings + rating, 0) /
//   watchList.filter(film => film.Director === "Christopher Nolan").length;
//   return averageRating;
// }
// // -----------------2-----------------------------------------------------
// // function getRating(watchList) {
// //   const nolanData = watchList
// //     .reduce((data, { Director: director, imdbRating: rating }) => {
// //       if (director === 'Christopher Nolan') {
// //         data.count++;
// //         data.sum += Number(rating);
// //       }
// //       return data;
// //     }, { sum: 0, count: 0 });
// //   const averageRating = nolanData.sum / nolanData.count;
// //   return averageRating;
// // }
// console.log(getRating(watchList)); // 8.675

// 1️⃣3️⃣Використання функцій вищого порядку (map, filter та reduce) для розв’язання складних задач
// Функція повинна повертати новий масив, який містить квадрати лише цілих натуральних чисел (десяткові 
// числа не є цілими числами), коли до неї передається масив дійсних чисел.
// const squareList = arr => {
// let newArr = arr.filter(num => (num > 0) && (Number.isInteger(num))).map(num => num*num)
//   return newArr;
// };
// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers); // [25, 9]

// 1️⃣4️⃣Сортування масиву в алфавітному порядку за допомогою методу sort
// function alphabeticalOrder(arr) {
//   // -------------1--------------------------
//   // return arr.sort(function(a, b) {
//   //   return a === b ? 0 : a < b ? -1 : 1;
//   // });
//   // --------------2-------------------------
//   return arr.sort((a, b) => a.localeCompare(b));
// }
// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); //  ['a', 'a', 'c', 'd', 'g', 'z']

// 1️⃣5️⃣Повернення відсортованого масиву без зміни вихідного масиву
// sort змінює порядок елементів у вихідному масиві. Іншими словами, він змінює масив.
// Використайте метод sort у функції nonMutatingSort, щоб відсортувати елементи масиву у 
// порядку зростання. Функція повинна повернути новий масив і не змінювати змінну globalArray.
// const globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
// return [].concat(arr).sort((a, b) => a-b);
// }
// console.log(nonMutatingSort(globalArray)); // [2, 3, 5, 6, 9]
// console.log(globalArray); // [5, 6, 3, 2, 9]

//1️⃣6️⃣Розділення рядка на масив за допомогою методу split
// function splitify(str) {
// return str.split(/\W/);
// }
// console.log(splitify("Hello World,I-am code")); // ['Hello', 'World', 'I', 'am', 'code']

// 1️⃣7️⃣Об’єднання масиву в рядок за допомогою методу join
// function sentensify(str) {
// return str.split(/\W/).join(" ");
// }
// console.log(sentensify("May-the-force-be-with-you")); // "May the force be with you"


// 1️⃣8️⃣Застосування функційного програмування для перетворення рядків на URL-слаги
// function urlSlug(title) {
//   return title
//     .trim()
//     .split(/\s+/)
//     .map(world => world.toLowerCase())
//     .join("-");
//   }
// // --------------------------2-------------------------------------------------
// // function urlSlug(title) {
// //   return title
// //     .toLowerCase()
// //     .trim()
// //     .split(/\s+/)
// //     .join("-");
// // }
// console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // a-mind-needs-books-like-a-sword-needs-a-whetstone

// 1️⃣9️⃣Використання методу every для перевірки всіх елементів на відповідність критеріям
// Метод every працює з масивами, щоб перевірити, чи кожен елемент проходить певний тест. Він 
// повертає булеве значення true, якщо всі значення відповідають критеріям або false, якщо навпаки.
// function checkPositive(arr) {
// return arr.every(num => num > 0);
// }
// console.log(checkPositive([1, 2, 3, -4, 5])); // false

// 2️⃣0️⃣Використання методу some для перевірки будь-яких елементів на відповідність критеріям
// Метод some працює з масивами, щоб перевірити, чи будь-який елемент проходить певний тест. Він 
// повертає булеве значення true, якщо значення відповідає критеріям або false, якщо навпаки.
// function checkPositive(arr) {
// return arr.some(num => num > 0);
// }
// console.log(checkPositive([1, 2, 3, -4, 5])); // true

// 2️⃣1️⃣Вступ до каррінгу та часткового застосування
// Арність функції — це кількість необхідних аргументів. Каррінгом функції називають перетворення 
// функції з n-ною арністю у n-ну кількість функцій з арністю 1.
// Каррінг корисний для програми, якщо ви не можете надати всі аргументи до функції одночасно. 
// Ви можете зберегти кожен виклик функції у змінній, що матиме посилання на повернуту функцію, 
// яка прийме наступний аргумент (щойно він буде доступний).
// function add(x) {
// return function(y) {
//     return function(z) {
//       return x + y + z;
//     }
//   }
// }
// console.log(add(10)(20)(30)); // 60

// ❗❗❗Написання алгоритмів середньої складності
// 1️⃣Сума всіх чисел в діапазоні
// function sumAll(arr) {
//   let max = Math.max(arr[0], arr[1]);
//   let min = Math.min(arr[0], arr[1]);
//   let sumBetween = 0;
//   for (let i = min; i <= max; i++) {
//     sumBetween += i;
//   }
//    return sumBetween;
//  }
// --------------2----------------------------
// function sumAll(arr) {
//   let sumBetween = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }
//  console.log(sumAll([1, 4])); // 10

// 2️⃣Різниця між двома масивами
// function diffArray(arr1, arr2) {
//   const newArr = [];
//   function onlyInFirst(first, second) {
//     for (let i = 0; i < first.length; i++) {
//       if (second.indexOf(first[i]) === -1) {
//         newArr.push(first[i]);
//       }
//     }
//   }
//   onlyInFirst(arr1, arr2);
//   onlyInFirst(arr2, arr1);
//   return newArr;
// }
// ------------------------2--------------------------------------
// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }
// ------------------------3---------------------------------------
// function diffArray(arr1, arr2) {
//   return [...diff(arr1, arr2), ...diff(arr2, arr1)];
//   function diff(a, b) {
//     return a.filter(item => b.indexOf(item) === -1);
//   }
// }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]

// 3️⃣Пошук та знищення
// Вам буде надано початковий масив як перший аргумент до функції destroyer, який 
// супроводжується одним або більше аргументами. Видаліть всі елементи з початкового масиву, 
// які мають таке ж значення, як ці аргументи. Функція має приймати невизначену кількість 
// аргументів; таку функцію часто називають варіадичною. Ви можете отримати доступ до додаткових 
// аргументів, додавши залишковий параметр до визначення функції або використавши об’єкт arguments.
// function destroyer(arr, ...valsToRemove) {
//   return arr.filter(elem => !valsToRemove.includes(elem));
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]

// 4️⃣Де ж ти, Ромео?
// Напишіть функцію, яка проглядає масив об’єктів (перший аргумент) і повертає масив усіх об’єктів, 
// які мають однакові пари імен та значень (другий аргумент). Кожна пара імен та значень вихідного 
// об'єкта повинна бути в об’єкті з колекції, якщо він необхідний у повернутому масиві.
// Наприклад,
// whatIsInAName([{ first: "Romeo", last: "Montague" }, 
//                { first: "Mercutio", last: null }, 
//                { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
//               // [{ first: "Tybalt", last: "Capulet" }]
// function whatIsInAName(collection, source) {
//   const sourceKeys = Object.keys(source);
//   // filter the collection
//   return collection.filter(obj => {
//     for (let i = 0; i < sourceKeys.length; i++) {
//       if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
//         return false;
//       }
//     }
//     return true;
//   });
// }
// --------------------2-------------------------------------
// function whatIsInAName(collection, source) {
//   const sourceKeys = Object.keys(source);
//   console.log(sourceKeys);
//   return collection
//     .filter(obj => sourceKeys
//       .every(key => obj[key] === source[key]));
// }
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
//                { first: "Mercutio", last: null }, 
//                { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) );

// 5️⃣Шашличний регістр
// Перетворіть рядок в шашличний регістр. У шашличному регістрі 
// всі-слова-в-нижньому-регістрі-та-розділені-рискою.
// function spinalCase(str) {
//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }
// console.log(spinalCase('This Is Spinal Tap')); // this-is-spinal-tap

// 6️⃣Поросяча латина
// Поросяча латина — це спосіб шифрування англійських слів. Правила такі:
// - Якщо слово починається з приголосного звуку, то перший приголосний або 
// сполучення приголосних переміщуються в кінець слова і додається ay.
// - Якщо слово починається з голосного звуку, то вкінці просто додається way.
// Перекладіть поданий рядок на поросячу латину. Відомо, що при вводі всі рядки 
// будуть складатись з англійських слів у нижньому регістрі.
// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/;
//   let myConsonants = str.match(consonantRegex);
//   return myConsonants !== null
//     ? str
//         .replace(consonantRegex, "")
//         .concat(myConsonants)
//         .concat("ay")
//     : str.concat("way");
// }
// --------------2------------------------------------------------------
// function translatePigLatin(str) {
//   if (str.match(/^[aeiou]/)) return str + "way";
//   const consonantCluster = str.match(/^[^aeiou]+/)[0];
//   return str.substring(consonantCluster.length) + consonantCluster + "ay";
// }
// ---------------3------------------------------------------------------
// function translatePigLatin(str, charPos = 0) {
//   return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
//     ? str + (charPos === 0 ? 'way' : 'ay')
//     : charPos === str.length
//       ? str + 'ay'
//       : translatePigLatin(str.slice(1) + str[0], charPos + 1);
// }
// console.log(translatePigLatin("consonant"));

// 7️⃣Пошук та заміна
// function myReplace(str, before, after) {
//   let index = str.indexOf(before);
//   if (str[index] === str[index].toUpperCase()) {
//     after = after.charAt(0).toUpperCase() + after.slice(1);
//   } else {
//     after = after.charAt(0).toLowerCase() + after.slice(1);
//   }
//   str = str.replace(before, after);
//   return str;
// }
// ---------------------2--------------------------------------------------
// function myReplace(str, before, after) {
//   const strArr = str.split(" ");
//   const wordToReplace = strArr.filter(item => item === before);
//   const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
//     ? after[0].toUpperCase() + after.slice(1)
//     : after[0].toLowerCase() + after.slice(1);
//   return strArr.map(item => (item === before ? replacement : item)).join(" ");
// }
// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); // A quick brown fox leaped over the lazy dog

// 8️⃣Формування пар ДНК
// function pairElement(str) {
//   const matchWithBasePair = function(char) {
//     switch (char) {
//       case "A":
//         return ["A", "T"];
//       case "T":
//         return ["T", "A"];
//       case "C":
//         return ["C", "G"];
//       case "G":
//         return ["G", "C"];
//     }
//   };
//   const pairs = [];
//   for (let i = 0; i < str.length; i++) {
//     pairs.push(matchWithBasePair(str[i]));
//   }
//   return pairs;
// }
// // -----------------------2-------------------------------------------
// function pairElement(str) {
//   const pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   return str
//     .split("")
//     .map(x => [x, pairs[x]]);
// }
// console.log(pairElement("GCG")); // [["G", "C"], ["C","G"], ["G", "C"]]

// 9️⃣Пропущені літери
// Знайдіть пропущену літеру в переданому діапазоні літер та поверніть її.
// Якщо у діапазоні наявні всі літери, поверніть undefined.
// function fearNotLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//     const charCode = str.charCodeAt(i);
//     if (charCode !== str.charCodeAt(0) + i) {
//       return String.fromCharCode(charCode - 1);
//     }
//   }
//   return undefined;
// }
// ------------------2---------------------------
// function fearNotLetter(str) {
//   for (let i = 1; i < str.length; i++) {
//     if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//       return String.fromCharCode(str.charCodeAt(i - 1) + 1);
//     }
//   }
// }
// console.log(fearNotLetter("abce")); // d

// 🔟Сортування масиву
// function uniteUnique(arr) {
//   const args = [...arguments];
//   const result = [];
//   for (let i = 0; i < args.length; i++) {
//     for (let j = 0; j < args[i].length; j++) {
//       if (!result.includes(args[i][j])) {
//         result.push(args[i][j]);
//       }
//     }
//   }
//   return result;
// }
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]

// 1️⃣1️⃣Перетворення символів для HTML
// Перетворіть символи &, <, >, " (подвійні лапки) та ' (апостроф) у відповідне позначення
// символів для HTML.
// function convertHTML(str) {
//   var temp = str.split("");
//   for (var i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case "<":
//         temp[i] = "&lt;";
//         break;
//       case "&":
//         temp[i] = "&amp;";
//         break;
//       case ">":
//         temp[i] = "&gt;";
//         break;
//       case '"':
//         temp[i] = "&quot;";
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }
//   temp = temp.join("");
//   return temp;
// }
// console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana

// 1️⃣2️⃣Сума всіх непарних чисел Фібоначчі
// Маючи додатнє ціле число num, поверніть суму всіх непарних чисел Фібоначчі, 
// які менші чи дорівнюють num. Першими двома числами в послідовності Фібоначчі 
// є 0 та 1. Кожне додаткове число у послідовності є сумою двох попередніх чисел. 
// Першими сімома числами в послідовності Фібоначчі є 1, 1, 2, 3, 5 і 8.
// function sumFibs(num) {
//   let prevNumber = 0;
//   let currNumber = 1;
//   let result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) {
//       result += currNumber;
//     }
//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }
//   return result;
// }
// console.log(sumFibs(4)); // 5

// 1️⃣3️⃣Сума всіх простих чисел
// Просте число — це ціле число, яке більше за 1 та має два дільники: 1 і 
// саме число. Наприклад, 2 є простим числом, оскільки воно ділиться лише 
// на 1 і 2. І навпаки, 4 не є простим числом, оскільки воно ділиться на 1, 2 і 4.
// Перепишіть sumPrimes таким чином, щоб поверталася сума всіх простих чисел, які 
// менші або дорівнюють num.
// function sumPrimes(num) {
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     if (primes.every((prime) => i % prime !== 0))
//       primes.push(i);
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0);
// }
// ------------------------2--------------------------------
// function sumPrimes(num) {
//   function isPrime(num) {
//     const sqrt = Math.sqrt(num);
//     for (let i = 2; i <= sqrt; i++) {
//       if (num % i === 0)
//         return false;
//     }
//     return true;
//   }
//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i))
//       sum += i;
//   }
//   return sum;
// }
// console.log(sumPrimes(10)); // 17

// 1️⃣4️⃣Найменше спільне кратне
// function smallestCommons(arr) {
//   const [min, max] = arr.sort((a, b) => a - b);
//   const numberDivisors = max - min + 1;
//   let upperBound = 1;
//   for (let i = min; i <= max; i++) {
//     upperBound *= i;
//   }
//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     let divisorCount = 0;
//     for (let i = min; i <= max; i++) {
//       if (multiple % i === 0) {
//         divisorCount += 1;
//       }
//     }
//     if (divisorCount === numberDivisors) {
//       return multiple;
//     }
//   }
// }
// console.log(smallestCommons([1, 5])); // 60

// 1️⃣5️⃣Облиште
// Переберіть масив arr та вилучіть кожен елемент, починаючи з першого елемента 
// (індекс 0), допоки функція func не поверне true, коли ітерований елемент пройде крізь.
// Потім поверніть решту масиву, якщо умову виконано. В іншому випадку arr має повертатися 
// у вигляді порожнього масиву.
// function dropElements(arr, func) {
//   while (arr.length > 0 && !func(arr[0])) {
//     arr.shift();
//   }
//   return arr;
// }
// // --------------------------------2------------------------------------------
// function dropElements(arr, func) {
//   return arr.length > 0 && !func(arr[0])
//     ? (dropElements(arr.slice(1), func))
//     : arr;
// }
// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3})); // [3, 4]

// 1️⃣6️⃣Нездоланна сила
// Вирівняйте вкладений масив. Ви повинні врахувати різні рівні вкладення.
// function steamrollArray(arr) {
//   const flattenedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattenedArray.push(...steamrollArray(arr[i]));
//     } else {
//       flattenedArray.push(arr[i]);
//     }
//   }
//   return flattenedArray;
// };
// console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]

// 1️⃣7️⃣Бінарні агенти
// Поверніть переданий бінарний рядок, перекладений англійською мовою.
// Бінарний рядок буде розділений пробілом.
// function binaryAgent(str) {
//   return String.fromCharCode(
//     ...str.split(" ").map(function(char) {
//       return parseInt(char, 2);
//     })
//   );
// }
// // ------------------2----------------------
// function binaryAgent(str) {
//   var biString = str.split(" ");
//   var uniString = [];
//   for (var i = 0; i < biString.length; i++) {
//     uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
//   }
//   return uniString.join("");
// }
// console.log(binaryAgent(
//   "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// )); // Aren't bonfires fun!?

// 1️⃣8️⃣Усе вірно
// Перевірте, чи предикат (другий аргумент) є істинним для усіх елементів колекції (перший аргумент).
// function truthCheck(collection, pre) {
//   let counter = 0;
//   for (let c in collection) {
//     if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
//       counter++;
//     }
//   }
//   return counter == collection.length;
// }
// -----------------------------2----------------------------------------------
// function truthCheck(collection, pre) {
//   return collection.every(obj => obj[pre]);
// }
// console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot")); // false

// 1️⃣9️⃣Додаткові аргументи
// Створіть функцію, яка додає два аргументи. Якщо вказано лише один аргумент, то поверніть функцію, 
// яка очікує один аргумент і повертає суму.
// Наприклад, addTogether(2, 3) має повертати 5, а addTogether(2) має повертати функцію.
// Якщо жоден з аргументів не є дійсним числом, поверніть undefined.
// function addTogether() {
//   const [first, second] = arguments;
//   if (typeof (first) === "number") {
//     if (typeof (second) === "number") return first + second;
//     if (arguments.length === 1) return (second) => addTogether(first, second);
//   }
// }
// console.log(addTogether(2,3)); // 5
// console.log(addTogether(2, "3")); // undefined

// 2️⃣0️⃣Створіть людину
// Заповніть конструктор об’єкта, використовуючи наведені нижче методи:
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// const Person = function(first, last) {
//   let firstName = first;
//   let lastName  = last;
//   //---------------------------------
//   this.getFirstName = function() {
//     return firstName;
//   };
//   //----------------------------------
//   this.getLastName = function() {
//     return lastName;
//   };
//   //-----------------------------------------------------
//   this.getFullName = function() {
//     return this.getFirstName() + " " + this.getLastName();
//   };
//   //-------------------------------------------------------
//   this.setFirstName = function(first) {
//     return firstName = first;
//   };
//   //-------------------------------------------------------
//   this.setLastName = function(last) {
//     return lastName = last;
//   };
//   //-------------------------------------------------------
//   this.setFullName = function(first, last) {
//     this.setFirstName(first);
//     this.setLastName(last);
//     return this.getFullName();
//   };
// };
// const bob = new Person("Bob", "Ross");
// console.log(bob.getFullName()); // Bob Ross

//2️⃣1️⃣Карта орбіт
// Згідно з третім законом Кеплера, орбітальним періодом  T
// двох точкових мас, що обертаються навколо одна одної по круговій або еліптичній орбіті, є:
// T=2πa3μ−−−√ 
// a — велика піввісь орбіти
// μ=GM — стандартний гравітаційний параметр
// G — гравітаційна стала,
// M — маса масивнішого тіла.
// Поверніть новий масив, який трансформує середню висоту елементів у їхні орбітальні 
// періоди (у секундах).
// Масив міститиме об’єкти у форматі {name: 'name', avgAlt: avgAlt}.
// Значення потрібно округлити до найближчого цілого числа. Тіло, навколо якого потрібно 
// обертатися, — Земля.
// Радіус Землі становить 6367.4447 кілометрів, а значення GM Землі — 398600.4418 км3с-2.
// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   const a = 2 * Math.PI;
//   const newArr = [];
//   const getOrbPeriod = function(obj) {
//     const c = Math.pow(earthRadius + obj.avgAlt, 3);
//     const b = Math.sqrt(c / GM);
//     const orbPeriod = Math.round(a * b);
//     return {name: obj.name, orbitalPeriod: orbPeriod};
//   };
//   for (let elem in arr) {
//     newArr.push(getOrbPeriod(arr[elem]));
//   }
//   return newArr;
// }
// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])); // [{name: "sputnik", orbitalPeriod: 86400}]

// ❗❗❗Проєкти «Алгоритми JavaScript та структури даних»
//1️⃣Перевірка паліндрому
// Поверніть true, якщо заданий рядок є паліндромом. В іншому випадку, поверніть false.
// function palindrome(str) {
//  const alphanumericStr = str.replace(/[\W_]/g, '');
//  const lowercaseStr = alphanumericStr.toLowerCase();
//  const reversedStr = lowercaseStr.split('').reverse().join('');
//  return lowercaseStr === reversedStr;
// }
// console.log(palindrome("eye")); // true

//2️⃣Конвертер римських чисел
// Перетворіть подане число в римське число.
// Всі римські числа повинні бути написаними великими літерами.
// function convertToRoman(num) {
//   const romanNumerals = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   let result = '';
//   for (let key in romanNumerals) {
//     while (num >= romanNumerals[key]) {
//       result += key;
//       num -= romanNumerals[key];
//     }
//   }
//   return result;
// }
// console.log(convertToRoman(36)); // XXXVI

//3️⃣Шифр Цезаря
// Одним з найпростіших і найпоширеніших шифрів є шифр Цезаря, також відомий 
// як шифр зсуву. У шифрі зсуву значення літери зміщене на встановлену кількість.
// Часто використовують шифр ROT13, який зміщує літеру на 13 місць. Таким чином, 
// A ↔ N, B ↔ O і так далі.
// Напишіть функцію, яка приймає закодований рядок ROT13 як вхідні дані та повертає декодований.
// Всі літери повинні бути великими. Не замінюйте неалфавітні символи (пробіли, знаки пунктуації), 
// але перенесіть їх.
// function rot13(str) {
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   return str
//     .split('')
//     .map(char => {
//       const isLetter = /[A-Z]/.test(char);
//       if (isLetter) {
//         const index = alphabet.indexOf(char);
//         const newIndex = (index + 13) % 26;
//         return alphabet[newIndex];
//       } else {
//         return char;
//       }
//     })
//     .join('');
// }
// console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP

//4️⃣Валідатор мобільного номера
// Поверніть true, якщо наданий рядок виглядає як дійсний мобільний номер США.
// Користувач може заповнити поле форми в будь-який спосіб, тільки якщо він має формат 
// дійсного номера США. Нижче наведені приклади дійсних форматів номерів США 
// (для інших варіантів посилайтесь на тести, подані нижче):
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// У цьому завданні вам буде надано рядок (наприклад, 800-692-7753 або 8oo-six427676;laskdjf). 
// Ваше завдання — підтвердити або відхилити мобільний номер США на основі будь-якої комбінації 
// форматів, наданих вище. Код зони нумерації є обов’язковим. Якщо надано телефонний код країни, 
// то ви повинні підтвердити, що телефонним кодом країни є 1. Поверніть true, якщо рядок є 
// дійсним мобільним номером США; в іншому випадку поверніть false.
// function telephoneCheck(str) {
//   const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
//   return phoneRegex.test(str);
// }
// console.log(telephoneCheck("555-555-5555")); // true

//5️⃣Касовий апарат
// Розробіть функцію касового апарату checkCashRegister(), яка приймає ціну покупки як 
// перший аргумент (price), оплату як другий аргумент (cash) та суму готівки в касі як 
// третій аргумент (cid).
// cid — це 2D масив, який містить список доступного обігу.
// Функція checkCashRegister() завжди повинна повертати об’єкт з ключем status та ключем change.
// Поверніть {status: "INSUFFICIENT_FUNDS", change: []}, якщо сума готівки в касі менша за здачу, 
// або ви не можете віддати здачу.
// Поверніть {status: "CLOSED", change: [...]} з сумою в касі як значення ключа change, якщо воно 
// дорівнює здачі.
// В іншому випадку, поверніть {status: "OPEN", change: [...]} зі здачею в монетах і банкнотах, 
// в порядку від найбільшої до найменшої, як значення ключа change.
// Грошовий обіг	Сума
// Пенні	$0.01 (ПЕННІ)
// Нікель	$0.05 (НІКЕЛЬ)
// Дайм	$0.1 (ДАЙМ)
// Чверть	$0.25 (ЧВЕРТЬ)
// Долар	$1 (ОДИН)
// П’ять доларів	$5 (П’ЯТЬ)
// Десять доларів	$10 (ДЕСЯТЬ)
// Двадцять доларів	$20 (ДВАДЦЯТЬ)
// Сто доларів	$100 (СТО)
// Подивіться нижче на приклад масиву з сумою в касі:
// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]
// function checkCashRegister(price, cash, cid) {
//   const denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1,];
//   function transaction(price, cash, cid) {
//     let changeNeeded = (cash - price) * 100;
//     let moneyProvided = [
//     ["ONE HUNDRED", 0], 
//     ["TWENTY", 0], 
//     ["TEN", 0], 
//     ["FIVE", 0], 
//     ["ONE", 0], 
//     ["QUARTER", 0], 
//     ["DIME", 0], 
//     ["NICKEL", 0], 
//     ["PENNY", 0],
//   ];
//   let availCash = [...cid].reverse().map(el => [el[0], el[1] * 100]);
//   let sumOfCash = availCash.reduce((a, b) => (a + b[1]),0) / 100;
//   if (sumOfCash === changeNeeded / 100) {
//     return {status: "CLOSED", change: [...cid]};
//   }
//   else for (let i = 0; i < availCash.length; i++) {
//       while (denomination[i] <= changeNeeded && availCash[i][1] > 0) {
//         moneyProvided[i][1] += denomination[i];
//         changeNeeded -= denomination[i];
//         availCash[i][1] -= denomination[i];
//       }
//     };
//     let change = moneyProvided
//     .map(el => [el[0], el[1] / 100])
//     .filter(el => el[1] !== 0);
//     let changeTotal = change.reduce((a, b) => (a + b[1]),0);
//     if (changeTotal < changeNeeded) {
//         return {status: "INSUFFICIENT_FUNDS", change: []};
//     }
//     return {status: "OPEN", change};
//   }
//   let answer = transaction(price, cash, cid);
//   return answer;
// };
// // Приклад виклику функції
// const result = checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]);
// console.log(result); // {status: 'OPEN', change: [[ 'QUARTER', 0.5 ]]}



















// Деструктуризація через залишкові елементи
// function removeFirstTwo(list) {
//   const [, , ...rest] = list;
//   return rest;
// }
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);
// console.log(removeFirstTwo(source));

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
// // const half = (stats) => (stats.max + stats.min) / 2.0; 
// const half = ({max, min}) => (max + min) / 2.0;
// console.log(half(stats)); // 28.015

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   const failureItems = [];
//   for(let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   return failureItems;
// };
// const failuresList = makeList(result.failure);
// console.log(failuresList);

// Синтаксис class для визначення конструктурної функції
// class Vegetable {
//   constructor(name) {
//     this.name = name;
//   }
// };
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // carrot





// Задача з технічної співбесіди
// function isPossibleToCompose(word, letters) {
  //   const wordMap = {}
  //   const lettersMap = {}
    
  //   for (let i=0; i<word.length; i++){
  //     const char = word[i] 
  //     wordMap[char] = (wordMap[char] || 0) + 1  
  //   }
  
  //   for (let i=0; i<letters.length; i++){
  //     const char = letters[i]
  //     lettersMap[char] = (lettersMap[char] || 0) + 1  
  //   }
    
  //   console.log({
  //     wordMap,
  //     lettersMap,
  //   })
  
  //   for (const char in wordMap) {
  //     if (!lettersMap[char] || lettersMap[char] < wordMap[char]) {
  //       return false
  //     }
  //   }
  
  //   return true
  // }
  
  // console.log(isPossibleToCompose('aa', 'abc')) // false
  // isPossibleToCompose('abc', 'dcba') // true
  // isPossibleToCompose('aabbcc', 'bcabcaddff') // true
  
  // потрібно перевірити, чи можна скласти слово word з літер, які є в рядку letters
// function isPossibleToCompose(word, letters) {
//   const foo = function (str) {
//     const obj = {};
//     str.split('').forEach(item => {
//       return obj[item] ? obj[item] += 1 : obj[item] = 1;
//     })
//     return obj;
//   }
//   const objW = foo(word);
//   const objL = foo(letters);
//   return Object.keys(objW).every(item => objW[item] <= (objL[item] || 0))
// }
// console.log(isPossibleToCompose('aa', 'abc')) // false
// console.log(isPossibleToCompose('abc', 'dcba')); // true
// console.log(isPossibleToCompose('aabbcc', 'bcabcaddff')); // true

// написати ф-ю для множення, не використовуючи * та Math
// function multiply(a, b) {
//   let result = 0;
//   const isNegative = b < 0; // Визначаємо, чи b від’ємне
//   b = Math.abs(b); // Беремо модуль b
//   for (let i = 0; i < b; i++) {
//     result += a; // Додаємо a до результату b разів
//   }
//   return isNegative ? -result : result; // Якщо b було від’ємне, інвертуємо результат
// }
// console.log(multiply(3, 4));  // 12
// console.log(multiply(5, -3)); // -15
// console.log(multiply(-2, -6)); // 12
// console.log(multiply(7, 0));  // 0