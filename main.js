const form = document.getElementById("form-login");
const nomes = [];

let linhas = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  adicionaLinha();
  atualizaTabela();
  mostrarTabela();
  
});

function adicionaLinha() {
  const inputUserName = document.getElementById("username");
  const inputPhone = document.getElementById("phone");

  if (nomes.includes(inputUserName.value)) {
    alert(`O nome: ${inputUserName.value} já foi atribuído!`);
  } else {
    nomes.push(inputUserName.value);

    let linha = "";
    linha += `<tr>`;
    linha += `<td>${inputUserName.value}</td>`;
    linha += `<td>${inputPhone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    
  }

  inputUserName.value = '';
  inputPhone.value = '';

}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function mostrarTabela() {
    const tabela = document.getElementById("table-contacts");
    tabela.style.display = "table"; 
}