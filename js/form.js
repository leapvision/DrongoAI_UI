


document.addEventListener("DOMContentLoaded", function() {
   
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
  
        // Disable submit button and show submitting status
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('submit-btn').value = 'Submitting...';
        
        // Collect form data
        var formData = new FormData(this);
  
        // Send form data using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.action, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
              
                alert("Meesage has been sent") ;
                // console.log( alert(xhr.responseText) )
                // Enable submit button and show original text
                document.getElementById('submit-btn').disabled = false;
                document.getElementById('submit-btn').value = 'SEND';
                document.getElementById('contactForm').reset(); // Optionally reset form fields
            } else {
                
                alert('Error occurred while submitting the form.');
                // Enable submit button and show original text
                document.getElementById('submit-btn').disabled = false;
                document.getElementById('submit-btn').value = 'SEND';
            }
        };
        xhr.send(formData);
    });









  });

