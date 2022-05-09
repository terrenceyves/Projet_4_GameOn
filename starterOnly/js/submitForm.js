const success = document.getElementById("view-validate"); 

function validate(){
   form.addEventListener('submit', function(e){
      e.preventDefault(); 
      if(validateFirstName()){
          success.style.display = "flex";  
       }
  
  });
}; 

 
