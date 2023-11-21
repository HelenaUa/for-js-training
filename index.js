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

function foo(callback) {
  callback(10);
}
function logger(value) {
  console.log(value);
}
foo(logger); // так повинна передаватися ф-ція logger як ф-ція-колбек




























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