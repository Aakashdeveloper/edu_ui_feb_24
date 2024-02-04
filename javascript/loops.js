Help to generate series of value as well as to iterate over the Array

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

for(i=0;i<10;i+= 2){
    console.log(i)
}
0
2
4
6 
8 

var city = ["Delhi","Mumbai","Amsterdam","Helsinki","Venice"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}
VM68:3 Delhi
VM68:3 Mumbai
VM68:3 Amsterdam
VM68:3 Helsinki
VM68:3 Venice


let i = 0
while(i<5){
    console.log(i);
    i++
}

// for of
var city = ["Delhi","Mumbai","Amsterdam","Helsinki","Venice"]
for(mycity of city){
    console.log(mycity)
}

Delhi
Mumbai
Amsterdam
Helsinki
Venice