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

const fruitBasket = ['apple', 'banana', 'orange', 'cherry', 'banana', 'apple', 'orange'];
const count = fruitBasket.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count);











// 🔥🔥🔥🔥🔥FreeCodeCamp🔥🔥🔥🔥🔥
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