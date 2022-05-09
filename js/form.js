/*** DOM ELEMENTS ***/

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const parentCheckBox = document.getElementById('parentCheckBox');
const location = document.querySelectorAll('#parentCheckBox .checkbox-input');
const checkboxPolicy = document.getElementById('checkbox1');
const checkboxPub = document.getElementById('checkbox2');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');

// REGEXP VARIABLES 

const regName = new RegExp("/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u", "g"); 
const regEmail = new RegExp("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"); 
const regDate = new RegExp("/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/", "gi"); 

// Validation FirstName
function validateFirstName() {
    if (firstName.value.trim().length < 2 || firstName.value.trim() === '', firstName.value.match(regName)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    firstName.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

// Validation LastName
function validateLasttName() {
    if (regName.value.trim().length < 2 || lastName.value.trim() === '', lastName.value.match(regName)) {
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    lastName.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}
// Validation Email
function validateEmail() {
    if (email.value.trim() === '' || email.value.match(regEmail) ) {
        email.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    email.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

// Validation Date
function validateDate() {
    if (birthdate.value.trim() === '' ||  birthdate.value.match(regDate)) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

// Validation Quantity
function validateQuantity() {
    if ( isNaN(quantity.value.trim()) === true || quantity.value.trim().length === 0 || quantity.value.trim() < 0) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    return true;
} 

// Validation Quantity
function validateLocalisation() {
   
    localisation.options[localisation.selectedIndex].value;
    textselectionne = localisation.options[localisation.selectedIndex].text;

        if (![liste.selectedIndex].value === 0) {
            location.parentElement.setAttribute('data-error', 'merci de séléctionner une ville');
            return true 
        } 
        location.parentElement.setAttribute('data-error-visible', 'false');
        return false
}

// Validation checkbox
function validationcheckbox(){
    if(checkboxPolicy.checked && checkboxPub.checked){
        checkboxPolicy.parentElement.setAttribute('data-error', 'merci de cocher la case');
        checkboxPub.parentElement.setAttribute('data-error', 'merci de cocher la case');
        return true
    }
    else{
        checkboxPolicy.parentElement.setAttribute('data-error', 'false');
        checkboxPub.parentElement.setAttribute('data-error', 'false');
        return false 
    }
}


