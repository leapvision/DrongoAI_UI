// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to the forms and containers
//   const contactFormContainer = document.getElementById("contactFormContainer");
//   const hiringFormContainer = document.getElementById("hiringFormContainer");

//   // Get references to the forms
//   const defaultContactForm = document.getElementById("defaultContactForm");
//   const hiringForm = document.getElementById("hiringForm");

//   // Get reference to the join us button
//   const joinUsButton = document.getElementById("joinUsButton");

//   // Set the initial state
//   let isJoinUsState = true;

//   // Function to toggle the state and update button content
//   function toggleButtonContent() {
//     isJoinUsState = !isJoinUsState;
//     joinUsButton.textContent = isJoinUsState ? "Join Us" : "Contact Us";
//   }

//   // Add click event listener to the join us button
//   joinUsButton.addEventListener("click", function () {
//     if (isJoinUsState) {
//       // If the "Join Us" state is active, switch to the hiring form
//       contactFormContainer.style.display = "none";
//       hiringFormContainer.style.display = "block";
//     } else {
//       // If the "Join Us Later / Contact Us" state is active, switch back to the default form
//       contactFormContainer.style.display = "block";
//       hiringFormContainer.style.display = "none";
//       // You might want to reset the hiring form fields or perform other actions as needed
//       hiringForm.reset();
//     }

//     // Toggle the button content
//     toggleButtonContent();
//   });

//   // Add submit event listener to the hiring form
//   hiringForm.addEventListener("submit", function (event) {
//     // You can add additional logic here to handle form submission, e.g., AJAX request

//     // For now, prevent the default form submission
//     event.preventDefault();

//     // You can add additional logic here to handle the hiring form submission

//     // For demonstration purposes, let's switch back to the default contact form
//     // contactFormContainer.style.display = "block";
//     // hiringFormContainer.style.display = "none";
//     // You might want to reset the hiring form fields or perform other actions as needed
//     // hiringForm.reset();

//     // Toggle the button content
//     // toggleButtonContent();
//   });
// });

// Number of children
const numChildren = 8;

// Create children dynamically
for (let i = 1; i <= numChildren; i++) {
  const angle = (i / numChildren) * 2 * Math.PI;
  const radius = 150; // Adjust the radius as needed

  const child = document.createElement("div");
  child.className = "child";
  child.textContent = "Tech " + i;

  const container = document.getElementById("container");
  container.appendChild(child);

  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;

  const childX = centerX + radius * Math.cos(angle) - child.offsetWidth / 2;
  const childY = centerY + radius * Math.sin(angle) - child.offsetHeight / 2;

  child.style.left = childX + "px";
  child.style.top = childY + "px";
}
