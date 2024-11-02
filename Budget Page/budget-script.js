// Declare a variable to hold the toggle state
let student = false;

function toggleSlider(checkbox) {
  const slider = checkbox.nextElementSibling;
  const handle = slider.firstElementChild;

  // Update the `student` variable based on the checkbox state
  student = checkbox.checked;

  // Apply the corresponding styles based on the state
  slider.style.backgroundColor = student ? "#2196F3" : "#ccc";
  handle.style.transform = student ? "translateX(26px)" : "translateX(0)";
  
}

const studentMessageElement = document.getElementById('studentOnlyMessage');
if (student) {
  studentMessageElement.style.display = 'block'; // Show the element
} else {
  studentMessageElement.style.display = 'none'; // Hide the element
}