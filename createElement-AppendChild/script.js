let criarH1 = document.createElement("h1");
criarH1.innerText = "Produtos";
criarH1.id = "titulo";

let homePage = document.querySelector("body");

homePage.appendChild(criarH1);

let criarSection = document.createElement("section");
criarSection.id = "produtos";

let criarDiv = document.createElement("div");
criarDiv.id="vitrine-produtos-eletronicos";

let criarListaOrdenada = document.createElement("ul");
criarListaOrdenada.id ="lista-produtos-eletronicos";

let criarElementoLista = document.createElement("li");
criarElementoLista.classList.add("produto-eletronico");
criarElementoLista.innerHTML = 
`
<h2 class="produto-titulo">Notebook</h2>
<img src="/img/notebook.png">
<p class="produto-texto">
    Notebook de última geração
</p>
<p class="produto-preco">R$ <span class="span-preco">2000,00</span></p>
`

criarListaOrdenada.appendChild(criarElementoLista);
criarDiv.appendChild(criarListaOrdenada);
criarSection.appendChild(criarDiv);
homePage.appendChild(criarSection);