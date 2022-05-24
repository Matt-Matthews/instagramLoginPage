const password = document.getElementById('password');
const username = document.getElementById('username');
const button = document.getElementById('button');

function buttonEnabler(){
    if(password.value != '' && username.value != ''){
        
        button.style.opacity = '1';
        button.style.cursor = 'pointer';
    }
    else{
        button.style.opacity = '30%';
        button.style.cursor = 'default';
    }
}

password.addEventListener('input',() => {
    buttonEnabler();
})


username.addEventListener('input',() => {
    buttonEnabler();
})


function clicked(){

    if(password.value != '' && username.value != ''){
        alert('You have logged in.')
    }
    
    e.preventDefault()
}
