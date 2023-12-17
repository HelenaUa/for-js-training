// 🌞🌞🌞🌞🌞Модуль 1.🌞🌞🌞🌞🌞  
// 🌻 Модуль 1 (Урок 1). Змінні та типи.

// const value = prompt('Java Script');
  // if(value === 'js') {
  //   alert('YES');
  // } else {
  //   alert('NO')
  // }
  // console.log(value);

  // const userInput = Number(prompt('Введи число'));
  // console.log(typeof userInput);
  // if(!userInput) {
  //   console.log('це нуль');
  // } else if(userInput > 0) {
  //   console.log('yes');
  // } else {
  //   console.log('no');
  // };

  // const userInput = Number(prompt('Введи число'));
  // console.log(userInput % 2 ? 'не парне' : 'парне');

  // if(!0) {
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

  // let link = 'https://my-site.com/about';
  // if(!link.endsWith('/')) {
  //   link += '/'
  // };
  // console.log(link);

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

// const user = {
//   score: false
// }
// if('score' in user) {
//   console.log('yes')
// } else {
//   console.log('no')
// }

// const user = {
//   score: false
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

// 🌻Модуль 3 (Урок 2). Операції rest та spread.

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
// console.log(min);
// ----------------------------------------------
// const arr1 = [...arr]; // робимо копію масива arr 
// console.log(arr1);
// ----------------------------------------------
// const [first, ...props] = arr; // ...rest
// console.log(first);
// console.log(props);
// for(i = 0; i < props.length; i += 1) {
//   props[i] *= first;
// };
// console.log(props);
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
// const {username = 'User'} = user;
// console.log(username); // User

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

// map
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

// flatMap - щоб розгладити масив
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

// find - дозволяє знайти один конкретний елемент в масиві
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

// findIndex
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

// filter - знаходить всі елементи, які задовольняють вимогам
// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter(item => !(item%2)); // повертає всі парні
// console.log(result); // [2, 4] 

// every - чи всі елементи відповідають умові
// const arr = [1, 2, 3, 4, 5];
// const result = arr.every(item => !(item%2)); 
// console.log(result); // false

// some - хоча б один задовільняє умові
// const arr = [1, 2, 3, 4, 5];
// const result = arr.some(item => !(item%2)); 
// console.log(result); // true

// sort 
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

// reduce
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

// таке може бути на співбесіді
// const str = 'jkfnvtydbvvdfpoimdjkldscvzaa';
// const result = str.split('').reduce((acc, item) => {
//   acc.hasOwnProperty(item) ? acc[item] +=1 : acc[item] = 1;
//   return acc;
// }, {})
// console.log(result); // об'єкт в якого літера: кількість літер в рядку (ключ: значення)

// function logCars(arr) {
//   const result = arr.reduce((acc, item, idx) => {
//     return acc + `${idx+1} - ${item}\n`
// }, arr.length ?`Загальна кількість авто: ${arr.length}\n` : `Вибачте авто немає 🤷‍♀️`)
// return result
// }
// console.log(logCars(['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault']));
// console.log(logCars([]));

// const fruitBasket = ['apple', 'banana', 'orange', 'cherry', 'banana', 'apple', 'orange'];
// const count = fruitBasket.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);


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