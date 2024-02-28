(function () {
  "use strict";

  // Sélectionnez le formulaire
  var form = document.getElementById("registrationForm");

  // Ajoutez une fonction de gestionnaire de soumission
  form.addEventListener(
    "submit",
    function (event) {
      // Vérifiez si le formulaire est valide
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Capturer les données du formulaire
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      // Créer un objet utilisateur
      var user = {
        username: username,
        email: email,
        password: password,
      };

      // Récupérer les utilisateurs déjà enregistrés dans le localStorage
      var users = JSON.parse(localStorage.getItem("users")) || [];

      // Ajouter le nouvel utilisateur au tableau
      users.push(user);

      // Enregistrer le tableau d'utilisateurs mis à jour dans le localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // Rediriger l'utilisateur vers la page de connexion
      window.location.href = "connection.html";

      event.preventDefault();
    },
    false
  );
})();
