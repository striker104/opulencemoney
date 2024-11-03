// Declare a variable to hold the toggle state
var student = false;
var income = -1;
let chart;
const studentMessageElement = document.getElementById('studentOnlyMessage');
const incomeInputForm=document.getElementById('incomeInputField');
const incomeMessageElement = document.getElementById('incomeMessage');
const signUpPrompt = document.getElementById('signUpPrompt');
const outgoingField=document.getElementById('outgoingInputField');
const topOutgoing1=document.getElementById('topOutgoingInputField1');
const topOutgoing2=document.getElementById('topOutgoingInputField2');
const topOutgoing3=document.getElementById('topOutgoingInputField3');
const AIbutton=document.getElementById('AIbutton')
var AIprompt = "error, blank prompt";


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
  outgoing=outgoingField.value;
  out1=topOutgoing1.value;
  out2=topOutgoing2.value;
  out3=topOutgoing3.value;
  incomeMessageElement.innerHTML = "Yearly after-tax income of £" + income;
  incomeMessageElement.style.display='block';
  updateStudentText(); studentMessageElement.style.display = 'block'; // Show the element
  newChart();
  signUpPrompt.style.display='block';
  AIprompt= `Act as a personal finance advisor, called Opulence AI. Requirements: Write no more than one paragraph, You introduce yourself as Opulence AI, You provide personalised budgeting feedback based on the inputs, You compare your suggested budget to their current spending, You provide at least 3 actionable points to achieve this new budget from their current outgoings, You always highlight how it's beneficial to save more, You always recommend using the Opulence Resource Page for savings and tax optimisation tips. Inputs: £${income}, Yearly outgoing: £${outgoing}, Top 3 spends: ${out1} ${out2} ${out3}`
  navigator.clipboard.writeText(AIprompt)  
  AIbutton.style.display='block';
}

//Charts
const ctx = document.getElementById('budgetPie');
function newChart(){
  //remove existing chart
  if (chart) {
    chart.destroy(); 
  }

  //change labels, data, based on variable student
  if (student){
    labels = ["Rent", "Food", "Transport", "Course materials & extra fees", "Essentials", "Entertainment", "Emergency Fund" ];
    data = [0.3*income, 0.2*income, 0.15*income, 0.05*income, 0.15*income, 0.15*income, 0.05*income];
  } else{
    labels = ["Housing", "Transportation", "Food & Essentials", "Utilities", "Insurance", "Debt Repayment", "Savings & Investments", "Entertainment & Leisure", "Charity/Giving"];
    data = [0.25*income, 0.1*income, 0.15*income, 0.05*income, 0.05*income, 0.1*income, 0.15*income, 0.05*income, 0.05*income];

  }

  chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: data,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(128, 128, 0)',
            'rgb(0, 128, 128)',
            'rgb(218, 112, 214)',
            'rgb(70, 130, 180)'
          ]
          ,
          hoverOffset: 4
        }]},

        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  // Customize tooltip to show the label and the value
                  let label = context.label || '';
                  let value = context.raw || 0;
                  return `${label}: £${value.toFixed(2)}`;
                }
              }
            }
          }
        }
      
      });
      ctx.style.display='block';
    }


