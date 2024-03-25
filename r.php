
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Required library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!-- Bootstrap theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<!-- reCAPTCHA v3 js -->
<script src="https://www.google.com/recaptcha/api.js?render=6LeHn6MpAAAAAJDIewfHk4HhhQnrgz4ZPRfAneBU"></script>
</head>
<body>
    <form name="login_form" id="login_form" method="post" action="#" enctype="multipart/form-data">
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" class="form-control" placeholder="Enter your email" required="true">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" class="form-control" placeholder="Enter your password" required="true">
            </div>
            <button type="button" onclick="login()" class="btn btn-success">Login Now</button>
          </div>
          <!-- end col -->\

      </form>

      <script>
        function login() {
          grecaptcha.ready(function() {
            grecaptcha.execute('6LeHn6MpAAAAAJDIewfHk4HhhQnrgz4ZPRfAneBU', {
              action: 'submit'
            }).then(function(token) {
              // Add your logic to submit to your backend server here.
              var email = $("#email").val();
              var password = $("#password").val();
              console.log(email);
              console.log(password);
              console.log(token);
              $.ajax({
                url: "test.php",
                type: "POST",
                dataType: 'json',
                data: {
                  email: email,
                  password: password,
                  token: token
                },
                success: function(response) {
                  if (response.status == true) {
                    alert(response.msg);
                  } else {
                    alert(response.msg);
                  }
                },
                error: function(xhr, status) {
                  console.log('ajax error = ' + xhr.statusText);
                }
              });
            });
          });
        }
      </script>
</body>
</html>