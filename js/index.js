// PARTE DA FAQ
$(".botao").on("click", function(){
    $(".sub-item").slideUp();
    $(this).next().slideDown();
  });