// detectamos media query con matchMedia
// console.log(window.matchMedia("(prefers-color-scheme: dark)"));
const checkbox = document.querySelector("#checkbox");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //   console.log("mero lek");
  checkbox.setAttribute("checked", true);
}

// document.body.style.setProperty("--cardGray", "blue");
checkbox.addEventListener("change", function (event) {
  // console.log(this.checked);
  // if (this.checked) {
  //   document.body.classList.add("is-dark-mode");
  // } else {
  //   document.body.classList.remove("is-dark-mode");
  // }
  // verificamos si el boton esta chekeado
  if (this.checked) {
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");
    // --cardGray: #252b43;
    // --baseBackgroud: #1d2029;
    // --baseColor: rgb(238, 236, 236);
    // --gray: #8088ad;
    // --lightGray: #1d2029;
    // --cardTitle: #8088ad;
    // --switchSpinner: #282943;
    // --switch: linear-gradient(to right, #4796d2 0%, #37ce8f 100%);
  } else {
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
  }
});
