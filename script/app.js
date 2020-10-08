function handleFloatingLabel() {
   
}


function handlePasswordSwitcher() {
    
    let checkbox = document.querySelector(`.c-toggle-password__checkbox`);
    let passwordInput = document.querySelector(`.c-toggle-password__input`);
    try{checkbox.addEventListener(`change`, function(){

        if(checkbox.checked){
            passwordInput.type = "password";
            
            console.log("checked")
        }
        else{
            passwordInput.type = "text";
            console.log("unchecked")
        }
        


    })}
    catch{

    }
    

}



document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    getDOMElements();
});