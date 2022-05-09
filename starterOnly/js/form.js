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
        firstName.parentElement.setAttribute('data-error', 'Error');
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    firstName.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}



