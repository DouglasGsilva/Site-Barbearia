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

//cadastro
const inputNome = document.querySelector("#input-nome");
const inputEmail = document.querySelector("#input-email");
const inputPassoword = document.querySelector("#input-password");
const confirmPsw = document.querySelector("#input-confirmpsw");
const cadform = document.querySelector("#cadastro-form");

const url = "http://localhost:3000/api/services";

async function addCadastro(cadastro) {
  const response = await fetch(`${url}`, {
    method: "POST",
    body: cadastro,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    modal.style.display = "none";
    fade.style.display = "none";
  }

  document.querySelector("#nomeLogin").innerText = inputNome.value;
}

cadform.addEventListener("submit", (e) => {
  e.preventDefault();

  let cadastro = {
    email: inputEmail.value,
    name: inputNome.value,
    password: inputPassoword.value,
    confirmPassword: confirmPsw.value,
  };

  cadastro = JSON.stringify(cadastro);

  addCadastro(cadastro);
});
