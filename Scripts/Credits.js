const ShowCase = false;

window.onload = function (){
    if(ShowCase == true){
        document.getElementById('Track').src="../Audio/Proprietery/21 Christian Salyer - Credits.mp3";
        document.getElementById('Track').loop= true;
    }
    document.getElementById('calanderDate').innerText= "2024 - " + new Date().getFullYear();
}

function summonGame(){
    window.location.href="../index.html";
}

function summonAbout(){
    window.location.href="../HTML/About.html"
}

function summonProfolio(){
    window.location.href="https://daena-at-the-bridge-a34a36.gitlab.io/"
}

document.getElementById("toGame").addEventListener('click', function(){
    summonGame();
})

document.getElementById("toAbout").addEventListener('click', function(){
    summonAbout();
})

document.getElementById("toProfolio").addEventListener('click', function(){
    summonProfolio();
})


window.addEventListener('keydown', function(keyPress){
    switch (keyPress.key){
        case 'Enter':
            summonGame();
            break;
        case 'K':
        case 'k':
            summonAbout();
            break;
        case 'L':
        case 'l':
            summonProfolio();
            break;
    }
});
