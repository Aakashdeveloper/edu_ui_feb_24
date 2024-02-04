const calc = (opt) => {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = 0;
    if(opt == 'Add'){
        out = `Sum of Number is ${Number(a) + Number(b)}`;
    }else{
        out = `Sub of Number is ${Number(a) - Number(b)}`;
    }
    document.getElementsByClassName('output')[0].innerText=out
}


// function Add(){
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = Number(a)+Number(b);
//     document.getElementsByClassName('output')[0].innerText=`Sum of Number is ${out}`
// }

// const Sub = () => {
//     let a = document.getElementById('first').value;
//     let b = document.getElementById('second').value;
//     let out = Number(a)-Number(b);
//     document.getElementsByClassName('output')[0].innerText=`Sub of Number is ${out}`
// }