function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    
    let checkbox = document.querySelector(`.c-password__hidden-chkbx`);
    let passwordInput = document.querySelector(`.c-password_input`);
    checkbox.addEventListener(`change`, function(){

        if(checkbox.checked){
            passwordInput.type = "password";
            
            console.log("checked")
        }
        else{
            passwordInput.type = "text";
            console.log("unchecked")
        }
        


    })

}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});