/*
*********		Formulas
	pension
*/

// handle the enter key clicked event and fire the calculate function
// const log = document.getElementById('calculate_salary');

// document.addEventListener('keydown', logKey);

// function logKey(e) {
//   // log.textContent += ` ${e.code}`;
//   if(e.code == 'Enter'){
//     e.preventDefault(); //prevent reloading when the enter key is pressed
//     calculateSalary();
   
//   }
// }


// handle the form submit action and call the calculate function
var salaryForm = document.getElementById("salaryCalcForm");

salaryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateSalary();
});

// function that clalculates the salary
function calculateSalary() {

  var gross_salary, income_tax, Pension, net_salary, result;
  gross_salary = parseFloat(
    document.getElementById("gross_salary").value
  ).toFixed(2);

  if (isNaN(gross_salary)) {
    alert("please enter a Gross salary!");
  } else {
    // gross salary 0-600 => 0% income tax
    if (gross_salary >= 0 && gross_salary <= 600) {
      income_tax = 0;
    }

    // gross salary 601-1650 => 10% income tax =>deduction 60 birr
    else if (gross_salary >= 601 && gross_salary <= 1650) {
      income_tax = (10 * gross_salary) / 100 - 60;
    }

    // gross salary 1651-3200 => 15% income tax =>deduction 142.50 birr
    else if (gross_salary >= 1651 && gross_salary <= 3200) {
      income_tax = (15 * gross_salary) / 100 - 142.5;
    }

    // gross salary 1651-3200 => 20% income tax =>deduction 302.50 birr
    else if (gross_salary >= 3201 && gross_salary <= 5250) {
      income_tax = (20 * gross_salary) / 100 - 302.5;
    }

    // gross salary 1651-3200 => 25% income tax =>deduction 565 birr
    else if (gross_salary >= 5251 && gross_salary <= 7800) {
      income_tax = (25 * gross_salary) / 100 - 565;
    }

    // gross salary 1651-3200 => 30% income tax =>deduction 955 birr
    else if (gross_salary >= 7801 && gross_salary <= 10900) {
      income_tax = (30 * gross_salary) / 100 - 955;
    }

    // gross salary 1651-3200 => 35% income tax =>deduction 1500 birr
    else if (gross_salary > 10900) {
      income_tax = (35 * gross_salary) / 100 - 1500;
    } else {
      alert("Please Enter a Valid Gross Salary");
    }
  }
  pension = parseFloat((7 * gross_salary) / 100).toFixed(2);
  net_salary = parseFloat(gross_salary - income_tax - pension).toFixed(2);
  result = document.getElementById("result").innerHTML =
    "?????? ???????????? | Gross Salary= " +
    gross_salary +
    " ETB" +
    "<br/>" +
    "????????? ????????? | Income Tax = " +
    income_tax.toFixed(2) +
    " ETB" +
    "<br/>" +
    "????????? | Pension = " +
    pension +
    " ETB";
    
    var netRes = document.getElementById('netSalRes').innerHTML = 
    "????????? ???????????? | Net Salary = " +
    net_salary +
    " ETB <br/>";
   
    // return false;
}
