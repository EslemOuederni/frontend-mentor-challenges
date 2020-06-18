const form = document.getElementById('form');
// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

form.addEventListener('submit', e =>{ 
    e.preventDefault();
    const fname = form['fname'].value;
    const lname = form['lname'].value;
    const email = form['email'].value;
    const password = form['password'].value;


    if (!fname){
        addErrorTo('fname');  
    }else{
        removeError('fname');
    }
    if (!lname){
        addErrorTo('lname');
        
    }else{
        removeError('lname');
    }
    if (!email){
        addErrorTo('email');
    }else if(!validateEmail(email)){
        addErrorTo('email');
    }else {
            removeError('email');
        }
    if (!password){
        addErrorTo('password');
    } else{
        removeError('password');
    }
});
function removeError(field,){
    const formControl = form[field].parentNode;
        formControl.classList.remove('error');
    const small =  formControl.querySelector('small');
        small.style.opacity = '0';
 }
function addErrorTo(field){
    const formControl = form[field].parentNode;
        formControl.classList.add('error');
    const small=  formControl.querySelector('small');
         small.style.opacity = '1';
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}