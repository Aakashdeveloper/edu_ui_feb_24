if(condition){
    // do something
}else{
    //do something
}

var a = 10
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`) 
}
VM569:4 Number 10 is even

var a = 11
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`) 
}
VM573:6 Number 11 is odd

var a = 9
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`) 
}
VM578:6 Number 9 is odd

var a = 9
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} divisble by 3`)
}else{
    console.log(`Number ${a} is odd`) 
}


var a = 15
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} divisble by 3`)
}else{
    console.log(`Number ${a} is odd`) 
}
Number 15 divisble by 3

undefined
var a = 11
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} divisble by 3`)
}else{
    console.log(`Number ${a} is odd`) 
}
VM596:7 Number 11 is odd


let d = 1
if(d){
    console.log("Hii")
}else{
    console.log("Bie")
}
"Hii"

let d = 0
if(d){
    console.log("Hii")
}else{
    console.log("Bie")
}
Bie

/////////Ternary Operator///////
(single line if else)
condition? "if conditon true":"if conditon false"
let ae = 20
ae > 20 ? "Hii":"Bie"
"Bie"
let ae = 19
ae > 20 ? "Hii":"Bie"
'Bie'
let ae = 21
ae > 20 ? "Hii":"Bie"
'Hii'


let ae = 20
ae > 20 ? ae+1:ae-1
19

let ae = 21
ae > 20 ? ae+1:ae-1
22