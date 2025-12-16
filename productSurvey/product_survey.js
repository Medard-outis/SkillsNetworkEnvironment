function submitFeedback() {
    // Collect user input values
}
// Collect user input values
const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;

// Add code here to process the collected data, 
// e.g., send it to a server or display a thank you message
const submitButton=document.getElementById('submitBtn');

// Attach the function to the button's click event
submitButton.onclick = submitFeedback;

// For demonstration, we'll just show an alert
alert('Thank you for your valuable feedback')

// Display collected data in the console (for demonstration purposes)
document.getElementById('userName').innerHTML = username;
document.getElementById('userAge').innerHTML = age;
document.getElementById('userEmail').innerHTML = email;
document.getElementById('userJob').innerHTML = job;
document.getElementById('userDesignation').innerHTML = designation;
document.getElementById('userProductChoice').innerHTML = productType;
document.getElementById('userFeedback').innerHTML = feedback;

// Show the user info section
document.getElementById('userInfo').style.display = 'block';

// Optional: Add event listener for Enter key to submit feedback
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });