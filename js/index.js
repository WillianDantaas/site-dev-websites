



// PARTE DA FAQ = FALTA TERMINAR

// Botões FAQ
let btnbuild = document.getElementById('btnbuild')
let btndoubts = document.getElementById('btndoubts')
let btnattom = document.getElementById('btnattom')
let btndesign = document.getElementById('btndesign')
let btntemplates = document.getElementById('btntemplates')

// Conteúdo FAQ

let sobrenos = document.getElementById('sobrenos').style.display = ' none'
let doubts = document.getElementById('cont-doubts').style.display = 'none'
let attom = document.getElementById('cont-attom').style.display = 'none'
let design = document.getElementById('cont-design').style.display = 'none'
let template = document.getElementById('cont-template').style.display = 'block'




btnbuild.addEventListener('click', (e) => {

    if (doubts.style.display === 'block' || attom.style.display === 'block' || design.style.display === 'block' || template.style.display === 'block') {

      sobrenos.style.display = 'block'

      // doubts.style.display = 'none'
      // attom.style.display = 'none'
      // design.style.display = 'none'
      // template.style.display = 'none'

    }


})

// btndoubts.addEventListener('click', (e) => {

  


// })

// btnattom.addEventListener('click', (e) => {

  


// })

// btndesign.addEventListener('click', (e) => {

  


// })

// btntemplates.addEventListener('click', (e) => {

  


// })




// parte de perguntas e respostas
$(".botao").on("click", function(){
    $(".sub-item").slideUp();
    $(this).next().slideDown();
  });