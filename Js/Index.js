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

function content(){

    document.location.href ="#test"

    const content =  document.querySelector("#content")

    const header = document.querySelector("header")

    const cross = document.querySelector("#cross")

    if( content.className == "content"){


        cross.style.visibility = "visible"

        header.style.visibility = "hidden"

        content.className="content-visibylity2"

        document.documentElement.style.overflow = "hidden"

    }else if(content.className == "content-visibylity2"){

        cross.style.visibility = "hidden"

        header.style.visibility = "visible"

        content.className="content"

        document.documentElement.style.overflow = "visible"
    }

    

}








