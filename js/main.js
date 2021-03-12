/* Creazione slider per carousel immagini*/
$(function() {

  // richiamo funzione per scorrere all'immagine successiva
  var next = $(".next");
  next.click(
    function (){
      nextImg();
    }
  );
  // richiamo funzione per scorrere all'immagine precedente
  var prev = $(".prev");
  prev.click(
    function (){
      prevImg();
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
// creo funzione per scorrere all'immagine precedente
function prevImg(){
  var imgActive = $(".images img.active");
  var lastImg = $(".images img.last");
  imgActive.removeClass("active");
  if (imgActive.hasClass("first") == true ){
    lastImg.addClass("active");
  } else {
    imgActive.prev().addClass("active");
  }
}
