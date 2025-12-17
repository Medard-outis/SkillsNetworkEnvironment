

let userRole ="usere";
let accessLevel;
// 
let isLoggedIn = false;
let userMessage;

let userType = "usere";
let userCategory;

let isAuthenticated = false;

let authenticationStatus = isAuthenticated ? 
    document.getElementById("status").innerHTML="Authenticated" : 
    document.getElementById("status").innerHTML="Not authenticated";

if (userRole === "admin") {
    accessLevel = document.getElementById("access").innerHTML="Full access granted";
} else if (userRole === "manager") {
    accessLevel = document.getElementById("access").innerHTML= "Limited access granted";
} else {
    accessLevel = document.getElementById("access").innerHTML= "No access granted";
}

console.log("Access Level:", accessLevel);


if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = document.getElementById("welcome").innerHTML= `welcome, ${userRole}!`;
    } else {
        userMessage = document.getElementById("welcome").innerHTML= `welcome, ${userRole}!`;
    }
} else {
    userMessage = document.getElementById("welcome").innerHTML= "Please log in to access the system.";
}

console.log("User Message:", userMessage);

switch (userType) {
    case "admin":
        userCategory = document.getElementById("category").innerHTML= "Administrator";
        break;
    case "manager":
        userCategory =document.getElementById("category").innerHTML="Manager";
        break;
    case "subscriber":
        userCategory = document.getElementById("category").innerHTML= "Subscriber";
        break;
    default:
        userCategory = document.getElementById("category").innerHTML= "Unknown";
}

console.log("User Category:", userCategory);


console.log("Authentication Status:", authenticationStatus);