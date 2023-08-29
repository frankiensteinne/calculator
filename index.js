/* DOM VARIABLES */
const calculateWeeksBtn = document.querySelector("#calculateWeeks")

let noOfWeeks = document.getElementById("numberOfWeeks")
let designRate = document.getElementById("designRate")
let devRate = document.getElementById("developmentRate")
let depRate = document.getElementById("deploymentRate")
let ktRate = document.getElementById("ktRate")

let noOfDesign = document.getElementById("numberOfDesign")
let noOfDev = document.getElementById("numberOfDevelopment")
let noOfDep = document.getElementById("numberOfDeployment")
let noOfKt = document.getElementById("numberOfKt")

const calculateWeeks = () => {
  let noOfWeeksNum = Number(noOfWeeks.value)
  let weekTracker = Math.ceil(noOfWeeksNum/4)
  console.log(weekTracker, noOfWeeksNum)
  let startOfTracker = 1
  for (i=1; i<= weekTracker; i+=1) {
    console.log(`week ${startOfTracker}`)
    startOfTracker += 4
  }
}

calculateWeeksBtn.addEventListener("click",calculateWeeks);
