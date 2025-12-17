
//scope_lab.js
// Variables declaration
// User roles can be 'employee', 'Enrolled Member', 'subscriber', and 'non-subscriber'
let userRole ="kuku";
let accessLevel;
let isLoggedIn = true;
let isAuthenticated = false;
let userMessage;
let userType = "subscriber";
let userCategory;
let interractionType;

// Control flow based on user role and login status



if (isLoggedIn) {
    // Outer condition to check user role
    if (userRole === "employee" && userType === "employee") {
        accessLevel = document.getElementById("access").innerHTML="Full access granted";
    } else if (userRole === "Enrolled Member" && userType === "Enrolled Member") {
        accessLevel = document.getElementById("access").innerHTML= "Full access granted";
    } else if (userRole === "subscriber" && userType === "subscriber") {
        accessLevel = document.getElementById("access").innerHTML= "Partial access granted";
    }else {
        accessLevel = document.getElementById("access").innerHTML= "No access granted";
    }

// Nested condition to further specify user type
    if (userRole === "employee" || userRole === "Enrolled Member" || userRole === "subscriber") {
            switch (userType) {
            case "employee":
                userCategory = document.getElementById("category").innerHTML= "Employee";
                document.getElementById("interraction").innerHTML="In-person and online services available";
                var authenticationStatus = isAuthenticated ?"Authenticated":"Not authenticated";
                userMessage = document.getElementById("welcome").innerHTML= `welcome, ${userRole}!`;
                break;
            case "Enrolled Member":
                userCategory =document.getElementById("category").innerHTML="Enrolled Member";
                document.getElementById("interraction").innerHTML="services available";
                userMessage = document.getElementById("welcome").innerHTML= `welcome, ${userRole}!`;
                var authenticationStatus = isAuthenticated ?"Authenticated":"Not authenticated";
                break;
            case "subscriber":
                userCategory = document.getElementById("category").innerHTML= "Subscriber";
                document.getElementById("interraction").innerHTML="partiel services available";
                userMessage = document.getElementById("welcome").innerHTML= `welcome, ${userRole}!`;
                var authenticationStatus = isAuthenticated ?"Authenticated":"Not authenticated";
                break;
            default:
                userCategory = document.getElementById("category").innerHTML= "Unknown";
                document.getElementById("interraction").innerHTML="No services available";
                userMessage = document.getElementById("welcome").innerHTML= "welcome, Guest!";
                var authenticationStatus = isAuthenticated ?"Authenticated":"Not authenticated";
}


       
    } else {
        userMessage = document.getElementById("welcome").innerHTML= "Please Subscribe.";
        var authenticationStatus = isAuthenticated ?"Authenticated":"Not authenticated";
    }
} else {
    userMessage = document.getElementById("welcome").innerHTML= "Please log in to access the system.";
    var authenticationStatus = isAuthenticated ?"Authenticated":"Not authenticated";
}




document.getElementById("status").innerHTML= authenticationStatus