
const meter = 3.281
const liter = 0.264
const kilogram = 2.204

let value = 0
const lengthResult = document.getElementById("length-result-paragraph")
const volumeResult = document.getElementById("volume-result-paragraph")
const massResult = document.getElementById("mass-result-paragraph")

const convertBtn = document.getElementById("convert-button").addEventListener("click", () => {
    buildResultContent(value)
})

function buildResultContent(value) {
    value = parseFloat(document.getElementById("inputValue").value)
    lengthResult.innerHTML = `${value} meters = ${(value * meter).toFixed(3)} feet | ${value} feet = ${(value / meter).toFixed(3)} meters`
    volumeResult.innerHTML = `${value} liters = ${(value * liter).toFixed(3)} gallons | ${value} gallons = ${(value / liter).toFixed(3)} liters`
    massResult.innerHTML = `${value} kilos = ${(value * kilogram).toFixed(3)} pounds | ${value} pounds = ${(value / kilogram).toFixed(3)} kilos`
}
