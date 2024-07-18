// Step 1: Define the submitData function
function submitData(name, email) {
    // Step 2: Use fetch() to make a POST request to http://localhost:3000/users
    return fetch('http://localhost:3000/users', {
      // Step 3: Set up the request headers
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      // Step 4: Add the request body
      method: 'POST',
      body: JSON.stringify({ name: name, email: email })
    })
    .then(response => {
      // Step 5: Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Step 6: Handle the response data
      console.log(data); // This will log the response data to the console
  
      // Find or create an element to display the new id
      const idElement = document.createElement('p');
      idElement.textContent = `New User ID: ${data.id}`;
  
      // Append the new id to the DOM
      document.body.appendChild(idElement);
    })
    .catch(error => {
      // Step 7: Handle any errors
      console.error('Error:', error);
  
      // Find or create an element to display the error message
      const errorElement = document.createElement('p');
      errorElement.textContent = `Error: ${error.message}`;
  
      // Append the error message to the DOM
      document.body.appendChild(errorElement);
    });
  }
  
  
  //submitData('Kipchumba Brian', 'kipchumba.brian@example.com');
  