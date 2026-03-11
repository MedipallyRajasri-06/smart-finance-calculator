// BASIC CALCULATOR

function add(){
let a = Number(document.getElementById("num1").value)
let b = Number(document.getElementById("num2").value)

document.getElementById("result").innerText = "Result: " + (a+b)
}

function sub(){
let a = Number(document.getElementById("num1").value)
let b = Number(document.getElementById("num2").value)

document.getElementById("result").innerText = "Result: " + (a-b)
}

function mul(){
let a = Number(document.getElementById("num1").value)
let b = Number(document.getElementById("num2").value)

document.getElementById("result").innerText = "Result: " + (a*b)
}

function div(){
let a = Number(document.getElementById("num1").value)
let b = Number(document.getElementById("num2").value)

document.getElementById("result").innerText = "Result: " + (a/b)
}


// EMI CALCULATOR

function calculateEMI(){

let P = document.getElementById("loan").value
let annualRate = document.getElementById("rate").value
let N = document.getElementById("time").value

let R = annualRate/(12*100)

let emi = (P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1)

document.getElementById("emiResult").innerText = "Monthly EMI: " + emi.toFixed(2)

}


// SIP CALCULATOR

function calculateSIP(){

let investment = document.getElementById("investment").value
let rate = document.getElementById("returnRate").value/100/12
let months = document.getElementById("years").value*12

let futureValue = investment*((Math.pow(1+rate,months)-1)/rate)*(1+rate)

document.getElementById("sipResult").innerText = "Future Value: " + futureValue.toFixed(2)
let ctx = document.getElementById('sipChart')

new Chart(ctx, {
type: 'line',
data: {
labels: ["Year1","Year2","Year3","Year4","Year5"],
datasets: [{
label: "Investment Growth",
data: [10000,20000,30000,45000,60000]
}]
}
})
}


// EXPENSE SPLIT

function splitExpense(){

let bill = document.getElementById("bill").value
let people = document.getElementById("people").value

let each = bill/people

document.getElementById("splitResult").innerText = "Each person pays: " + each

}
