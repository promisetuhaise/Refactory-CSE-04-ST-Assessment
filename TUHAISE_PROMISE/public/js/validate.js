document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
  
    
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^0\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passportRegex = /^[A-Z]{3}\d{4}$/;
    const poBoxRegex = /^[A-Za-z\s\.]+\d{1,6}$/;
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
        form.classList.remove('was-validated');
        form.submit();
      } else {
        form.classList.add('was-validated');
      }
    });
  
    function validateForm() {
      let isValid = true;
  
     
      const fullName = document.getElementById('fullName');
      if (!nameRegex.test(fullName.value.trim())) {
        fullName.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        fullName.setCustomValidity('');
      }
  
      
      const gender = document.getElementById('gender');
      if (gender.value === 'none') {
        gender.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        gender.setCustomValidity('');
      }
  
     
      const dob = document.getElementById('dob');
      if (dob.value === '') {
        dob.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        dob.setCustomValidity('');
      }

     
  
     
      const nationality = document.getElementById('nationality');
      if (!nameRegex.test(nationality.value.trim())) {
        nationality.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        nationality.setCustomValidity('');
      }
  
      const phoneNumber = document.getElementById('phoneNumber');
      if (!phoneRegex.test(phoneNumber.value.trim())) {
        phoneNumber.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        phoneNumber.setCustomValidity('');
      }
  
      
      const emailAddress = document.getElementById('emailAddress');
      if (!emailRegex.test(emailAddress.value.trim())) {
        emailAddress.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        emailAddress.setCustomValidity('');
      }
  
     
      const emergencyPhone = document.getElementById('emergencyPhone');
      if (!phoneRegex.test(emergencyPhone.value.trim())) {
        emergencyPhone.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        emergencyPhone.setCustomValidity('');
      }
  
      
      const passportNumber = document.getElementById('passportNumber');
      if (!passportRegex.test(passportNumber.value.trim())) {
        passportNumber.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        passportNumber.setCustomValidity('');
      }
  
      
      const visaDocument = document.getElementById('visaDocument');
      if (visaDocument.files.length === 0) {
        visaDocument.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        visaDocument.setCustomValidity('');
      }


      const poBox = document.getElementById('poBox');
     if (poBox.value.trim() !== '' && !poBoxRegex.test(poBox.value.trim())) {
      poBox.setCustomValidity('Invalid field');
       isValid = false;
    } 
    else {
 
        poBox.setCustomValidity('');
}
  
    
      const departureCity = document.getElementById('departureCity');
      if (!nameRegex.test(departureCity.value.trim())) {
        departureCity.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        departureCity.setCustomValidity('');
      }
  
    
      const destinationCity = document.getElementById('destinationCity');
      if (!nameRegex.test(destinationCity.value.trim())) {
        destinationCity.setCustomValidity('Invalid field');
        isValid = false;
      } else {
        destinationCity.setCustomValidity('');
      }
  
      return isValid;
    }
  });
  


  (function () {
  'use strict';

  var forms = document.querySelectorAll('form');

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();  
          event.stopPropagation(); 

          form.querySelectorAll(':invalid').forEach(function (input) {
            input.classList.add('is-invalid'); 
            input.nextElementSibling.style.display = 'block'; 
          });
        } else {
          form.querySelectorAll('.invalid-feedback').forEach(function (element) {
            element.style.display = 'none'; 
          });

          
          document.getElementById('successMessage').classList.remove('d-none');
        }

        form.classList.add('was-validated');
      }, false);
    });
})();



(function () {
    'use strict';
  
    var forms = document.querySelectorAll('form');
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();  
            event.stopPropagation(); 
  
            form.querySelectorAll(':invalid').forEach(function (input) {
              input.classList.add('is-invalid');
              input.nextElementSibling.style.display = 'block'; 
            });
          } else {
            form.querySelectorAll('.invalid-feedback').forEach(function (element) {
              element.style.display = 'none'; 
            });
  
           
          }
  
          form.classList.add('was-validated');
        }, false);
      });
  })();
  

  document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const successAlert = document.querySelector('.alert-success');
  const errorAlert = document.querySelector('.alert-danger');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const isValid = validateForm(); 

    if (isValid) {
      try {
        await fetch('/Flights', {
          method: 'POST',
          body: new FormData(form)
        });
        if (successAlert) {
          successAlert.textContent = "Form submitted successfully!";
          successAlert.style.display = 'block';
        }
        setTimeout(() => {
          successAlert.style.display = 'none'; 
          window.location.href = '/RIM_AVA.GR/bookFlight'; 
        }, 2000);
      } catch (error) {
        console.error('Submission error:', error);
        if (errorAlert) {
          errorAlert.textContent = "Error while processing form submission. Please try again.";
          errorAlert.style.display = 'block';
        }
        setTimeout(() => {
          errorAlert.style.display = 'none'; 
        }, 2000);
      }
    } else {
      if (errorAlert) {
        errorAlert.textContent = "Please correct the errors and try again.";
        errorAlert.style.display = 'block';
      }
      setTimeout(() => {
        errorAlert.style.display = 'none'; 
      }, 2000);
    }
  });

  function validateForm() {
    
    return form.checkValidity();
  }
});
