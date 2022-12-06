// preloader

var loading = document.getElementById("loading");

window.addEventListener("load", function () {
  document.getElementById("loading").style.animation = "fading 0.2s infinite";

  const myTimeout = setTimeout(out, 200);

  function out() {
    loading.style.display = "none";
  }
});
