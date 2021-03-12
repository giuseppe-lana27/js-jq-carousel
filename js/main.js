/* Creazione slider per carousel immagini*/
$(function() {

  // richiamo funzione per scorrere all'immagine successiva
  var next = $(".next");
  next.click(
    function (){
      nextImg();
      nextBull();
    }
  );
  // richiamo funzione per scorrere all'immagine precedente
  var prev = $(".prev");
  prev.click(
    function (){
      prevImg();
      prevBull();
    }
  );
  // richiamo funzioni per scorrere i bullets
  var nextBullet = $(".nav i");
  nextBullet.click(
    function(){
      nextBull();
      nextImg();
    }
  );
  var prevBullet = $(".nav i");
  prevBullet.click(
    function(){
      prevBull();
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
