// interval > run after certain interval
// timeout > run only once after specific time

setInterval(function(){},time)


let myInterval = setInterval(function(){
    console.log(Math.random())
},3000)

0.20092355827545316
VM16782:2 0.5901406678206638
VM16782:2 0.940349975961625
VM16782:2 0.6885169557847746
VM16782:2 0.6482353084920518
clearInterval(myInterval)

////////////
setTimeout(function(){
    console.log(Math.random())
},3000)