// let arr = [];
// let row= prompt("enter the first array row");
// let col = prompt("enter the second array col")
// let input1 = prompt("enter the first array numbers")
// let arr1 = input1.split(',')
// let input2 = prompt("enter the second array numbers")
// let arr2 = input2.split(',')
// // console.log(arr1)
// // console.log(arr2)
// for (let i = 0; i < row; i++) {
//     arr[i] = [];
//     for (let j = 0; j < col; j++) {
//         arr[i][j] = 0;
//     }
// }

// console.log(arr)

// class

// class product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price
//     }
//     display(){
//         console.log(`${this.name}`)
//         console.log(`${this.price}`)
//     }
// }
// const product1 = new product("vishnu",50,)
// product1.display();

// Area

// class Area {
//     circle(r) {
//         return Math.PI * r * r;
//     }

//     square(side) {
//         return side * side;
//     }

//     rectangle(length, breadth) {
//         return length * breadth;
//     }

//     triangle(base, height) {
//         return 1/2 * b * h;
//     }

// }
// class Myclass extends Area{
//      main(){
//         let choice = prompt("\n1 for circle \n2 for square \n3 for rectangle \n4 for triangle")
//         switch(choice){
//             case "1" :
//                 let r = prompt("enter the radius of circle");
//                 console.log(`area of circle = ${this.circle(r)}`)
//                 break;
//             case "2" :
//                 let side = prompt("enter the one side of square");
//                 console.log(`area of square = ${this.square(side)}`)
//                 break;
//             case "3" :
//                 let length = prompt("enter the length of rectangle");
//                 let breadth = prompt("enter the breadth of rectangle")
//                 console.log(`area of rectangle = ${this.rectangle(length,breadth)}`)
//                 break;
//             case "4" :
//                 let b = prompt("enter the base of triangle");
//                 let h = prompt("enter the height of triangle")
//                 console.log(`area of triangle = ${this.triangle(base,height)}`)
//                 break;
//             default:
//                 console.log("invalid choice")
//         }
//     }

// }
// const obj = new Myclass();
// obj.main();

// Remove that element when it occurs
// let arr = [1,2,2,2,3,4]

// let output = [...new Set(arr)]
// console.log(output)

// callback

// function walk(){
//     setTimeout(() => {
//         console.log("anas is walking");
//     },1000)

// }
// function craul(){
//     setTimeout(() => {
//         console.log("amal is crauling")
//     },3000)
// }
// function watching(){
//     setTimeout(() => {
//         console.log("dony is watching")
//     },5000)
// }
// console.log("look what is happeneing")
// walk(craul(),watching());

// let numbers = [1,2,3,4,5]
// let largest = Math.max(...numbers);
// console.log(largest)
//
// function fruits(...foods){
//     const food1 = ["apple","orange","coconut"]
//     return food1
// }
// fruits()

// const person  = {
//     name: "vishnu",
//     age:20,
//     status: true
// }
// console.log(person)

// FETCH

// fetch('https://api.api-ninjas.com/v1/animals?name=cheetah', {
//     headers: {
//         'x-api-key': 'nlGx2mLS0TFjJdqv1o+3Mg==i2UfSEj1leZIz3x3'
//          // Replace with your actual API key
//     }
// })
// .then(Response => Response.json)
// .then(values => console.log(values))
// fetch('https://api.api-ninjas.com/v1/animals?name=cheetah', {
//     headers: {
//         'x-api-key': 'nlGx2mLS0TFjJdqv1o+3Mg==i2UfSEj1leZIz3x3'
//         // Replace with your actual API key
//     }
// })

// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not OK');
//     }
//     return response.json();
// })
// .then(values => {
//     console.log(values[0].name);
// })
// .catch(error => {
//     console.error('Error fetching data:', error);
// });

// let input = prompt("enter a name to check paliandrome")
// let input = "xaxax"
// let a = input.split('').reverse();
// let half = Math.floor(a.length/2)
// let arr = a.filter((_, index) => index <= half);

// let observer = new MutationObserver(mutationRecords => {
//   console.log(mutationRecords); // console.log(the changes)
// });

// // observe everything except attributes
// observer.observe(elem, {
//   childList: true, // observe direct children
//   subtree: true, // and lower descendants too
//   characterDataOldValue: true // pass ol
//   d data to callback
// });

// const person = [
//     {
//         name : 'abc',
//         age : 23,
//     },
//     {
//         name : 'cgj',
//         age : 24,
//     },
//     {
//         name : 'skks',
//         age : 25,
//     }

// ]

// const app = document.getElementById('app')

// const a = person.filter((x) => {
//     return x.age<=24;
// })
// const b = person.map((name,age) => {
//    app.innerHTML = `${name} ${age}`
// })

// let a = "vishnu is a good boy"
// let arr = a.split(" ")

// let output = arr.map((x) => {
//    return x.slice(0,1)+x.charAt(1).toUpperCase()+x.slice(2)
//     }).join(" ")

// console.log(output)
// function x(a,b,c){
// // =

// async function x(){

// }
// const a = x()
// console.log(a)

