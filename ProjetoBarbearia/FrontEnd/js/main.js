const openCad = document.querySelector("#agendarCorteBtn");
const modal = document.querySelector(".modal-Content");
const btnFechar = document.querySelector(".btn-fechar");
const linkCad = document.querySelector("#link-cad");
const fade = document.querySelector(".modal-fade");

openCad.addEventListener("click", () => {
  modal.style.display = "block";
  modal.style.position = "fixed";
  fade.style.display = "block";
});

linkCad.addEventListener("click", () => {
  modal.style.display = "block";
});

btnFechar.addEventListener("click", () => {
  modal.style.display = "none";
  fade.style.display = "none";
});
