document.getElementById("connexion").addEventListener("submit",function(e) {

  e.preventDefault(); /*cette ligne empêche le rafraîchissement automatique du formulaire en js*/

  var erreur;
  var email = document.getElementById("email");
  var password = document.getElementById("password");


  if (!email.value) {
    erreur = "Please enter your email address !";
  }

  if (!password.value) {
    erreur = "Please enter your password !";
  }


  if (erreur) {
    document.getElementById("erreur").innerHTML = erreur;
  } else {
    alert('Your submission has been sent !');
  } 
});
