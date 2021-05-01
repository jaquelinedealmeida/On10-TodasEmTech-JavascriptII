let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        subtitle: "A JavaScript and jQuery Developer's Guide",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        subtitle: "An In-Depth Guide for Programmers",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        subtitle: "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        subtitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    }
]


function addLivros() {
    
    books.map((book) => {
        const parseData = new Date(book.published);
        const data = parseData.setDate(parseData.getDate() +1);
        const dataFormatada = parseData.toDateString('pt-br');

document.getElementById('corpoTabela').innerHTML += 
`
<tr >
<td> ${book.title}</td>
<td> ${book.author}</td>
<td> ${book.isbn}</td>
<td> ${book.pages}</td>
<td> ${dataFormatada}</td>
<td><button class="delete">Remover</button></td>
</tr>
`
})

}

addLivros();


function exibirDados(event) {
    event.preventDefault();

let pegaTitle = document.getElementById('tituloLivro').value;
let pegaAuthor = document.getElementById('nomeAutor').value;
let pegaIsbn = document.getElementById('isbnLivro').value;
let pegaPages = document.getElementById('paginasLivro').value;
let pegaDate = document.getElementById('dataPublicacao').value;

if(pegaTitle === "" || pegaAuthor === "" || pegaIsbn === "" ||pegaPages === "" || pegaDate === "") {
  alert("Campo Obrigatorio não preenchido")
} else {
books.push ({
    author: pegaAuthor,
    title: pegaTitle,
    isbn: pegaIsbn,
    pages: pegaPages,
    published: pegaDate,

});
limparDados();
addLivros();
}

}

function limparDados() {

  document.getElementById('tituloLivro').value = "";
  document.getElementById('nomeAutor').value = "";
  document.getElementById('isbnLivro').value = "";
  document.getElementById('paginasLivro').value = "";
  document.getElementById('dataPublicacao').value = "";
 
}
 document.getElementById('corpoTabela').addEventListener('click', function removerLinha(event) {
     if(event.target.className === "delete") {
     let botao = event.target.parentElement;
     botao.parentElement.remove();
     }
 })
