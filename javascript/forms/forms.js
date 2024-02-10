function validateFname(){
    let name = document.getElementById('fname').value;
    if(name.trim().length == 0){
        document.getElementById('fout').innerText = 'Please enter first name'
    }else{
        document.getElementById('fout').innerText = ''
    }
}


function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText = 'Please enter email'
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText = 'Please enter valid email'
        }else{
            document.getElementById('eout').innerText = ''
        }
       
    }
}

const validatePass=() => {
    let pwd = document.getElementById('pwd').value;
    if(pwd.trim().length<15){
        if(pwd.trim().length<8){
            document.getElementById('pout').innerText = "Min length is 8";
            document.getElementById('ppout').style.display = "block";
            document.getElementById('ppout').style.background="red"
        }else if(pwd.trim().length>8 && pwd.trim().length<11){
            document.getElementById('pout').innerText = "";
            document.getElementById('ppout').style.background="orange"
        }
    }else{
        document.getElementById('ppout').style.background="green"
    }
}