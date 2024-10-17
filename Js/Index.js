/**
 * fonction pour le bruit N°1 des bouton
 */

function soundButton1(){

    const audio = new Audio("../sound/button/cyberpunk-message.mp3")
    audio.play()

}


/**
 * fonction qui gère un bouton
 */

function button(href){

    const link = "#"+href

    document.location.href =link

    soundButton1()

}





