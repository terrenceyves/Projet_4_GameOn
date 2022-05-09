const success = document.getElementById("view-validate"); 

function validate(){
   form.addEventListener('submit', function(e){
      e.preventDefault(); 
      if(validateFirstName() && validateLasttName() && validateEmail() && validateDate && validateLocalisation && validateQuantity
       && validationcheckbox){
          success.style.display = "flex";  
       }
  
  });
}; 

 