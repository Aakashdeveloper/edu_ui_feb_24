var a = 10
var b = 20
a+b
30

///////////////
keyword nameoffunction(parameters){
    return value
}

function add(a,b){
    return a+b
}

add(1,2)
3
add(4,232)
236
add("A","efe")
'Aefe'

//es6
let add = (a,b) => {return a+b}
add(4,5)
9

//////////
function add(...args){
   // console.log(args) [2,7,5,9]
   let out = 0;
   for(data of args){
       //out = out+data
       out += data
   }
   return out
}


add(2,7,5,9)
23
add(2,1,4,4)
11
add(2,1,4)
7
add(2,1)
3