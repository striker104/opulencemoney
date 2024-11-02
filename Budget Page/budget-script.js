// Declare a variable to hold the toggle state
var student = false;
var income = -1;
const studentMessageElement = document.getElementById('studentOnlyMessage');
const incomeInputForm=document.getElementById('incomeInputField');
const incomeMessageElement = document.getElementById('incomeMessage');
const signUpPrompt = document.getElementById('signUpPrompt');

function toggleSlider(checkbox) {
  const slider = checkbox.nextElementSibling;
  const handle = slider.firstElementChild;

  // Update the `student` variable based on the checkbox state
  student = checkbox.checked;

  // Apply the corresponding styles based on the state
  slider.style.backgroundColor = student ? "#2196F3" : "#ccc";
  handle.style.transform = student ? "translateX(26px)" : "translateX(0)";
  updateStudentText();


}

function updateStudentText(){
    if (student) {
      studentMessageElement.innerHTML="University Student";
    } else {
      studentMessageElement.innerHTML="Not a University Student";
    }
}

//Upon submit button click
function incomeForm(event){
  event.preventDefault(); // Prevent the form from submitting
  income = incomeInputForm.value;
  incomeMessageElement.innerHTML = "Yearly after-tax income of £" + income;
  incomeMessageElement.style.display='block';
  updateStudentText(); studentMessageElement.style.display = 'block'; // Show the element
  newChart();
  signUpPrompt.style.display='block';

}

//Charts
const ctx = document.getElementById('budgetPie');
function newChart(){
  new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: [
          'Essentials',
          'Lifestyle',
          'Rent'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [income*0.34, income*0.3, income*0.5],
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


