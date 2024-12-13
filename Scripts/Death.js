const ShowCase = false;

window.onload = function (){
    if(ShowCase == true){
        document.getElementById('Track').src="../Audio/Proprietery/09 Christian Salyer - The Trailer Park.mp3";
        document.getElementById('Track').loop= true;
    }
    document.getElementById('calanderDate').innerText= "2024 - " + new Date().getFullYear();
}

function summonGame(){
    window.location.href="../index.html";
}

function summonCredits(){
    window.location.href="Credits.html";
}

document.getElementById("ToGame").addEventListener('click', function(){
    summonGame();
})

document.getElementById("toCredits").addEventListener('click', function(){
    summonCredits();
})

window.addEventListener('keydown', function(keyPress){
    switch (keyPress.key){
        case 'Enter':
            summonGame();
            break;
        case 'Backspace':
            summonCredits();
            break;
    }
});
