/* DOM VARIABLES */
const calculateBtn = document.querySelector("#calculate");
const noOfWeeks = document.getElementById("numberOfWeeks");

const designRate = document.getElementById("designRate");
const devRate = document.getElementById("developmentRate");
const depRate = document.getElementById("deploymentRate");
const ktRate = document.getElementById("ktRate");

const noOfDesign = document.getElementById("numberOfDesign");
const noOfDev = document.getElementById("numberOfDevelopment");
const noOfDep = document.getElementById("numberOfDeployment");
const noOfKt = document.getElementById("numberOfKt");

const noOfMaintenance = document.getElementById("maintenanceMonth")
const maintenanceRate = document.getElementById("maintenanceValue")

const totalValueCont = document.getElementById("totalValue");
const otherHalf = document.getElementById("otherHalf");
const newBtn = document.createElement("button");

const toPHP = (num) => {
  return Number(num).toLocaleString('en-US', { style: 'currency', currency: 'PHP' });
}

const calculate = () => {
  otherHalf.innerHTML="";
  totalValueCont.innerHTML = "";

  const designValue = Number(designRate.value) * Number(noOfDesign.value);
  const devValue = Number(devRate.value) * Number(noOfDev.value);
  const depValue = Number(depRate.value) * Number(noOfDep.value);
  const ktValue = Number(ktRate.value) * Number(noOfKt.value);
  const overAll = designValue + devValue + depValue + ktValue;

  const withVat = overAll + (overAll*0.12)

  const maintenanceTotal = Number(noOfMaintenance.value)*Number(maintenanceRate.value)
  const overAllWithMaintenance = overAll + maintenanceTotal
  const overAllWithMaintenanceAndVat = overAllWithMaintenance  + (overAllWithMaintenance*0.12)

  const newHeading = document.createElement("h2");
  newHeading.innerHTML = `
 
  Service Total: ${toPHP(overAll)}<br>
  Service Total With Vat: ${toPHP(withVat)}</br></br>
  Maintenance: ${toPHP(maintenanceTotal)}</br>
  Total with Maintenance: ${toPHP(overAllWithMaintenance)}</br>
  Total with Maintenance & VAT: ${toPHP(overAllWithMaintenanceAndVat)}` 
  totalValueCont.appendChild(newHeading);

  

  const noOfWeeksNum = Number(noOfWeeks.value);
  const weekTracker = Math.ceil(noOfWeeksNum / 4 + 1);
  let startOfTracker = 1;

  for (let i = 1; i <= weekTracker; i += 1) {
    const newHeading = document.createElement("h2");
    newHeading.innerHTML = `Week ${startOfTracker}`;
    otherHalf.appendChild(newHeading);

    const newContainer = document.createElement("div");
    otherHalf.appendChild(newContainer);
    newContainer.innerHTML = "";


    if (startOfTracker === 1) {
      newContainer.innerHTML = `<h3>Amount: ${toPHP(overAll / 2)} <br>
      With Vat:${toPHP(withVat / 2)} </h3>`;
    } else {
      newContainer.innerHTML = `
        <div class="wrapper">
          <div class="payablesResult"><h3>PHP 0.00</h3></div>
          <label for="numDesign">Number of Design Sprints</label>
          <input type="text" name="numDesign" class="numDesign newInputEl"><br>
          <label for="numDev">Number of Development Sprints</label>
          <input type="text" name="numDev" class="numDev newInputEl"><br>
          <label for="numDep">Number of Deployment Activities</label>
          <input type="text" name="numDep" class="numDep newInputEl"><br>
          <label for="numKT">Number of KT Sessions</label>
          <input type="text" name="numKT" class="numKT newInputEl"><br>
        </div>
      `;

      // Attach input event listeners to calculate payables when input values change
      const inputFields = newContainer.querySelectorAll("input.newInputEl");
      inputFields.forEach(input => {
        input.addEventListener("input", () => {
          updatePayables(newContainer);
        });
      });
    }

    startOfTracker += 4;
  }
};

const updatePayables = (container) => {
  const numDesignValue = Number(container.querySelector(".numDesign").value);
  const numDevValue = Number(container.querySelector(".numDev").value);
  const numDepValue = Number(container.querySelector(".numDep").value);
  const numKtValue = Number(container.querySelector(".numKT").value);

  const payables =
    (numDesignValue * Number(designRate.value) +
      numDevValue * Number(devRate.value) +
      numDepValue * Number(depRate.value) +
      numKtValue * Number(ktRate.value)) /
    2;
  const payablesWithVat = (payables + payables*0.12)

  const payablesText = `${toPHP(payables)} <br>
  With Vat: ${toPHP(payablesWithVat)}`;
  container.querySelector(".payablesResult").innerHTML = `<h3>${payablesText}</h3>`;
};

calculateBtn.addEventListener("click", calculate);
