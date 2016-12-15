/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/

if(today === "Friday"){
  return "Let's Party!";
};

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

if(today === "Friday"){
  return "Let's Party!";
}else{
  return "Get back to coding!";
};

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
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/


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


/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three letter word. 
 * Console.log your result.
*/


/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * The function will return the message "You look mahvelous!", if the strings are equal, otherwise return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/


/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * The function will return the message "Opposites do attract", if the strings are not equal, otherwise return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/


/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherswise it will return false.
 * Console.log your result.
*/ 


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
 * The function will return true if the sum of all the number values is greater than 30, otherwise return false.
 * Console.log your result.
*/ 


/*
 * #10
 * Function - nightClub
 * Create a function named `nightClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * The function will return the message: "Welcome to the Legends Lounge." if BOTH values are over 21, otherwise return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 


/* 8) Function - totalOver30

  @param Datatype: Number `first`
  @param Datatype: Number `second`
  @param Datatype: Number `third`
  @return Datatype: Boolean

Write a function that takes three variables of type Number called first and second and third respectively. Return true if the sum of all values are greater than 30 otherwise return false. */



/* 9) Function - totalUnderWhat

  @param Datatype: Number `first`
  @param Datatype: Number `second`
  @param Datatype: Number `third`
  @param Datatype: Number `fourth`
  @return Datatype: Boolean

Write a function that takes four variables of type Number called `first` and `second` and `third` and `fourth` respectively. Return true if the sum of `first`, `second` and `third` are less than `fourth`; otherwise, return false. */



/* 10) Function - looptoNumber

  @param Datatype: Number `limit`

Write a function that takes a single argument, a Number value named `limit`, and have the function write a for-loop that iterates a number of times equal to `limit` and logs the current value of `limit` on each iteration. */



/* 11) Function - showEachValue

  @param Datatype: Array `characters`

Write a function that takes in a Array value named `characters`, which is a sequence of single character String values. The function should execute a for-loop that iterates over the array and prints each character. */



/* 12) Function - createArrayFromString

  @param Datatype: String `word`
  @return Datatype: Array

Write a function that takes a single variable of type String called `word` and write a for loop that creates an Array made up of each character in `word` except for "A" or "a". We don't want no stinking "A" or "a" in our Array. Note: You will need to use the Array.push() method to complete this function. */



/* 13) Function - greatSummator

  @param Datatype: Array 
  @return Datatype: Number

Write a function that takes an Array with sequence of Number values. The function should return the sum of the Array's Number values. */



/* 14) Function - totalUnderWhatFor

  @param Datatype: Array 
  @param Datatype: Number `total` 
  @return Datatype: Boolean

Write a function that takes two arguments: (1) an Array with sequence of Number values, and (2) a Number named `total`. Return true if the sum of all values in the Array are less than `total`; otherwise, return false. */



/* 15) Function - checkTrueValues

  @param Datatype: Array 
  @return Datatype: Boolean

Write a function that takes an Array containing any number of type Boolean values. The function should execute a for-loop that invokes the `isTrue` function (defined earlier) with each value from the Array as input. The `checkTrueValues` function should return true if all values from the `isTrue` function return true. */
