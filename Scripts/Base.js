const ShowCase = false;

function summonGame(){
    window.location.href="HTML/01010011-01001111-01010011.html";
}
function summonCredits(){
    window.location.href="HTML/Credits.html";
}

function summonAbout(){
    window.location.href="HTML/About.html"
}

function summonProfolio(){
    window.location.href="https://daena-at-the-bridge-a34a36.gitlab.io/";
}

document.getElementById("ToGame").addEventListener('click', function(){
    summonGame();
})

document.getElementById("toCredits").addEventListener('click', function(){
    summonCredits();
})

document.getElementById("toAbout").addEventListener('click', function(){
    summonAbout();
})

document.getElementById("toProfolio").addEventListener('click', function(){
    summonProfolio();
})

window.onload = function (){
    if(ShowCase == true){
        document.getElementById('Track').src="Audio/Proprietery/01 Christian Salyer - Intro.mp3";
        document.getElementById('Track').loop= true;
    }
    document.getElementById('calanderDate').innerText= "2024 - " + new Date().getFullYear();
}

window.addEventListener('keydown', function(keyPress){
    switch (keyPress.key){
        case 'Enter':
            summonGame();
            break;
        case 'Backspace':
            summonCredits();
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
