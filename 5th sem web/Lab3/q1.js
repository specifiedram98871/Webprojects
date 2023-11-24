//Function to add two number using arrow function
        const add = (a, b) => {
            return a + b;
        }
        console.log(add(7, 6));

        //by using simple function
        function addNum(a, b) {
            return a + b;
        }
        //alert
        alert(`alert= The sum of 4 and 5 is", ${addNum(4, 5)}`);
        //confirm
        let userConfirmation = confirm("Do you want to proceed?");
            console.log(userConfirmation); // Returns true if 'OK' is clicked, false otherwise

            // Prompt Box
            let userInput = prompt("Enter your name:");
            console.log(userInput); // Returns user input or null if canceled
       function validateForm() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let dob = document.getElementById("dob").value;
            let course = document.getElementById("course").value;

            // Validate email using regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!emailRegex.test(email)) {
                alert("Invalid email format");
                return;
            }

            // Validate age >= 18 for DOB
            const today = new Date();
            const birthDate = new Date(dob);
            const age = today.getFullYear() - birthDate.getFullYear(); //compares todays date with user input date
            
           if (name === "")
           {
               console.log("Name cant be blank");
               return;
                }
            if (age < 18) {
                alert("Age must be 18 or above");
                return;
            }

            // Validate course selection
            if (course === "") {
                alert("Please select a course");
                return;
            }

            // All validations passed, you can submit the form or perform further actions
            alert("Form submitted successfully!");
}
        // Set Cookie
  document.cookie = "username=Ram_k; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";

// Get Cookie
let username = document.cookie.replace();
console.log(username);

