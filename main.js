const prompt = require('prompt-sync')({sigint: true});

let programChoice = prompt("Please enter combine or deconstruct: ")


let combine = "combine"
let deconstruct = "deconstruct"

let purple = "purple"
let orange = "orange"
let green = "green"
let redBlue = "red + blue"
let blueYellow = "blue + yellow"
let redYellow = "red + yellow"


if (programChoice === combine){
let combined = prompt("Please enter two colors: ")
    if (combined === redBlue){
    console.log("Purple")}
    if(combined === redYellow){
    console.log("Orange")}
    if(combined === blueYellow)
    (console.log("Green"))
       
} 
 

if (programChoice === deconstruct){
let deconstructed = prompt("Please enter one colors: ")
    if (deconstructed === purple){
    console.log("red + blue")} 
    if (deconstructed === orange){
    console.log("red + yellow")}
    if(deconstructed === green )
    console.log("blue + yellow")

}