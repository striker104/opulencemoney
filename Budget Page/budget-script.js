// Declare a variable to hold the toggle state
var student = false;
var income = -1;
const studentMessageElement = document.getElementById('studentOnlyMessage');
const incomeInputForm=document.getElementById('incomeInputField')
const incomeMessageElement = document.getElementById('incomeMessage')

function toggleSlider(checkbox) {
  const slider = checkbox.nextElementSibling;
  const handle = slider.firstElementChild;

  // Update the `student` variable based on the checkbox state
  student = checkbox.checked;

  // Apply the corresponding styles based on the state
  slider.style.backgroundColor = student ? "#2196F3" : "#ccc";
  handle.style.transform = student ? "translateX(26px)" : "translateX(0)";

  //Display student text?
  if (student) {
    studentMessageElement.innerHTML="Student"
    studentMessageElement.style.display = 'block'; // Show the element
  } else {
    studentMessageElement.style.display = 'none'; // Hide the element
  }
}

function incomeForm(event){
  event.preventDefault(); // Prevent the form from submitting
  income = incomeInputForm.value;
  incomeMessageElement.innerHTML = "Yearly after-tax income of £" + income;
  incomeMessageElement.style.display='block';
  newChart()

}

//Charts
const ctx = document.getElementById('budgetPie');
function newChart(){
  new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [123, 123, 123],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]},
      
      });
      ctx.style.display='block';
    }


