var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var lis = document.querySelectorAll('li');
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var butname = document.createTextNode('Delete');
    var butnamedon = document.createTextNode('Done');
    var buttondel = document.createElement('button');
    var buttondon = document.createElement('button');
    buttondon.appendChild(butnamedon);
    buttondel.appendChild(butname);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(buttondon);
    li.appendChild(buttondel);
    buttondon.addEventListener("click", strike2ru);
    buttondel.addEventListener("click", delelemnt);

    function strike2ru() {
        li.classList.toggle('done');
    }

    function delelemnt() {
        li.parentNode.removeChild(li);
    }
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


function delitstrike() {
    lis.forEach(liss => {
        var butname = document.createTextNode('Delete');
        var butnamedon = document.createTextNode('Done');
        var buttondel = document.createElement('button');
        var buttondon = document.createElement('button');
        buttondon.appendChild(butnamedon);
        buttondel.appendChild(butname);
        liss.appendChild(buttondon);
        liss.appendChild(buttondel);
        buttondon.addEventListener("click", strike2ru);
        buttondel.addEventListener("click", delelemnt);

        function strike2ru() {
            liss.classList.toggle('done');
        }

        function delelemnt() {
            liss.parentNode.removeChild(liss);
        }

    });
}
delitstrike()



//-------GUIDING CODE------

// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var items = document.querySelectorAll("li");

// function inputLength() {
//     return input.value.length;
// }

// // new list items
// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     //creates buttons
//     var btn1 = document.createElement("button");
//     var btn2 = document.createElement("button");
//     btn1.innerHTML = "Done";
//     btn2.innerHTML = "Delete";
//     li.appendChild(btn1);
//     li.appendChild(btn2);
//     // removes element
//     btn2.addEventListener("click", function() {
//         li.parentNode.removeChild(li);
//     });
//     //continue code
//     li.addEventListener("click", function() {
//         li.classList.toggle("done");
//     });
//     ul.appendChild(li);
//     input.value = "";
// }

// // existing list items
// Array.from(items).forEach(function(item) {
//     var btn1 = document.createElement("button");
//     var btn2 = document.createElement("button");
//     //creates buttons
//     btn1.innerHTML = "Done";
//     btn2.innerHTML = "Delete";
//     item.appendChild(btn1);
//     item.appendChild(btn2);
//     // removes element
//     btn2.addEventListener("click", function() {
//         item.parentNode.removeChild(item);
//     });
//     //continue code
//     item.addEventListener("click", function() {
//         item.classList.toggle("done");
//     });
// });

// function addListAfterClick() {
//     if (inputLength() > 0) {
//         createListElement();
//     }
// }

// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.keyCode === 13) {
//         createListElement();
//     }
// }

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);



/* OLD METHOD OF PROTOTYPE B4 ES6 */

// function Bird1(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
// }



// Bird1.prototype = {

//     constructor: Bird1,

//     numEyes: 2,

//     sound: function() {
//         return "ku ka ka ka";
//     },

//     describe: function() {
//         return "My name is " + this.name;
//     }
// }


// const cardinal = new Bird1("lee", "black");

// const canary = new Bird1("jack", "white");



// let ownProps = [];
// let prototypeProp = [];

// for (let property in canary) {
//     if (canary.hasOwnProperty(property)) {
//         ownProps.push(property);
//     } else {
//         prototypeProp.push(property);
//     }
// }

// console.log(cardinal);
// console.log(canary);
// console.log('Ownprops:', ownProps);
// console.log('Prototype prop:', prototypeProp);



/* NEW METHOD IN ES6 */

class Bird {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
    }
}


class Bird1 extends Bird {
    constructor(name, color) {
        super(name, color)
    }

    numEyes = 2

    sound() {
        return `ku ka ka ka`;
    }

    describe() {
        return `My name is ${this.name}`;
    }
}



const cardinal = new Bird1("lee", "black");

const canary = new Bird1("jack", "white");



let ownProps = [];
let prototypeProp = [];

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    } //else {
    //     prototypeProp.push(property);
    // }
}

console.log(cardinal);
console.log(canary);
console.log('Ownprops:', ownProps);
console.log('Prototype prop:', prototypeProp);