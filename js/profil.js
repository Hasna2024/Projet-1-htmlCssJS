// document.addEventListener("DOMContentLoaded", function () {
//   // Récupérer les informations de l'utilisateur depuis le localStorage
//   var user = JSON.parse(localStorage.getItem("user"));

//   // Vérifier si des informations d'utilisateur sont présentes dans le localStorage
//   if (user) {
//     // Afficher le nom d'utilisateur et l'email dans les champs correspondants
//     document.getElementById("username").value = user.username;
//     document.getElementById("email").value = user.email;
//   }

//   // Ajouter un gestionnaire d'événement au formulaire de profil
//   document
//     .getElementById("profileForm")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();

//       // Récupérer les options choisies par l'utilisateur
//       var selectedMemory = document.getElementById("selectMemory").value;
//       var selectedSize = document.getElementById("selectSize").value;

//       // Enregistrer les options choisies dans le localStorage
//       var options = { memory: selectedMemory, size: selectedSize };
//       localStorage.setItem("userOptions", JSON.stringify(options));

//       // Rediriger l'utilisateur vers la page de jeu
//       window.location.href = "jouer.html";
//     });
// });

function submitForm() {
  event.preventDefault();

  // Get the selected option
  var selectBox = document.getElementById("selectBox");
  var selectedOption = selectBox.options[selectBox.selectedIndex];

  // Get the data-url attribute value
  var dataUrl = selectedOption.getAttribute("data-url");

  // Redirect the user to the selected option's page
  window.location.href = dataUrl + ".html"; // Append .html extension
}
