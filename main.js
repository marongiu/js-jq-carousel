// Creo le variabili per selezionare gli elementi

var sliderNext = $('.next i') // Seleziono angle-right
var sliderPrev = $('.prev i') // Seleziono angle-left


sliderNext.click(function() {
  var image = $('.images img.active') // Seleziono l' immagine con la classe active
  image.removeClass('active'); // La rimuovo
  image.next().addClass('active'); // Selezioni la successiva e aggiungo la classe active

  var circle = $('.nav i.active')
  circle.removeClass('active'); // La rimuovo
  circle.next().addClass('active'); // Selezioni la successiva e aggiungo la classe active

// Se l'ultima immagine che seleziono con la classe .active ha la classe .last allora
  if (image.hasClass('last')) {
    // Aggiungo la classe active alla prima immagine per ricreare il ciclo
    var firstImage = $('.images img.first').addClass('active');
    var firstCircle = $('.nav i.first').addClass('active');
  }
})

// Faccio la stessa cosa con l'angle left ma ribaltando le condizioni last/first
sliderPrev.click(function() {
  var image = $('.images img.active') // Seleziono l' immagine con la classe active
  image.removeClass('active'); // La rimuovo
  image.prev().addClass('active'); // Selezioni la successiva e aggiungo la classe active

  var circle = $('.nav i.active')
  circle.removeClass('active'); // La rimuovo
  circle.prev().addClass('active'); // Selezioni la successiva e aggiungo la classe active

// Se l'ultima immagine che seleziono con la classe .active ha la classe .last allora
  if (image.hasClass('first')) {
    // Aggiungo la classe active alla prima immagine per ricreare il ciclo
    var firstImage = $('.images img.last').addClass('active');
    var firstCircle = $('.nav i.last').addClass('active');
  }
})
