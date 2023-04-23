function validation() {
  var password = document.getElementById("password").value;

  var passwordcheck = /^(?=.*d)(?=.*[a-zA-Z]).{8,20}$/;

  if (passwordcheck.test(password)) {
    document.getElementById("pass").innerHTML = "";
  } else {
    document.getElementById("pass").innerHTML =
      "Password must be alphanumeric (@,_and-are alsoallowed) and between 8-20 characters";
    return false;
  }
}
