// Js variable types and values

var userEmail = "madurashayamal@gmail.com";
const userName = "Madura Shyamal";
let userAge = 24;
const isAuthenticated = false;
const lastName = null;
const firstName = undefined;

const userData = {
    firstName: "Madura",
    lastName: "Shyamal",
    age: 20,
}

//arrays
const fruits = ["apple","Orange","Strawberry","Mango"]; //stringArray

const numbers = [1, 2, 3, 4, 5]; //numberArray

const users = [                       
    { id: 1143, name: "Kelum" },
    { id: 2005, name: "Chaluka" },
    { id: 1541, name: "Rangana" },   
    { id: 2020, name: "Tharindu" },  //objectArray
    { id: 1911, name: "Kostha" },
    { id: 1885, name: "Kaldera" },
];

//consoleLogs

console.log("value:", userEmail, "type:", typeof userEmail);
console.log("value:", userName, "type:", typeof userName);
console.log("value:", userAge, "type:", typeof userAge);
console.log("value:", isAuthenticated, "type:", typeof isAuthenticated);
console.log("value:", lastName, "type:", typeof lastName);
console.log("value:", firstName, "type:", typeof firstName);
console.log("value:", userData, "type:", typeof userData);
console.log("value:", fruits, "type:", typeof fruits);
console.log("value:", numbers, "type:", typeof numbers);
console.log("value:", users, "type:", typeof users);

const sections = document.getElementsByTagName("section");

//mouseoverEffect

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener("mouseover", () => {
    sections[i].style.boxShadow = "10px 10px 10px hsla(180, 4.20%, 13.90%, 0.09)";
  });

  sections[i].addEventListener("mouseout", () => {
    sections[i].style.boxShadow = "none";
  });
}
