/* DOM VARIABLES */
const calculateBtn = document.querySelector("#calculate")
let noOfWeeks = document.getElementById("numberOfWeeks")

let designRate = document.getElementById("designRate")
let devRate = document.getElementById("developmentRate")
let depRate = document.getElementById("deploymentRate")
let ktRate = document.getElementById("ktRate")

let noOfDesign = document.getElementById("numberOfDesign")
let noOfDev = document.getElementById("numberOfDevelopment")
let noOfDep = document.getElementById("numberOfDeployment")
let noOfKt = document.getElementById("numberOfKt")

let totalValueCont=  document.getElementById("totalValue")
let otherHalf = document.getElementById("otherHalf")

/* FUNCTIONS */

/* Calculates total value of sprint and create
element blocks per billing period */
const calculate = () => {
  total()
  let noOfWeeksNum = Number(noOfWeeks.value)
  let weekTracker = Math.ceil(noOfWeeksNum/4+1)
  let startOfTracker = 1
  for (i=1; i<= weekTracker; i+=1) {
    let newHeading = document.createElement("h2")
    newHeading.innerHTML=`Week ${startOfTracker}`
    otherHalf.appendChild(newHeading)
    startOfTracker += 4
  }
}
const total = () => {
  let designValue = Number(designRate.value)*Number(noOfDesign.value)
  let devValue = Number(devRate.value)*Number(noOfDev.value)
  let depValue = Number(depRate.value)*Number(noOfDep.value)
  let ktValue = Number(ktRate.value)*Number(noOfKt.value)
  let overAll = designValue + devValue + depValue + ktValue
  let newHeading = document.createElement("h2")
  newHeading.innerHTML=`Total: PHP ${overAll}.00`
  totalValueCont.appendChild(newHeading)
}

// const addElements = () => {
//   const newContainer = document.createElement("div")
//   const
// }

calculateBtn.addEventListener("click",calculate);
