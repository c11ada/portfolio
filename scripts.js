// alert("hello world");

// document.write("<h1>Hello, I’m Muhammad.</h1>");

// var answer = prompt("hello ...");

// if(answer == "world") {
//     document.write("<p> wel done</p>");
// } else {
//     document.write("<p>oh no !!</p>");
// }

// var randNo = Math.floor(Math.random() * 6) + 1;

// var myGuess = prompt("guess");

// if (parseInt(randNo) === myGuess) {

// } else {

// }

function alertRandom(maxNo) {
    var randNo = Math.floor(Math.random() * maxNo) + 1;

    alert(randNo);
}

var alertFunction = function() {
    var randNo = Math.floor(Math.random() * 6) + 1;
    return randNo;
};

function recArea(x,y) {
    var area = x * y;
    return area;
}

alertRandom(100);

alertFunction();

alert(recArea(10,10));