// let pr  = new Promise((res,rej) => {
//     // let a =true;
//     // if(a==true){
//     //     res("==> success")
//     // }
//     // else {
//     //     let err = Error("error in code")
//     //     rej(err)
//     // }

// })
// pr.then((response) => console.log(response))

// function a(){
//     console.log("hi")
// }
// let abc = setInterval(a,1000)
// console.log(abc)

// setTimeout(() => {
//     clearInterval(abc)
// },20000)

// function* hi(){
//     yield "hi" ;
//     yield "hello ";
//     yield "iam ";
//     yield "vishnu" ;

// }
// for(const num of hi()){
//     console.log(num)
// }

// let a = "how are you"
// let b = a.split(" ")
// let reverse = b.reduce((acc,curr)=>{
//     acc += curr.split("").reverse().join("")+" "
//     return acc
// },"")
// console.log(b)
// console.log(reverse)

// let a = [1,2,3,4,5,6,7]
// let b = a.reduce((acc,curr) => {
//     if(curr%2 !=0){
//         if( curr > acc){
//             acc = curr
//             return acc
//         }
//     }
//     return acc
// },0)
// console.log(b);

// let a = [1,2,3,4,5]
// let b = a.reduce(([large,seclarge],curr) => {
//     if(curr < large){
//         return [curr,large]
//     }
//     else if(curr>large||curr<seclarge){
//          return [large,curr]
//     }
//     return [large,seclarge]
// },[-Infinity,-Infinity])
// console.log(b)

// let a = 50;
// function a(){

//     function b(){
//         console.log(a)
//     }
//     b()
// }
// a()
// const arr = [1,2,9,4,20,10]
// const ouput = arr.reduce(([large,sec,third],curr) => {
//     if(curr > large){
//         // third = sec
//         // sec = large
//         // large = curr
//         return [curr,sec,third]
//     }
//     else if(curr>sec && curr<large){
//         // third=sec
//         // sec=curr
//         return[large,curr,third]
//     }
//     else if(curr>third && curr<sec){
//         return[large,sec,curr]
//     }
//     return [large,sec,third]
//   }  ,[-Infinity,-Infinity,-Infinity])
// console.log(ouput)

// const persons = {a:1,b:2,c:43,d:9}

// let sortedObj = Object.values(persons)
// let ouput = sortedObj.sort((a,b) => )
// console.log(ouput);
// let final = {}
// for(let i =0 ; i < sortedObj.length ; i ++ ){
//     for(let key in persons)
//      if(persons[key] === sortedObj[i]){
//         final[key] = persons[key]
//      }
// }
// console.log(final);

// const val = "my name is vishnu"
// const output = val.split(" ").reduce((acc,curr) => {
//     if(acc.length<curr.length){
//         return curr
//     }
//     else{
//         return acc
//     }
// })
// console.log(output);

// const a = {a:30,b:20,c:80}

// const output = Object.keys(a).reduce((acc,curr)=>a[acc]<a[curr]?curr:acc)

// console.log(output);

// const a = "my name is vishnu"
// const ouput = a.split(' ').map((value,index) => )
// console.log(ouput);
// function hey(){
//     n=50;
//     var n;
//     console.log(n);

// }
// hey();
// const obj = {
//     animal:"Lion",
//     color:"yellow"
// }

// obj.pos="king"
// console.log(obj)

// function reverse(str){
//     let reversed = ''

//     for(let char of str){
//         reversed = char+reversed
//     }

//     return reversed
// }
// console.log(reverse("hey"));

// function reverseInt(n) {
//     let reversed = n.toString().split('').reverse().join('')
//     return parseInt(reversed) * Math.sign(n)
// }
// console.log(reverseInt(123));

// function maxchar(str){
//     let charMap = {};
//     let max =0;
//     let maxChar = ""
//     for(let char of str){
//         if (charMap[char]) {
//             charMap[char] = charMap[char] + 1;
//         } else {
//             charMap[char] = 1
//         }
//     }
//     for(let key in charMap){
//         if(charMap[key] > max){
//             max = charMap[key]
//             maxChar = key
//         }
//     }
//     return maxChar
// }

// console.log(maxchar("hiiid"));

// function capitalize(str){
//     let words = str.split(' ')
//     let result = []
//     for(let val of words){
//         result.push(val[0].toUpperCase() + val.slice(1))
//     }

//     return result.join(' ')
// }

// console.log(capitalize("hi iam vishnu"));

// function median(arr){
//     let sortedArray = arr.sort((a,b) => a-b)
//     let l = sortedArray.length;
//     if(l%2 != 0){
//         let m = Math.floor([l/2])
//         return m
//     }
//     else if(l%2==0){

//         let x = sortedArray[l/2+1]
//         let y = sortedArray[l/2]
//         return (x+y)/2
//     }

// }
// console.log(median([1,2,3,4,5]));

// const arr = [1,2,3,4[23,4,5,64,[245,45,65],44],322]
// const arr = [1, 2, 3, 4, [23, 4, 5, 64, [245, 45, 65], 44], 322];
// const flat = arr.flat(Infinity)
// console.log(flat)

