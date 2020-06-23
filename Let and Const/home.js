// so on global scope "let" and "var" are pretty much the same

var a= "Test1";

let b = "Test2";

console.log(a)
console.log(b)


// ******************************************************************
// here it will print 50 for both
function TestVar(){
    var a = 30
    if(true){
        var a = 50
        console.log(a)
    }
    console.log(a)
}


TestVar();


// here it will print 50 for inner if condition and 30 for outer console.log() because the scope of a=50 is inside
// that if condition only
function TestLet(){
    let a=30
     if (true) {
        let a = 50
        console.log(a)
     }
     console.log(a)
}

TestLet();


// ******************************************************************

//

for(var i=0;i<10;i++){
    console.log(i)
}

// here it will print i=10 because the scope of i is outside for loop
// console.log(i)

// ******************************************************************


for(let i=0;i<10;i++){
    console.log(i)
}

// // here it will give error because scope of i is till inside for-loop
// console.log(i)


// ******************************************************************


// const will be constant that means it will not be variable i.e. if we want to set that again we will have issues
const colors = [];

colors.push('red');
colors.push('blue');

colors = "green";
console.log(colors)
