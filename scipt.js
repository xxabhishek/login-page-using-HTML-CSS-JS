function validation() {
  document.getElementById('usernameVal').innerHTML = "";
  document.getElementById('passwordVal').innerHTML = "";

  var UserName = document.getElementById('username').value;
  var Password = document.getElementById('password').value;

  if(UserName.trim() == ""){
    document.getElementById('usernameVal').innerHTML = "Username is required !!";
  }

  if(UserName && !isNaN(UserName)){
    document.getElementById('usernameVal').innerHTML = "Only letters and numbers are allowed!";
  }

  if(Password.trim() == "") {
    document.getElementById('passwordVal').innerHTML = "Password is required !";
  }

 if(Password &&  !isNaN(Password)){
    document.getElementById('passwordVal').innerHTML = "Password can only contain letters and numbers!";
  }
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password');
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}