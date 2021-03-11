// Creo le variabili per selezionare gli elementi

var sliderNext = $('.next i') // Seleziono angle-right
var sliderPrev = $('.prev i') // Seleziono angle-left


// Selezioni con click
sliderNext.click(function() {
  next();
})

sliderPrev.click(function() {
  prev()
})


// Keyboard
$(document.documentElement).keyup(function (e) {

  if (e.keyCode == 39)
  {
    next();
  }

  if (e.keyCode == 37)
  {
    prev();
  }

});

// Funzioni
function next() {
  var image = $('.images img.active'); // Seleziono l' immagine con la classe active
  image.removeClass('active'); // La rimuovo
  image.next().addClass('active'); // Selezioni la successiva e aggiungo la classe active

  var circle = $('.nav i.active');
  circle.removeClass('active'); // La rimuovo
  circle.next().addClass('active'); // Selezioni la successiva e aggiungo la classe active

// Se l'ultima immagine che seleziono con la classe .active ha la classe .last allora
  if (image.hasClass('last')) {
    // Aggiungo la classe active alla prima immagine per ricreare il ciclo
    var firstImage = $('.images img.first').addClass('active');
    var firstCircle = $('.nav i.first').addClass('active');
  }
}

// Faccio la stessa cosa di sopra ma ribaltando le condizioni last/first
function prev() {
  var image = $('.images img.active'); // Seleziono l' immagine con la classe active
  image.removeClass('active'); // La rimuovo
  image.prev().addClass('active'); // Selezioni la successiva e aggiungo la classe active

  var circle = $('.nav i.active');
  circle.removeClass('active'); // La rimuovo
  circle.prev().addClass('active'); // Selezioni la successiva e aggiungo la classe active

// Se l'ultima immagine che seleziono con la classe .active ha la classe .last allora
  if (image.hasClass('first')) {
    // Aggiungo la classe active alla prima immagine per ricreare il ciclo
    var firstImage = $('.images img.last').addClass('active');
    var firstCircle = $('.nav i.last').addClass('active');
  }
}

// Funzioni aggiuntive grafiche

sliderNext.hover(function(event) {
  sliderNext.css('transform', 'scale(2)');
  sliderNext.css('color', '#7EA2F6');
});

sliderPrev.hover(function(event) {
  sliderPrev.css('transform', 'scale(2)');
  sliderPrev.css('color', '#7EA2F6');
});

var images = $('.images img');

images.css('filter', 'hue-rotate(55deg) contrast(120%)')
