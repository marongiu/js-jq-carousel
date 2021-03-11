// Creo le variabili per selezionare gli elementi

var sliderNext = $('.next i') // Seleziono angle-right
var sliderPrev = $('.prev i') // Seleziono angle-left
var image = $('.images img.active') // Seleziono immagini
var circle = $('nav i')


sliderNext.click(function() {
    image.removeClass('active');
    image.next().addClass('active');
})
