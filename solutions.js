/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
/*var today = new Date();

if(today === "Friday"){
  return "Let's Party!";
};*/

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

/*if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};*/


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/

function canVote(age){
  if(age >= 18){
    return true;
  }else{
    return false;
  }
}
console.log("1. canVote: ", canVote(19));

/*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/

function login(password){
 if(password === "test1234"){
  return "Login Success!";
 }
}
console.log(login("test1234"));
/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number is greater than the second.
 * Console.log your result.
*/

function isGreaterThan(first, second){
  if(first > second){
    return true;
  }
}
console.log(isGreaterThan(3, 1));

var showResult = isGreaterThan(5, 1);
console.log("isGreaterThan: ", showResult);

/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed into the function is "true".
 * Console.log your result.
*/

function mustBeTrue(boo){
  if(boo === true){
    return true;
  }else{
    return false;
  }

}
console.log("mustBeTrue: ", mustBeTrue(true));

/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three-letter word. 
 * Console.log your result.
*/

function bigBird(word){
  if(word.length === 3){
    return "Word to Big Bird!";
  }
}

console.log("bigBird: ", bigBird("cat"));

/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/

function isEqual(first, second){
if(first === second){
  return "You look mahvelous!";
}else{
  return "I don't know who you are anymore."; 
  }
}
console.log(isEqual("ying", "yang"));

/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/

function notEqual(first, second){
  if(first !== second){
    return "Opposites do attract.";
  }else{
    return "Cause it's like you're my mirror." ;
  }
}
console.log(notEqual("sweet", "sour"));

/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherwise it will return false.
 * Console.log your result.
*/ 

function spareChange(money){
  if(money >100){
    return true;
  }else{
    return false;
  }
}

console.log("spareChange: ", spareChange(101));

/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30, otherwise it will return false.
 * Console.log your result.
*/ 

function dirty30(one, two, three){
  var sum = one + two + three;
  if(sum > 30){
    return true;
  }else{
    return false;
  }
}
console.log("dirty30: ", dirty30(10, 20, 25));

/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it will return false.
 * Console.log your result.
*/ 

function evenStevens(num){
  if(num%2 === 0){
    return true;
  }else{
    return false;
  }
}
console.log("evenStevens ", evenStevens(8));


/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 


function daClub(cover, age){
  if(cover >= 21 && age >= 21){
    return "Welcome to the Legends Lounge.";
  }else{
    return "Chuck E Cheese is across the street.";
  }
}
console.log("daClub: ", daClub(22, 21));

/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `grades`.
 *
 *  @param Datatype: Number `credits`
 *  @param Datatype: Number `grades`
 *  @return Datatype: String
 *
 * If EITHER the credits value is greater than or equal to 120 or the grades value is greater than or equal to 2.0, then the function will return the message: "Congratulations on a job well done." Otherwise, return the message: "See you in summer school."
 * Console.log your result.
*/

function graduation(credits, grades){
 if(credits >= 120 || grades >= 2.0){
  return "Congratulations on a job well done.";
 }else{
  return "See you in summer school.";
 }
}
var gradResults = graduation(100, 3.0);
console.log("graduation: ", gradResults);

/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", if the number value is less than 100, and return the message: "Now you ballin' in the Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 

function moneyTrain(speed){
  if(speed < 50){
    return "You are riding Honolulu's Rail.";
  }else if(speed < 100){
    return "You are riding an Amtrak.";
  }else{
    return "Now you ballin' in the Shinkansen!";
  }
}
console.log(moneyTrain(99));


/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 

var budget = 100;
var doughnutPrice = 5;
var doughnutBought = 0;

function buyDoughnut(){
 if(budget >= doughnutPrice){ 
  budget -= doughnutPrice;
  doughnutBought++;
 }
}

buyDoughnut();
console.log("budget ", budget);
console.log("bought ", doughnutBought);


/*Final Boss*/
/*Create a function name dailySpecials which takes in a parameter: `special`.
Inside the function, create a switch statement that will check the daily specials of your favorite restaurant (or make up your own daily specials for each day of the week.*/

function dailySpecials(special) {
  switch (special) {
  case 'Monday':
    menu = 'Sweet Onion Chicken Teriyaki';
    break;
  case 'Tuesday':
    menu = 'Oven Roasted Chicken';
    break;
  case 'Wednesday' :
    menu = 'Turkey';
    break;
  case 'Thursday' :
   menu = 'Italian BLT';
    break;
  case 'Friday' :
    menu = 'Tuna';
    break;

}
  return menu;
}
console.log(dailySpecials('Friday'));


/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/

for(var i = 1; i<=5; i++){
  console.log("player ", i);
}

/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/
  var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];

  for(var i = 0; i<myFavFoods.length; i++){
    console.log(myFavFoods[i]);
  }

/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number value of 0.
 * 
 * Create a function named sumItUp which takes a parameter: `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in the array that is passed into the function and return the total.
 * Console.log your result.
*/


var numArray = [22, 33, 44, 55, 66];

function sumItUp(arr){
  var total = 0;
  for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
    total += arr[i]; // total = total + arr[i];
  }
  return total;

}

console.log("sumitup ", sumItUp(numArray));

/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 

  var players = ["Yao Ming", "BrookLin", " Jesus Shuttlesworth", "Manute Bol", "Sidney Deane", "World B Free"];
  var east = [];
  var west = [];

  function allStars(ballers){
    for(var i = 0; i<ballers.length; i++){
      console.log(ballers[i]);
      if(i%2 === 0){
        //console.log(i);
      east.push(ballers[i]);
      }else{
        west.push(ballers[i]);
      }
    }
  }
  allStars(players);
  console.log("east: ", east);
  console.log("west: ", west);

/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 

  var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];

function subways(special){
  for(var i = 0; i<special.length; i++){
    if(i%2 === 1){
      console.log(i);
      special.splice(i, 1, "Classic Tuna"); 
      special[i] = "Classic Tuna";
    }

  }
 return special;
}

subways(subOftheDay);
console.log(subOftheDay);

/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/

  var phrase = "An apple a day keeps Alice feeling awesome!";
  var newArr = [];
 
function removeLetter(str){
  var strToArr = str.split('')
  for(var i = 0; i<strToArr.length; i++){
    if(strToArr[i] !== 'A' && strToArr[i] !== 'a'){
     newArr.push(strToArr[i])
    }
  }
  return newArr;
}
removeLetter(phrase)

console.log(newArr)



