// document.getElementById("count-el").innerText = 6

// let count = 0;

// //console.log(count);

// let myAge=25;

// //console.log(myAge);

// // cmd+k+c
// // let firstBatch = 5
// // let secondBatch = 7
// // let count = firstBatch + secondBatch
// // console.log(count)

// let myAge = 25;
// let dogratio =7;

// let dogage= myAge*dogratio;

// console.log(dogage);

// function increment() {
//     console.log("Increment Button was clicked");

// }


// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// let loglaptime = () => {
//     let totaltime = lap1 + lap2 + lap3;
//     console.log(totaltime);
// };

// loglaptime();

// let lapcompleted = 0;

// let incrementLap = () => {
//     lapcompleted += 1;
//     //console.log(lapcompleted);
// };

// incrementLap();
// incrementLap();
// incrementLap();
// console.log(lapcompleted);

let countEl = document.getElementById('count-el'); //pass in argument
console.log(countEl);
let count = 0

function increment() {
   // console.log("clicked")
    count=count + 1;
    countEl.innerText = count;
    //return count;
    console.log(count);
}
saveEl= document.getElementById('save-btn');
function save() {
    alert("logout and saved as "+ count);

    countEl.innerText=count;
    alert(count);
}

let welcomeEl = document.getElementById('welcome-el');

let name = "Mahadi !";
let greeting = "Welcome to the app, ";

welcomeEl.innerText = greeting+ name;
welcomeEl.innerText+="🤖"

