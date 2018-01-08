/*/8 function sayHello() {
  alert("hello");
}

function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function addMultiply(x, y) {
  return x ** y;
}

function divide(x, y) {
  return x / y;
}
/**call all functions
function all(x, y) {
  return (
    console.log("add=", add(x, y)),
    console.log("minus=", minus(x, y)),
    console.log("multiply=", multiply(x, y)),
    console.log("addMultiply=", addMultiply(x, y)),
    console.log("divide=", divide(x, y)),
    "finished"
    /** return "add="+add(x,y) + "minus:" + minus(x,y);"
  );
}
  **/
/**var ageOfUser = prompt("what is your age?");

if (ageOfUser < 18) {
  console.log("You can't drink ! ");
} else if (ageOfUser >= 18 && ageOfUser <= 50) {
  console.log("go ahead !");
} else if (ageOfUser > 50) {
  console.log("Think of your age please !");
} else {
  console.log("Whatever!");
}
 */

/**var week = ["Mon"];*/

var movie = ["James Bond", "Ring", "Identity", "Diary"];

var personOne = {
  name: "Alex",
  age: 44,
  FavMovies: movie[1],
  dog: {
    name: "Fluffer",
    age: 13,
    color: "brown"
  },
  greet: function(name) {
    console.log("Hello", name);
  }
};

var personTwo = {
  name: "Jeremy",
  age: 20,
  FavMovies: movie[2],
  dog: null,
  greet: function(name) {
    console.log("Hello", name);
  }
};