// const arr = [1,2,3,4,5,6,]
// const output = arr.reduce((acc,curr) => {
//     if(curr%2 != 0){
//         acc += curr
//         return acc
//     }
//     return acc
// },0)
// console.log(output)

// const arr = [1, 2, 3, 4, 5, 6,]
// const output = arr.reduce((acc,curr) => {
//     if(curr%5 == 0){
//         acc += curr
//         return acc
//     }
//     return acc
// },0)
// console.log(output);

// function reverse(str){
//     const reversed = str.split("").reverse().join('')
//     return reversed
// }
// console.log(reverse("how are you"));

// const arr = [1,2,3,4,5,6]
// const output = arr.map((value) => value*2)
// const final = output.reduce(([large,sec],curr) => {
//     if(curr>large) {
//         sec = large;
//         large = curr;
//     }
//     else if (curr > sec){
//         sec = curr
//     }
//     return [large,sec]
// },[-Infinity,-Infinity])
// console.log(final);

// const obj = {}
// const output = Object.keys(obj).length === 0
// console.log(output);

// const obj = {
//     name:'nigga',
//     sayhello : function(greet,punch){
//         console.log(greet + punch);

//     }
// }
// const person = {str : "how are you"}
// obj.sayhello.apply(person,["hello","!"])

// const arr = [1,2,3,4,5,6,30]
// let count = 0;
// let output = arr.reduce((acc,curr) => {
//     if(curr%2 == 0 && curr%3 == 0){
//         acc += curr;
//         count++;
//     }
//     return acc
// },0)
// let final = output/count
// console.log(final)

// var longestCommonPrefix = function(strs) {
//     str.forEach((value) => {
//        value.split(',')
//     })
// };
// const str = ["flower","flow","flight"]
// const output = str.map((values => values.split(''))).reduce((acc,curr,index) =>{
//     if(curr[index(1)]===curr[index(2)]){
//         acc = curr[1]+curr[2]
//         return acc.join('')
//     }
//     return acc
// })

// console.log(output);

// const duplicate = {}

// function hasDuplicate(arr){
//     for(let value in arr){
//         if(value in duplicate){
//             return value
//         }
//         duplicate[value] = true
//     }
//     return false
// }
// console.log(hasDuplicate(arr));

// const arr = [1,2,3,5,3,2,3,5,6]
// const ouput = new Set(arr)
// const uniqueArray = Array.from(ouput);
// console.log(uniqueArray);

// const climbStairs = (n, memo = {}) => {
//     if (n in memo){
//         return memo[n]
//     }else{
//     memo[n] = (n-1)+(n-2)
//     return memo
// }
// };

// // Usage example
// console.log(climbStairs(3)); // Should output 3
// console.log(climbStairs(5));
// const coinChange = (coins, amount, memo = {}) => {
//     // Your code here
//     if(coins in memo){
//         return memo[coins]
//     }
//     memo[coins] = coinChange()
// };

// // Usage example
// console.log(coinChange([1, 2, 5], 11)); // Should output 3
// console.log(coinChange([2], 3)); //

// const person = {
//     name:"vishnu",
//     greet : function(){
//         console.log('my name is '+this.name);

//     }
// }
// const result = person.greet.bind(person)
// result()

// let multiply = function(x,y){
//     console.log(x*y);
// }
// let multiplyByTwo = multiply.bind(this,2)
// multiplyByTwo(5)
// multiplyByThree = multiply.bind(this,3)
// multiplyByThree(5)

// let multiply = function(x){
//     return function(y){
//         console.log(x+y);

//     }
// }

// let multiplyByTwo = multiply(2)
// multiplyByTwo(2)

// const arr =[1,2,3,4,4,2,3,46,345,34,]

// const map = {}
// const evenduplicate = []
// const odddupplicate = []
// arr.forEach(item => {
//     map[item] = (map[item]||0)+1
// })

// for(let val in map){
//     if(map[val]>1){
//         const num = Number(val)
//         if(num%2==0) {
//             evenduplicate.push(num)
//         } else {
//             odddupplicate.push(num)
//         }
//     }
// }
// console.log(odddupplicate);
// console.log(evenduplicate);
// const output = [...new Set(arr)];
// console.log(output);

// const arr = [1,2,3,4,5,6]

// function* evenNumber (arr) {
//     for(let a of arr){
//         if(a%2===0){
//             yield a;
//         }
//     }
// }
// const gen = evenNumber(arr)
// console.log(gen);

// for(let key of gen){
//     console.log(key);

// }

// function duplicate(arr) {
//     let count = {}
//     let duplica = []

//     for(let i = 0 ; i< arr.length;i++){
//         if(count[arr[i]]){
//             count[arr[i]] += 1
//         }else {
//             count[arr[i]] = 1
//         }
//     }
//     for(let key in count){
//         if(count[key]>1){
//             duplica.push(Number(key))
//         }
//     }
//     return duplica
// }

// const dup = duplicate([1,2,3,4,4,3,2,,1,1,4,4,2,2])
// console.log(dup);
// const obj = {a:1,b:2,c:3,d:4,e:5}
// const evenobj = []
// const oddobj = []
// const values = Object.entries(obj)
// for(let [key,val] of values ){
//     if(val%2==0){
//         evenobj.push(val)
//     }else{
//         oddobj.push(val)
//     }
// }
// console.log(evenobj);
// console.log(oddobj);

