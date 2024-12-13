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

document.getElementById("ToGame").addEventListener('click', function(){
    summonGame();
})


window.addEventListener('keydown', function(keyPress){
    switch (keyPress.key){
        case 'Enter':
            summonGame();
            break;
    }
});
