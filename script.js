const pwd = document.getElementById('password');

const pwdConfirm = document.getElementById('confirm-password');

const confirm = document.querySelector('.password');

const createAccount = document.querySelector('.create');

const loginText = document.querySelector('.login');

const loginButton = document.getElementById('loginButton');

const closeButtons = document.querySelectorAll('.close')

const inputs = document.querySelectorAll('.validate');

const loginInputs = document.querySelectorAll('.validateLogin');


//add event listener to create account button
createAccount.addEventListener("click", signUp);

//add event listener to listen to the confirm password 
pwdConfirm.addEventListener("input", function (e) {
    if (pwd.value == pwdConfirm.value) {
        pwdConfirm.classList.add('valid');
        pwdConfirm.classList.remove('invalid');
        confirm.innerText = "";
    }

    else {
        pwdConfirm.classList.add('invalid');
        pwdConfirm.classList.remove('valid');
        confirm.innerText = "Passwords do not match";
    }
})

//add event listener to the login text
loginText.addEventListener("click", login);

//Add event listener to login button
loginButton.addEventListener('click', verifyLogin);

//add event listener to each close button
closeButtons.forEach(button => button.addEventListener('click', close));

//add event listener to all inputs (other than confirm password)
inputs.forEach(input => input.addEventListener("input", function (e) {

    //removes the span (if there was content in it)
    this.nextElementSibling.innerText = "";
}))

function signUp() {

    let valid = true;

    //check to see that all forms have been input and are valid 
    inputs.forEach(input => {
        if (input.checkValidity() == false) {
            input.nextElementSibling.innerText = "Please enter a valid input";
            valid = false;
        }
    })

    if (pwd.value != pwdConfirm.value) {
        confirm.innerText = "Passwords do not match"

        valid = false;
    }

    if (valid) {
        //display modal
        document.getElementById('signed-up').style.display = 'flex';

        document.querySelector('.welcome').innerText = 'Welcome ' + document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
    
        //make all inputs readonly
        inputs.forEach(input => input.readOnly = true);
        pwdConfirm.readOnly = true;
    
    }



}

function login(){
    
    //display modal
    document.getElementById('login').style.display = 'flex';

    //make all inputs readonly
    inputs.forEach(input => input.readOnly = true);
    pwdConfirm.readOnly = true;


}

function verifyLogin(){
    let valid = true;

    //check to see that all forms have been input and are valid 
    loginInputs.forEach(input => {
        if (input.checkValidity() == false) {
            
            if (input.type == 'text'){
                input.nextElementSibling.innerText = "Please enter your username";
            }
            
            else if(input.type == 'password'){
                input.nextElementSibling.innerText = "Please enter your password";
            }

            valid = false;
        }
    })

    if (valid) {
        //display modal
        document.getElementById('welcome-back').style.display = 'flex';

        document.querySelector('.welcome-back').innerText = 'Welcome back ' + document.getElementById('userNameLogin').value +'!';

        //close login modal
        document.getElementById('login').style.display = 'none';
    }



}


function close() {

    //close open modal
    this.parentElement.style.display = 'none';

    //make all inputs editable
    inputs.forEach(input => input.readOnly = false);
    pwdConfirm.readOnly = false;

}