// const str  = "vishnu"

// const reversedArray = str.split('').reverse().join('')
// if(str === reversedArray){
//     console.log('paliandrome');

// }else{
//     console.log('not paliandrome');

// }
// const arr = [1,2,3,4,5,5,6,6,7]
// const output = arr.reduce((acc,curr) => {
//     if(curr>acc){
//         acc = curr
//     }
//     return acc
// },0)
// console.log(output);
// function abc(a){
//     return function(b){
//         return function(c){
//             return a*b*c
//         }
//     }
// }
// const mulitply = abc(1)(2)(3)
// console.log(mulitply);

// function expensiveTask(num){
//     for (let i = 0; i < 600000000; i++){}
// }

// const arr = [1,2,3,4,5,6]
// const mid = arr.length/2
// const fhalf = arr.slice(0,mid)
// const shalf = arr.slice(mid)
// console.log(fhalf,shalf);
// const arr = [1,2,3,34,2,43,4,5,2,3,4,5,]
// const map = {}
// for(let val of arr) {
//     if(map[val] == )
// }

// Array.prototype.myForEach = function (callback) {
//     for (let index = 0; index < this.length; index++) {
//         callback(this[index])
//     }
// }
// const arr = [1,2,3,4,5,]
// const output = arr.myForEach((val)=>)

// Array.prototype.myMap = function(callback) {
//     const result = []
//     for (let index = 0; index < this.length; index++) {
//         result.push(callback(this[index],index,this))
//     }
//     return result
// }
// const arr = [1,2,3,4,6,]
// const output = arr.myMap((val) => val*6)
// console.log(output);
// const arr = [1,2,3,4,4,]
// Array.prototype.mypop = function(){
//     let mid = arr.length-1

// }
// const str = "hi i am vishnu"
// const split = str.split('')
// const output = split.filter((val) => {
//     if(val != "a" && val != "e" && val != "i" && val != "o" && val != "u"){
//         return val
//     }
// })

// console.log(output.join(''));

// const arr = [1,2,3,4,5,6]
// const mid = arr.length/2
// for (let index = 0; index < arr.length; index++) {
//     if(index<= mid){
//         arr.splice(index,1)
//     }

// }
// console.log(arr);
// const obj = {
//     "key1":1020,
//     "key2":1420,
//     "key3":1530,
//     "key4":1560,
//     "key5":1050,
// }
// let max =0
// for(let val in obj){
//     console.log(obj[val]);
// if(obj[val]>=max){
//     max=obj[val]
// }
// }

// console.log(max);

// const obj1 = {
//     "key1":1020,
//     "key2":1420,
//     "key3":1530,
// }
// const obj2 = {
//     a:3,
//     b:4,
//     c:5,
//     d:6,
// }

// const ouput  = {...obj2,...obj1}
// console.log(ouput);

// const obj = {
//     1:"vishnu",
//     2:"nuaim",
//     3:"anas",
//     4:"athul",
// }
// const obej
// const obej
// const obej

// function* print ( target) {
//     for (let index = target; index > 0; index--) {
//         yield index

//     }
// }
// const iterator = print(5)
// const iterate = setInterval(() => {
//     const nextValue = iterator.next()
//     if(nextValue.done){
//         clearInterval(iterate)
//     }
//     else{
//         console.log(nextValue.value);

//     }
// }, 2000);
// async function* print(target){
//     for (let index = 0; index < target; index++) {
//         await new Promise ((resolve) => {
//             setTimeout(resolve,2000)
//         })
//     }
// }
// const iterator = print(5)
// // const
// let height;
// height = height??100
// console.log("height = 100");
// height = 50
// height = height ?? 100
// console.log(height);
// height = null
// console.log(height);

// const a = 5
// const b = 3
// const output = a | b
// console.log(output);

// const obj = [
//     {a:1,b:2,c:3},
//     {D:4,E:5,F:6},
//     {G:7,H:9,I:11},
//     {J:8,K:10,L:},
// ]
// const odd = []
// obj.forEach((val) => {
//     for (const key in val) {
//         if(val[key]%2==0){
//             odd.push(val[key])
//         }
//     }
// })
// console.log(odd);
// let obj = {
//     "key1":1,
//     "key2":2,
//     "key3":3,
//     "key4":4,
// }
// let max = -Infinity
// let maxKey = ""
// for(let key in obj){
//     if(obj[key]>max){
//         max = obj[key]
//         maxKey = key
//     }
// }
// delete obj[maxKey]

// console.log(obj);
// let arr = "hi i am vishnu"
// let output = arr.split(' ')
// // console.log(output)
// let result = output.reduce((acc,curr) => {
//     if(curr.length > acc.length){
//         acc = curr
//     }
//     return acc

// },"")
// console.log(result);
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let result = new Set(arr)
// console.log(result);
// const arr = [1,2,3,]
// let sum = 0
// let leng = arr.length-1
// for (const element of arr) {
//     sum += element
// }
// console.log(sum);

