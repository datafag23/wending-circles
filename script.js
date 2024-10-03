// script.js
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Get the value of the email input
    const email = document.getElementById('emailInput').value;
  
    // Display a message after submission
    const message = document.getElementById('message');
    if (validateEmail(email)) {
      message.textContent = `Thank you for subscribing with: ${email}`;
      message.style.color = 'white';
    } else {
      message.textContent = 'Please enter a valid email address.';
      message.style.color = 'white';
    }
  
    // Clear the input field
    document.getElementById('emailInput').value = '';
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  