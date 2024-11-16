const accountId = 1234
let accountEmail = "ritesh@xyz.com"
var accountPassword = "5678"
accountCity = "Bareilly"
let accountState;

// lets try changing the values 
// accountId = 2 * not allowed because it is a constant we can't change 

console.log(accountId);

accountEmail = "ritesh@abc.com"
accountPassword = "4321"
accountCity = "Noida"

// these type of values can be changed 
// let's see
/* now we want to print multiple statements and it is annoying and lenghty process
of typing console.log(); so i'm using console.table([]); to make the process shorter of our learnings*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/