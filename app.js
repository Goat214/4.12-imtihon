//1
console.log("1-misol");
let a = 122;
let birinchi = (a - (a % 100)) / 100;
let ikkinchi = ((a % 100) - (a % 10)) / 10;
let uchinchi = a % 10;
if (birinchi != ikkinchi && ikkinchi != uchinchi) {
  console.log(true);
} else {
  console.log(false);
}

//2
console.log("2-misol");

let a1 = 2;
let b1 = 5;
let yigindi = 0;
for (let i = a1; i <= b1; i++) {
  yigindi += i;
}
console.log(yigindi);

//3
console.log('3-misol');

function sortN(a, b, c) {
  let array = [a, b, c];
  array.sort((a, b) => a - b);
  console.log(array)
}
sortN(8, 2, 4);
//4
console.log('4-misol');

function sortN(a, b, c) {
  let array = [a, b, c];
  array.sort((a, b) => a - b);
  console.log(array)
}
sortN(8, 2, 4);

//5
console.log("5-misol");
function inverseNumber(N) {
  return Number(N.toString().split("").reverse().join(""));
}
function isPalindrom(n) {
  if (n == inverseNumber(n)) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrom(1221));

//6
console.log('6-misol');
function getDividersNumberAndSum(N) {
    let soni =0
    let yigindi = 0
    for (let i = 0; i <= N; i++) {
        if (N%[i]==0) {
            soni++
            yigindi+=i
        }
        
        
        
    }
    console.log('soni',soni);
    console.log('yigindi',yigindi);
}
getDividersNumberAndSum(12);

//7
console.log('7-misol');

let rightAnswer = {1:"B",2:"A",3:"C",4:"D",5:"B",6:"C",7:"A",8:"d",9:"A",10:"B",}
let myAnswers = {1:"C",2:"A",3:"D",4:"D",5:"B",6:"C",7:"B",8:"C",9:"A",10:"C",}
let counter = 0
for (const key in myAnswers) {
    if (myAnswers[key]==rightAnswer[key]) {
        counter++
    }
  
  
}
console.log(counter);

//8
console.log('8-misol');

const nemeLan = {};
const name = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

for (let i = 0; i < name.length; i++) {
  nemeLan[name[i]] = name[i].length;
}
console.log(nemeLan);
//9
console.log("9-misol");

let bosh = "George Raymond Richard Martin";
let resalt9 = bosh
  .split(" ")
  .map((bosh) => bosh[0])
  .join("");
console.log(resalt9);

//10
console.log("10-misol");

let array = [1, 2, "null", 5, 9];
let juft = [];
let toq = [];
for (let i = 0; i < array.length; i++) {
  if (i % 2 != 0) {
    juft.push(array[i]);
  } else {
    toq.push(array[i]);
  }
}
console.log("juft-", juft);
console.log("toq-", toq);
