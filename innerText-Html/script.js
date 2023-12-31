let elementoH1 = document.querySelector("h1");
let elementoA = document.querySelector("a");
let elementoOl = document.querySelector("ol");
let elementoUl = document.querySelector("ul");

elementoH1.innerText = "Agora, no Index-2 temos um título e antes estava vazio";
elementoA.innerText = "Aqui você vai acessar a página da Proz";

elementoOl.innerHTML = 
`
<ol id="lista-ordenada">
    <li><a href="https://online.nib.org.br/">Site da Igreja</a></li>
    <li><a href="https://github.com/RafaelFCouto">Repositório Remoto</a></li>
    <li><a href="https://fluencypass.com/">Inglês</a></li>
</ol>
`

elementoUl.innerHTML = 
`
<ul>
    <li>Happy</li>
    <li>New</li>
    <li>Year</li>
</ul>

`