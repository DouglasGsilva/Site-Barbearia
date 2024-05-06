const openCad = document.querySelector("#agendarCorteBtn");
const modal = document.querySelector(".modal-Content");
const btnFechar = document.querySelector(".btn-fechar");
const overlay = document.querySelector(".overlay");

openCad.addEventListener("click", () => {
  modal.style.display = "block";
  modal.style.position = "fixed";
  overlay.style.display = "block";
});

btnFechar.addEventListener("click", () => {
  modal.style.display = "none";
});