// const output = sum/leng
// // console.log(output);
// let obj = {
//     name:"vishnu"
// }
// let id = Symbol("id")
// obj[id] = 1
// // console.log(obj[id]);
// function Reverse(n) {
//     const reversed = n.toString().split("").reverse().join('')
//     return parseInt(reversed)*Math.sign(n)
// }
// console.log(Reverse(53542));
// function isPaliandrome(str) {
//     const number = str.toString()
//     const Paliandrome = number.split('').reverse().join('')
//     if(str == Paliandrome){
//         console.log("it is paliandrome");
//     }else{
//         console.log("not paliandrome");
//     }
// }
// isPaliandrome(121)
//
// class animal{
//     constructor(name,ability){
//         this.name = name
//         this.ability = ability
//     }
//     indroduce(){
//         console.log(`Animal ${this.name} have the ability to ${this.ability}`);
//     }
// }
// const animal1 = new animal("cheetah","run fast")
// animal1.indroduce()
// const arr = [1,2,3,-2,-5,-6,7]
// for (let index = 0; index < arr.length; index++) {
//     arr[index] = arr[index] * Math.sign(arr[index])
// }
// console.log(arr);
// const arr = ["vishnu",11,"athul",22]
// for (let index = 0; index < arr.length; index++) {
//     if(typeof arr[index] === 'string'){
//         arr1.push(arr[index])
//     }
// }
// console.log(arr1);
// const a = arr.filter((item) =>typeof item === 'string')
// console.log(a);
// function print(){
//     setTimeout(() => {
//         console.log("hi");
//         print()
//     }, 1000);

// }
// print()
// let str = "hi i am vishnu"
// let split = str.split(' ')
// let output = split.reduce((acc,curr) => {
//     if(curr.length>acc.length){
//         acc = curr
//     }
//     return acc
// })
// console.log(output);

// let arr = [1,2,3,4,5,6,7]
// let output = arr.filter((item) => {
//     return item%2!=0
// }).reduce((acc,curr) => {
//     if(curr>acc){
//         acc = curr
//     }
//     return acc
// });

// console.log(output);

// const obj = {
//     name:"vishnu",
//     age:20,
// }
// const {age} = obj
// console.log(age);
// const arr = ["vishnu","hello","average","hai"]
// const [firstname,name,...names] = arr
// console.log();
// const arr = [1,2,3,4,54,5,6,676,10,20]
// let output = arr.reduce((acc,curr) => {
//     if(curr%5==0){
//         acc += curr
//     }
//     return acc
// },0)
// console.log(output);

// function Reverse (str){
//     return str.split('').reverse().join('')
// }
// console.log(Reverse("eeebab uoy kcuf"));

// let arr = [1,2,3,4,5,6,7]
// let odd = []
// let even = []
// let output = arr.map((curr) => {
//     if(curr%2 != 0){
//         odd.push(curr*curr)
//     }
//     else{
//         even.push(curr*curr*curr)
//     }
// },)
// console.log(odd);
// console.log(even);
// let arr = [1,2,3,3,54,5,6,6,7,]
// for (let index = 0; index < arr.length; index++) {
// if(arr[index]%2==0){
//     arr.splice(index,1)
//     index--;
// }
// }
// // console.log(arr);
//  let arr = [1,2,3,4,5,6]
//  let mid = arr.length
//  let output = arr.reduce((acc,curr) => {
//     acc+=curr
//     return acc
//  },0)
//  console.log(output/mid);

// function Duplicate(str){
//     const hash = {}
//     for (const key of str) {
//         if(hash[key]){
//             hash[key] +=1
//         }
//         else{
//             hash[key] = 1
//         }
//     }
//     return hash
// }

// console.log(Duplicate("abccd"));

// const obj = {
//     a:1,
//     b:4,
//     c:6,
//     d:8,
//     e:5,
// }
// sortedobj = {}
// const output = Object.values(obj).sort((a,b) => a-b)
// for(let val of output){
//     for(let key in obj){
//         if(val===obj[key]){
//             sortedobj[key] = val;
//             // delete obj[key]
//             break;
//         }
//     }
// }
// console.log(sortedobj);
// let arr = [1,3,4,5,6,7,8]
// const output = arr.reduce((acc,curr) => {
//     if(curr>acc){
//         acc =curr
//     }
//     return acc
// },0)
// console.log(output);

// let arr = [5,4,3,2,6,7]
// let output = arr.sort((a,b) => b-a)
// console.log(output);
// const arr = [1,2,[3,4,5,[6,7,8],2],2,4]
// const output = arr.flat(Infinity)
// console.log(output);
// let array = output.filter((item) => {
//     if(item%2===0){
//         return item
//     }
// })
// const final = [...new Set(array)]
// console.log(final);
// const arr = [1,2,3,4,5,2,1,1,3,4,]
// let output = arr.filter((item,index,arr) => {

//     if(arr.indexOf(item) === index){
//         return item
//     }
// })
// console.log(outpu+-t);
// const arr = [1,2,3,4,4,2,1,1,3]
// let ar1 = []
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//         if(arr[i] != arr[j]){
//             ar1[i] = arr[i];
//         }
// }
// }
// console.log(ar1);

