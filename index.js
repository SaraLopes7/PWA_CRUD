const meuInput = document.getElementById("personagem");
const minhaMain = document.getElementById("conteudo");

meuInput.addEventListener("input", function() {
  if (meuInput.value.trim() !== "") {
    minhaMain.style.display = "block";
  } else {
    minhaMain.style.display = "none";
  }
});






