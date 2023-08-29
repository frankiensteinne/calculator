/* DOM VARIABLES */
const calculateWeeksBtn = document.querySelector("#calculateWeeks");

const designRate = document.querySelector("#designRate").value;
const devRate = document.querySelector("#development-rate").value;


calculateWeeksBtn.addEventListener("click",myFunction);

function myFunction() {
  console.log(designRate+0, typeof designRate)
  console.log(document.getElementById("#designRate"))
  alert (designRate);
}