// const str = "hi i am vishnu"
// const split = str.split(' ')
// for (let index = 0; index < split.length; index++) {
//     split[index] = split[index][0].toUpperCase()+split[index].slice(1)
// }
// let cap = split.join(' ')
// console.log(cap);
// const str = "hi iam vishnu"
// const split = str.split(' ')
// let arr = []
// for(let word of split){
//     arr.push(word[0].toUpperCase() + word.slice(1) )
// }
// console.log(arr);
// const obj = {
//     name:"vishnu",
//     sayHello:function(greet) {
//         console.log(`${greet} ${this.name} `);
//     }
// }
// obj.sayHello.apply(obj,["hi"])
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const output = arr.reduce(
//   ([large, sec], curr) => {
//     if (curr % 2 != 0 && curr > large) {
//       sec = large;
//       large = curr;
//     } else if (curr % 2 != 0 && curr < large && curr > sec > curr) {
//       sec = curr;
//     }
//     return [large, sec];
//   },
//   [-Infinity, -Infinity]
// );
// console.log(output);
// const obj = {
//     a:12,
//     b:343,
//     c:34551,
//     d:123,
//     e:123432,
// }
// const output = Object.entries(obj).reduce((acc,[key,value]) =>{
//     if(value>acc.value){
//         return {key,value}
//     }
//     return acc
// },{key:null,value:-Infinity})
// console.log(output);
// delete obj[output.key]
// console.log(obj);
//  let arr = [1,2,3,4,5,6]
//  let mid = arr.length/2
//  let fhalf = arr.slice(mid)
//  let shalf = arr.slice(0,mid)
//  console.log(fhalf);
//  console.log(shalf);
// const obj = {
//     a:1,
//     a:1,
//     a:1,
//     a:1,
//     a:1,
// }

// const obj = {a:1}
// const a = Object.keys(obj).length==0?true:false
// console.log(a);
// const arr = [1]
// const a = arr.length==0?true:false
// console.log(a);

// const a = new Promise((resolve) => {
//     resolve("hi")
// }) 
// a.then((data) => {
//     console.log(data);
    
// })

// const arr = [1,2,3,4,5,6,7,8]
// const output = arr.reduce(([small,sec],curr) =>{
//     if(curr<small){
//         sec = small
//         small = curr
//     }
//     else if (curr<sec && curr!=small){
//         sec = curr 
//     }
//     return [small,sec]
// },[Infinity,Infinity])
// // console.log(output);
// const obj = {
//     name:"vishnu",
//     age:20
// }
// const handler = function (obj,){

// }
// const arr = [1,2,3,4,5,6]
// const obj = {
    //     0:"something",
    //     1:"else",
    //     2:"hihello",
    // }
    
    // let output = arr.concat(obj)
    // console.log(output);
    
// const arr = [1,2,3,4,5,6,7]
// const output = arr.map((item,index,array) => {
//     console.log(`items:${item}:
//          indexes : ${index}`);
    
// })
// console.log(arr.indexOf(1));
// console.log(arr.includes(2));
// console.log(arr.lastIndexOf());
// const obj = [
//     {
//         id:1,name:"vishnu",
//     },
//     {
//         id:2,name:"athul",
//     },
//     {
//         id:3,name:"anas",
//     },
// ]

// const output = obj.find((item) => item.id == 3)
// console.log(output);

// // const arr = [1,2,3,4,5,6,7,8]
// const obj = {a:1,b:2,c:3,d:4,f:6}
// const obj1 = {a:2,b:8,c:3,f:6}

// // const output = {c:3}


// function freq(obj,obj1) {
//     let map = {}
//     for (const key in obj) {
//         if(obj[key] === obj1[key]){
//             map[key] = obj[key]
//         }
//     }
//     return map
// }
// console.log(freq(obj,obj1));

// const obj = {a:3,b:5,c:7,d:30}
// function prime(obj) {
//     let map = {}
//     for(let key in obj) {
//         if(obj[key]<2){
//             return false;
//         }
//         for (let index = 2; index < Math.sqrt(obj[key]); index++) {
//             if(obj[key]%index==0){
//                 return false
//             }
//         } 
//         map[key] = obj[key]
        
//     }
//     return map
// }
// console.log(prime(obj));
//  const arr = [1,2,3,4,5,6,7]
// const obj = {name:"vishnu",total:0,balls:{type:"leather"}}
// const other = {...obj} 
// other.balls.type  = "tennis"
// console.log(other);
// console.log(obj);

// const obj = {
//     name:'vishnu',
//     sayhello : function (greet){
//         console.log(`${greet} ${this.name}`)
//     }
// }
// const binddd = obj.sayhello.bind(obj,"hai")
// const array = [1,2,3,4,5,6,7]
// const smallest  = array.reduce(([first,sec], curr) => {
//     if(curr<first){
//         sec = first
//         first = curr
//     }else if (curr<sec && curr>first){
        
//         sec = curr
//     }
//     return [first,sec]
// },[Infinity,Infinity])
// console.log(smallest)
// let arr = []
// let size = 0
// for(let i = 1 ; i<100;i++){
//     if(i%3==0){
//         arr[size] = i
//         size++;
//     }
// }
// console.log(arr);
// const str = "hi i am vishnu"
// const splitted = str.split(' ')
// const output = splitted.reduce((acc,curr) => {
//     if(curr.length>acc.length){
//         acc = curr
//     }
//     return acc
// },"")
// console.log(output);
// const array = [1,2,3,4,5,6,7]
// const output = array.map((val) => val*3)
// console.log(output);
// const obj = {
//     name:'vishnu',
//     age:20,
//     state:'kerala'
// }
// const { name,age} = obj
// console.log(name,age);
// const arr = [2,3,4,5,6,7,10]
// const output = arr.reduce((acc,curr) => {
//     if(curr<acc){
//         acc = curr
//     }
//     return acc
// },Infinity)
// console.log(output);
// const str = "hello world"
// let count = 0
// const split = str.split('')
// split.forEach((val) => {
//     if(val=='a'||val=='e'||val=='i'||val=='o'||val=='u'){
//         count ++;
//     }
// })
// console.log(count);
// const arr = [1, [2, 3], [4, 5]];
// const output = arr.flat(Infinity)
// console.log(output);
// const str = 'javascript'
// const output = str.split('').reverse().join('')
// console.log(output);
// const arr = [1, 2, 3, 4, 5, 6];
// const output = arr.filter((val) => val%2==0 )
// console.log(output);
// const str = 12321;
// function paliandrom(str){
//     if(typeof str==='string'){
//     let reverse = str.split('').reverse().join('')
//     if(str === reverse){
//         return true
//     }else{
//         return false
//     }
//  }
//  else if(typeof str === 'number'){
//     let string = str.toString()
//     let reverse = string.split('').reverse().join('')
//    return string===reverse

// }
// }
// const output = paliandrom(str)
// console.log(output)
// const arr = [1, 2, 3, 4];
// const output = arr.reduce((acc,curr) => {
//     acc += curr
//     return acc
// },0)
// console.log(output);
// const str = "hello world";
// const capital = str.split(' ').map((val) => {
//     return val.charAt(0)+val.charAt(1)+val.charAt(2).toUpperCase() + val.slice(3)
// }).join(' ')
// console.log(capital);
// const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 20 },
//     { name: "Tom", age: 30 }
// ];

// people.sort((a,b) => a.age-b.age)
// console.log(people);
// function abc () {
//     console.log("hoi");
    
// }
// function bb(cb){
//     cb()
//     console.log("worked");
//     cb
// }
// bb(abc)
// const obj = {
//     a:10,b:20,c:221
// }
// let sum =0
// for(let key in obj){
//     if(obj[key]%2==0){

//     }
// }
// console.log(sum);
// const obj = {
//     a:10,b:20,c:30,d:40
// }
// let max = 0
// let keys = 0
// for(let key in obj){
//     if(obj[key]>max){
//         max = obj[key]
//         keys = key
//     }
// }
// console.log(keys,max);
// const arr = [1,2,3,4,5,]
// const arr1 = [1,8,2]
// let output = arr.filter((item) => arr1.includes(item))
// // console.log(output);
// let final = [...new Set(output)]
// console.log(final);
// const obj = {
//     a:1,b:2,c:3,d:4
// }
// let max = 0
// for (const key in obj) {
//     if(obj[key]%2!=0){
//         max = obj[key]
//     }
// }
// console.log(max);
// const input = ""


// function paliandrom(input){
//     let str = input.toString()
//     const len = str.length
//     for(let i =0 ;i < len/2 ; i++){
//         if(str[len -1-i] === str[i]){
//             return true
//         } else {
//             return false
//         }
//     }
// }
// console.log(paliandrom(input));

// const arr = [1,2,3,3,1,1,3,4,5,67]
// const map = {}
// for (const val of arr) {
//     if(map[val]){
//         map[val] += 1
//     }else{
//         map[val] = 1
//     }
// }
// for(let key in map){
//     if(map[key]<2){
//         console.log(key);
        
//     }
// }
// console.log(map);

// class animal {
//     constructor(name){
//         this.name = name
        
//     }
//     speak(){
//         console.log(`${this.name}animal can bark`);
//     }
// }
// let dog = new animal('dog')
// let lol = new animal('dog1')
// dog.speak()
// lol.speak()
// lol.speak()
// lol.speak()
// function x(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(x(1)(2)(3));
// console.log(x(3)(56)(
    // 8));
// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
// }
// let last;
// for(let key in obj){
//     last = key
// }
// delete obj[last]
// console.log(obj);

// // let keys = Object.keys(obj)
// // let last = keys[keys.length-1]
// // delete obj[last]
// // console.log(obj);
// const str = "hi i am vishnu"
// let count = 0
// for(let i = 0 ; i< str.length ; i++){
//     if(str[i] ==="a"||str[i] ==="e"||str[i] ==="i"||str[i] ==="o"||str[i] ==="u"){
//         count++
//     }
// }
// console.log(count);
// const str = "name is vishnu"
// const output = str.split(' ').map((val) => val.split('').reverse().join('')).join(' ')
// console.log(output);
// const str = "hi my name is vishnu"
// const output = str.split(' ').map((val) =>  val.charAt(0) + val.charAt(1) + val.charAt(2).toUpperCase() + val.slice(3)).join(' ')
// console.log(output);
// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
// }
// const arr = Object.keys(obj)
// let last = arr[arr.length-1]
// delete obj[last]
// console.log(obj);
// const str = "hello bro goodmorning"
// const output = str.split(' ').map((val) => val.split('').reverse().join('')).join(' ')
// console.log(output);
// const obj = {
//     a:1,
//     b:3,
//     c:5,
//     d:7,
// }
// const arr = Object.entries(obj)
// // console.log(arr.pop());
// arr.pop()
// const output = Object.fromEntries(arr)
// console.log(output);

// const last = arr.length-1
// const output = arr.()
// console.log(output);
// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
// }
// const arr = Object.values(obj)
// let large = 0
// let sec = 0
// let seckeys = -Infinity
// let keys = -Infinity
// for(let key in obj){
//     if(obj[key]>large){
//         seckeys = keys
//         sec = large;
//         large = obj[key];
//         keys = key
//     }else if(large>obj[key] && sec<obj[key]){
//         seckeys = key
//         sec = obj[key]
//     }
    
// }
// console.log(sec,seckeys);

// const arr = [1,2,3,4,5,6,7,8,8,9,9,87,]
// const odd = arr.filter((val) => val%2!=0)
// // console.log(odd);
// const check = new Set()
// const dupli = []
// odd.forEach((curr,index) =>{
//     if(check.has(curr)){
//         dupli.push(curr)
//     }else{
//         check.add(curr)
//     }
// })

// const large = dupli.reduce((acc,curr)=> acc<curr?curr:acc)

// console.log(large);
// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:3,
//     e:4,
//     f:4,
// }
// const map = {}
// const duplicate = []
// for(let key in obj){
//     const val = obj[key]
//     if(map[val]){
//         map[val]++;
//     }else{
//         map[val] =1
//     }
// }
// console.log(map);
// for(let val in map){
//     if(map[val]>1){
//         duplicate.push(val)
//     }
// }
// console.log(duplicate);

// const target = {
//     name:"vishnu",
//     age:20
// }
// const handler = {
//     get: function(obj,val){
//         if(val in obj){
            
//         }
//     }
// }
// function hai(name){
//     console.log(`hello ${name}`);
// }
// function hello(callback){
//     let name = "vishnu"
//     callback(name)
// }
// hello(hai)
// let prom = new Promise((rej,res) => {
//     const arr = [1,2,3,4,5]
//     setTimeout(() => {
//         if(arr.includes(3)){
//             res(true)
//         }else{
//             rej(new Error("error"))
//         }
//     },2000);
// })
// prom.then((data) =>{
//     console.log(data);
// })
// prom.catch((err)=>{
//     console.log(err);
    
// })
// const obj = {
//     a:1,
//     b:12,
//     v:123,
//     s:322,
//     d:767,
// }
// const arr = Object.values(obj)
// var removeTrailingZeros = function (num) {
//     const split = num.split('')
//     split.forEach((val) => {
//         if (split.length - 1 === 0) {
//             pop.split(val)
//         }
//     })
//     return split
// };
// removeTrailingZeros("175623700")
// function x(a){
//     return function y(b){
//         return a+b
//     }
// }
// console.log(x(1)(3));
// const arr = [1,2,3,4,5,6,8,7,65,]
// const array = []
// const output = arr.reduce((acc,curr) => {
//     if(curr>5){
//         array.push(curr)
//     }
// })
// console.log(array);

// function* evennumber(num){
//     for(let val of num){
//         if(val%2==0){
//             console.log(true);
//             yield val
//         }
//     }
// }
// const even = evennumber([1,2,3,4,5,6,7])

// console.log(even.next().value);
// console.log(even.next().value);
// console.log(even.next().value);
// const arr = [1,2,3,4,5,6,7,8]
// const output = arr.every((val) => {
//     if(val>){
//         return val
//     }
// })
// console.log(output);
// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
// }
// let large = -Infinity
// let seclarge = -Infinity
// let largekey,seckey;
// const arr = Object.values(obj)
// for (const val of arr) {
//     if(val>large){
//         seckey = largekey
//         largekey = 
//         seclarge = large
//         large = val
//     }
//     else if(val>seclarge && val<large){
//         seclarge = val
//     }
// }
// const arr = [1,2,3,4,5,6,7]
// const output = arr.reduce((acc,curr) => {
//     if(curr>acc && curr%2==0){
//         acc = curr
//     }
//     return acc
// },-Infinity)
// console.log(output);
// function x(){
//     return "vishnu"
// }
// function y(greet){
//     let name = "vishnu"
// }
// y(x())\
// function x(greet){
//     console.log(`${greet}`);
    
// }
// function y(name){
//     return name    
// }
// x(y('vishnu'))
// const obj = {
//     name:"vishnu",
//     sayHello:function(greet){
//         console.log(`hello ${greet}`);
        
//     }
// }
// const output = obj.sayHello.bind(obj,'vishnu')
// output()
