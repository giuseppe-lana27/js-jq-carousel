/* Creazione slider per carousel immagini*/
$(function() {
  // richiamo funzione per scorrere all'immagine successiva e cambiare il colore del bullet
  var next = $(".next");
  next.click(
    function (){
      nextImg();
      nextBull();
    }
  );
  // richiamo funzione per scorrere all'immagine precedente e cambiare il colore del bullet
  var prev = $(".prev");
  prev.click(
    function (){
      prevImg();
      prevBull();
    }
  );
  // richiamo funzione per scorrere immagini tramite bullets
  var changeBull = $(".nav .fas.fa-circle");
  changeBull.click(
    function(){
      toImage();
    }
  );
  // scorrimento delle immagini tramite l'uso delle frecce della tastiera
  $(document).keydown(
    function(e){
      if(e.keyCode == 39){
        nextImg();
        nextBull();
      } else if (e.keyCode == 37){
        prevBull();
        prevImg();
      }
    }
  )
}
);
// creo funzione per scorrere all'immagine successiva
function nextImg(){
  var imgActive = $(".images img.active");
  var firstImg = $(".images img.first");
  imgActive.removeClass("active");
  if (imgActive.hasClass("last") == true){
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
  if (imgActive.hasClass("first") == true){
    lastImg.addClass("active");
  } else {
    imgActive.prev().addClass("active");
  }
}

// creo funzione per scorrere i bullets
function nextBull(){
  var bullet = $(".nav i.active");
  var firstBullet = $(".nav i.first");
  bullet.removeClass("active");
  if (bullet.hasClass("last") == true){
    firstBullet.addClass("active");
  } else {
    bullet.next().addClass("active");
  }
}
function prevBull(){
  var bullet = $(".nav i.active");
  var lastBullet = $(".nav i.last");
  bullet.removeClass("active");
  if (bullet.hasClass("first") == true){
    lastBullet.addClass("active");
  } else {
    bullet.prev().addClass("active");
  }
}
// funzione per scorrere le immagini tramite i bullets
function toImage(){
  var bullet = $(".nav i");
  var image = $(".images img");
  var index = bullet.index($(this));
  $(".nav").children().removeClass("active");
  $(this).addClass("active");
  image.removeClass("active");
  image.eq(index).addClass("active");
}
