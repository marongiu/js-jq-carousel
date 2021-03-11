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

  if (image.hasClass('last')) {
    var firstImage = $('.images img.first').addClass('active');
  }
})
