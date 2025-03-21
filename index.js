document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dogForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevents default form submission

      const dogName = document.getElementById("dogName").value;
      const dogBreed = document.getElementById("dogBreed").value;

      const dogData = {
          dogName: dogName,
          dogBreed: dogBreed
      };

      const configurationObject = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          body: JSON.stringify(dogData),
      };

      fetch("http://localhost:3000/dogs", configurationObject)
          .then(response => response.json()) // Parse JSON response
          .then(data => {
              responseMessage.textContent = `Successfully added: ${data.dogName} (${data.dogBreed})`;
              form.reset(); // Clear form inputs
          })
          .catch(error => {
              responseMessage.textContent = "Error: Could not submit data";
              console.error("Error:", error);
          });
  });
});

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({ name, email })
  })
  .then(response => response.json())
  .then(data => {
      document.body.innerHTML = data.id;
  })
  .catch(error => {
      document.body.innerHTML = error.message;
  });
}
