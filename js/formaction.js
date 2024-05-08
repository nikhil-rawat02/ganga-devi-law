// Get the form element
const form = document.getElementById("contact_college");

// Add event listener for form submission
form.addEventListener("submit", function (event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);

  // Convert form data to JSON
  const jsonData = {};
  formData.forEach(function (value, key) {
    jsonData[key] = value;
  });

  // Example: Log form data
  console.log(jsonData);

  // Example: Send form data to a server
  // fetch('https://example.com/api/submit', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(jsonData)
  // })
  // .then(response => {
  //     if (response.ok) {
  //         return response.json();
  //     }
  //     throw new Error('Network response was not ok.');
  // })
  // .then(data => {
  //     console.log(data);
  //     // Handle success response
  // })
  // .catch(error => {
  //     console.error('Error:', error);
  //     // Handle error
  // });
});

// facility page
