//------------->> var (universal)
console.log("var---------------------------------------")
console.log("before declare or initialize::",userEmail); // no hoisting (undefined)
var userEmail = "madurashayamal@gmail.com";// declare + initialize
console.log("after declare and initialize::",userEmail);

//------------->> let (time to time changed value)
console.log("let---------------------------------------")
//console.log("before declare or initialize::",userAge); // no hoisting (ReferenceError)
let userAge; //only declare ('let' can initialize later)
console.log("after declare/but not initialize::",userAge);
userAge = "25"; //this is initialize
console.log("after initialize::",userAge);
userAge = "26" // 'let' can Re-assign values later
console.log("after Re-assign::",userAge);

//------------->>const (non changed values)
console.log("const---------------------------------------");
//console.log("before declare or initialize::",userName); // no hoisting (ReferenceError)
const userName = "madura"; // declare + initialize ('const' declarations must be initialized)
console.log("after declare and initialize ::",userName);
//userName = "shyamal"; // cant Re-assign or Re-declare value
//const userName = "shyamal"; // cant Re-assign or Re-declare value