// var win = $(window),
//   nav = $("nav"),
//   pos = nav.offset().top,
//   sticky = function () {
//     win.scrollTop() > pos ? nav.addClass("sticky") : nav.removeClass("sticky");
//   };

// win.scroll(sticky);

// Sélectionner les éléments nécessaires
const win = window;
const nav = document.querySelector("nav");
const pos = nav.offsetTop;

// Fonction pour ajouter ou retirer la classe sticky
const sticky = () => {
  if (win.scrollY > pos) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

// Ajouter l'événement de défilement
win.addEventListener("scroll", sticky);
