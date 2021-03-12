/* Creazione slider per carousel immagini*/
$(function() {

  // richiamo funzione per scorrere all'immagine successiva
  var next = $(".next");
  next.click(
    function (){
      nextImg();
    }
  );

  
}
);

// creo funzione per scorrere all'immagine successiva
function nextImg(){
  var imgActive = $(".images img.active");
  var firstImg = $(".images img.first");
  imgActive.removeClass("active");
  if (imgActive.hasClass("last") == true ){
    firstImg.addClass("active");
  } else {
    imgActive.next().addClass("active");
  }
}
