const ShowCase = false;

class Player{
    constructor(name, num){
        this.name = name;
        this.Y = num%10;
        this.X = (num - this.Y)/10;
        this.attempt = 0;
        this.Messeges = ["Are you sure you want to leave the forest?", "The Darkness calls to you.", "You turned your back and left the forest."];
    }

    MoveUp(){
        if (this.Y > 0 && this.X !=2 && this.X != 0){
            if(Bucket.AltMode() == true && Sword.got() == true){
            this.Y--;
            this.attempt = 0;
            this.checkMove();
            window.location.href="End.html";
            }
            else
            {
                Error('You are not ready yet!')
            }
        }
        else{
            switch (this.attempt){
                case 0:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;
                    
                case 1:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;

                case 2:
                    Error(this.Messeges[this.attempt]);
                    setTimeout(this.kill, 3000);
                    break;
            }
        }
    }
    MoveDown(){
        if (this.Y < 1){
            this.Y++;
            this.attempt = 0;
            this.MoveTo();
            this.checkMove();
        }
        else{
            switch (this.attempt){
                case 0:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;
                    
                case 1:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;

                case 2:
                    Error(this.Messeges[this.attempt]);
                    setTimeout(this.kill, 3000);
                    break;
            }
        }
    }
    MoveLeft(){
        if (this.X > 0){
            this.X--;
            this.attempt = 0;
            this.MoveTo();
            this.checkMove();

        }
        else{
            switch (this.attempt){
                case 0:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;
                    
                case 1:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;

                case 2:
                    Error(this.Messeges[this.attempt]);
                    setTimeout(this.kill, 3000);
                    break;
            }
        }
    }
    MoveRight(){
        if (this.X < 2){
            this.X++;
            this.attempt = 0;
            this.MoveTo();
            this.checkMove();
        }
        else{
            switch (this.attempt){
                case 0:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;
                    
                case 1:
                    Error(this.Messeges[this.attempt]);
                    this.attempt++;
                    break;

                case 2:
                    Error(this.Messeges[this.attempt]);
                    setTimeout(this.kill, 3000);
                    break;
            }
        }
    }

    checkMove(){
        //Check Y axis
        if (this.Y == 0 || this.X == 0  || this.X == 2){
            document.getElementById('Up').classList.add('Unavailable');
        }
        else
        {
            document.getElementById('Up').classList.remove('Unavailable');
        }
        if (this.Y == 1){
            document.getElementById('Down').classList.add('Unavailable');
        }
        else
        {
            document.getElementById('Down').classList.remove('Unavailable');
        }
        //Check X axis
        if (this.X == 2){
            document.getElementById('Right').classList.add('Unavailable');
        }
        else
        {
            document.getElementById('Right').classList.remove('Unavailable');
        }
        if (this.X == 0){
            document.getElementById('Left').classList.add('Unavailable');
        }
        else
        {
            document.getElementById('Left').classList.remove('Unavailable');
        }
    }

    kill(){
        window.location.href="Death.html" 
    }

    MoveTo(){
        Map[this.X][this.Y].summon();
    }

    getLocation(){
        return (this.X*10)+this.Y;
    }
}

class item {
    constructor(name, alt,des){
        this.des=des;
        this.alt=alt;
        this.name = name;
        this.Obtained = false;
        this.pic = "../Images/Items/" + this.name + ".svg";
        this.alter=false;
    }

    AltMode(){
        return this.alter;
    }

    Altered(des){
            this.alter=true;  
            this.des=des;
            this.pic = "../Images/Items/Alt/" + this.name + ".svg";
            this.summon();
    }

    got(){
        return this.Obtained;
    }

    summon(){
        this.Obtained=true;
        document.getElementById('ItemDescription').innerText=this.des;
        document.getElementById('ItemPic').src=this.pic;
        document.getElementById('ItemPic').alt=this.alt;
        document.getElementById('ItemNotification').classList.remove('Deactive');
        document.getElementById('ItemNotification').classList.add('ItemNotification')
        document.getElementById('ItemNotification').classList.add('Active');
        setTimeout(this.Vanquish,3000);
    }

    Vanquish(){
        document.getElementById('ItemNotification').classList.remove('ItemNotification');
        document.getElementById('ItemNotification').classList.remove('Active');
        document.getElementById('ItemNotification').classList.add('Deactive');
    }

}

class Sector{
    constructor(name, num, alt, des){
        this.alt = alt;
        this.name = name;
        this.num = num;
        this.des = des;
        this.alter=false;
        this.pic = "../Images/" + this.num + ".svg";
    }
    summon(){
        document.getElementById('scenery').src= this.pic;
        document.getElementById('scenery').alt= this.alt;
        document.getElementById('Title').innerText = this.name;
        document.getElementById('Text').innerText= this.des;
    }
    AltMode(){
        return this.alter;
    }
    Altered(des){
        this.alter=true;  
            this.des=des;
            this.pic = "../Images/Alt/" + this.num + ".svg";
            this.summon();
    }
}

function Quest(Messege){
    document.getElementById('Track').pause();
    document.getElementById('Sarosa').classList.remove('Deactive');
    document.getElementById('Sarosa').classList.add('Active');
    document.getElementById('Alerts').classList.remove('Deactive');
    document.getElementById('Alerts').classList.add('Active');
    document.getElementById('Alerts').classList.add('Quest');
    document.getElementById('Alerts').innerText=Messege;
    document.getElementById('Talk').play();
    setTimeout(clearAlert, 3000);
}

function Error(Messege){
    document.getElementById('Track').pause();
    document.getElementById('Sarosa').classList.remove('Deactive');
    document.getElementById('Alerts').classList.remove('Deactive');
    document.getElementById('Alerts').classList.add('Active');
    document.getElementById('Alerts').classList.add('Error');
    document.getElementById('Alerts').innerText=Messege;
    document.getElementById('Sarosa').classList.add('Active');
    document.getElementById('Talk').play();
    setTimeout(clearAlert, 3000);    
}

function Notice(Messege){
    document.getElementById('Track').pause();
    document.getElementById('Sarosa').classList.remove('Deactive');
    document.getElementById('Alerts').classList.remove('Deactive');
    document.getElementById('Alerts').classList.add('Active');
    document.getElementById('Alerts').innerText=Messege;
    document.getElementById('Sarosa').classList.add('Active');
    document.getElementById('Talk').play();
    setTimeout(clearAlert, 3000);    
}

function clearAlert()
{   
    document.getElementById('Track').play();
    document.getElementById('Alerts').classList.remove('Active');
    document.getElementById('Alerts').classList.remove('Error');
    document.getElementById('Alerts').classList.remove('Quest');
    document.getElementById('Alerts').classList.remove('Complete');
    document.getElementById('Sarosa').classList.remove('Active');
    document.getElementById('Alerts').classList.add('Deactive');
    document.getElementById('Sarosa').classList.add('Deactive');
    document.getElementById('Talk').pause();
}

function Warn(choice){
    document.getElementById('Track').pause();
    document.getElementById('Talk').play();
    document.getElementById('Warning').classList.remove('Dective');
    document.getElementById('Warning').classList.add('Active');
    document.getElementById('Warning').classList.add('Error');
    document.getElementById('Warning').classList.add('Warning');
    document.getElementById('agree').addEventListener('click', function(){
    document.getElementById('Warning').classList.add('Deactive');
    document.getElementById('Warning').classList.remove('Active');
    document.getElementById('Warning').classList.remove('Error');
    document.getElementById('Warning').classList.remove('Warning');
        switch (choice){
            case 0:
                window.location.href="../index.html";
                break;
            case 1:
                window.location.href="Credits.html";
                break;
            case 2:
                window.location.href="Death.html";
                break;
            case 3:
                window.location.href="https://daena-at-the-bridge-a34a36.gitlab.io/"
                break;
            case 4:
                window.location.href="About.html"
                break;
            default:
                clearAlert();
                break;
        }
    });
    document.getElementById('disagree').addEventListener('click', function(){
        document.getElementById('Warning').classList.add('Deactive');
        document.getElementById('Warning').classList.remove('Active');
        document.getElementById('Warning').classList.remove('Error');
        document.getElementById('Warning').classList.remove('Warning');
        clearAlert();
    });  
}

function reset(){
    document.getElementById("everything").innerHTML="";
}

function createAlerts(){
    //Create the alart section
    const Alerts = document.createElement("dialoge");
    Alerts.id = "Alerts";
    Alerts.classList.add('Deactive');
    const Sarosa = document.createElement("img");
    Sarosa.id = "Sarosa";
    Sarosa.classList.add('Deactive');
    document.getElementById('everything').appendChild(Sarosa);
    document.getElementById('everything').appendChild(Alerts);
}

function createVisual(){
    //Create the visual section
    const Visuals = document.createElement("div");
    Visuals.id = "Visuals";
    document.getElementById('everything').appendChild(Visuals);
    //Create image in visuals
    const Image = document.createElement("img");
    Image.id = "scenery";
    document.getElementById('Visuals').appendChild(Image);
}

function createContent(){
    //Create the Content section
    const Content = document.createElement("div");
    Content.id = "Content";
    document.getElementById('everything').appendChild(Content);
    //Create Description Section
    const Description = document.createElement("div");
    Description.id = "Description";
    document.getElementById('Content').appendChild(Description);
    //Create Controlls section
    const Controlls = document.createElement("div");
    Controlls.id = "Controlls";
    document.getElementById('Content').appendChild(Controlls);
}

function createControlls(){
    //Create Movement section
    const Movement = document.createElement("div");
    Movement.id = "Movement";
    document.getElementById('Controlls').appendChild(Movement);
    //Create Action section
    const Actions = document.createElement("div");
    Actions.id = "Actions";
    document.getElementById('Controlls').appendChild(Actions);
}

function createDescription(){
    //Create header2 Section
    const Title = document.createElement("h2");
    Title.id = "Title";
    document.getElementById('Description').appendChild(Title);
    //Create paragraph section
    const Text = document.createElement("p");
    Text.id = "Text";
    document.getElementById('Description').appendChild(Text);
}

function createMovement(){
    //Create move up button
    const Up = document.createElement("button");
    Up.id = "Up";
    Up.innerText="Move Up";
    Up.classList.add("Movement");
    Up.classList.add("Active");
    document.getElementById('Movement').appendChild(Up);
    document.getElementById('Up').addEventListener('click',function(){Player1.MoveUp();});

    //Create midrow button section
    const MidRow = document.createElement("div");
    MidRow.id = "MidRow";
    document.getElementById('Movement').appendChild(MidRow);
    //Create move Left button
    const Left = document.createElement("button");
    Left.id = "Left";
    Left.innerText="Move Left";
    Left.classList.add("Movement");
    Left.classList.add("Active");
    document.getElementById('MidRow').appendChild(Left);
    document.getElementById('Left').addEventListener('click',function(){Player1.MoveLeft();});
    //Create move Right button
    const Right = document.createElement("button");
    Right.id = "Right";
    Right.innerText="Move Right";
    Right.classList.add("Movement");
    Right.classList.add("Active");
    document.getElementById('MidRow').appendChild(Right);
    document.getElementById('Right').addEventListener('click',function(){Player1.MoveRight();});
    
    //Create move down button
    const Down = document.createElement("button");
    Down.id = "Down";
    Down.innerText="Move Down";
    Down.classList.add("Movement");
    Down.classList.add("Active");
    document.getElementById('Movement').appendChild(Down);
    document.getElementById('Down').addEventListener('click',function(){Player1.MoveDown();});

    Player1.checkMove();
}

function createActions(){
        //make use button
        const Use = document.createElement("button");
        Use.id = "Use";
        Use.type = "submit";
        Use.innerText="Use (H)";
        document.getElementById('Actions').appendChild(Use);
        document.getElementById('Use').addEventListener('click',function(){
            Uses();
        });

        /*//make Inventory button
        const Inventory = document.createElement("button");
        Inventory.id = "Inventory";
        Inventory.type = "submit";
        Inventory.innerText="Inventory (J)";
        document.getElementById('Actions').appendChild(Inventory);
        document.getElementById('Inventory').addEventListener('click',function(){Error('Not Implemented.');});*/

        //make giveUp button
        const giveUp = document.createElement("button");
        giveUp.id = "giveUp";
        giveUp.type = "submit";
        giveUp.innerText="Give Up (K)";
        document.getElementById('Actions').appendChild(giveUp);
        document.getElementById('giveUp').addEventListener('click', function(){
            Warn(2);
        });

        //make Observe button
        const Observe = document.createElement("button");
        Observe.id = "Observe";
        Observe.innerText="Observe (L)";
        document.getElementById('Actions').appendChild(Observe);
        document.getElementById('Observe').addEventListener('click',function(){
            Observes();
        });
}

function pageBuilder(){
    reset();
    createAlerts()
    createVisual();
    createContent();
    createControlls();
    createDescription();
    createMovement();
    createActions();
}

let Player1 = new Player('Joe', 11)

const Bucket = new item('Bucket','A bucket full of water.','What can you do with water?')

const Sword = new item('Sword', 'A sharp and fancy sword.', 'With this you have picked up the mantel to fight for what is right.')

const Map = [[],[],[]]

Map[0][1]= new Sector('Cathedral','01', 'A cathedral with 3 windows with images of wrenches, scales and people on it.', 'The cathedral is center of sharing. We do something and we get soemthing in return. The bedestool infront of teh church invite syou to play tik tak toe.');
Map[1][1]= new Sector('Forest','11', 'A dark forest with a campifre in it', 'In the dark night the forest gives you comfort. There are 2 doors infront of you. Where do they lead?');
Map[2][1]= new Sector('River','21', 'A dark forest with a campifre in it', 'Under the moon light a group of people have gathered around a rviver. Water is life. Life can be shared but so can death.');

window.onload = function (){
    if(ShowCase == true){
        document.getElementById('Track').src="../Audio/Proprietery/02 Christian Salyer - Home.mp3";
        document.getElementById('Track').loop= true;
    }
    document.getElementById('calanderDate').innerText= "2024 - " + new Date().getFullYear();
    pageBuilder();
    Player1.MoveTo();
    Quest("Kill the flame.");
}

function Observes(){
    switch (Player1.getLocation()){
        case 0:
            Error('You should not be here!');            
            break;

        case 1:
            Notice('Feels like you can interact with the stant.');
            break;

        case 2:
            Error('You should not be here!');            
            break;

        case 10:
            Error('You should not be here!');            
            break;
        
        case 11:
            Notice('The light from fire destracts you.');
            break;

        case 21:
            Notice('The people gather aroudn water have a bucket of water, this. Peopel are a comunity. You asked for a bucket of water and they delivered.');
            if(Bucket.got() == false){
                Bucket.summon(); 
            }
            break;
    }
}

function Uses(){
    switch (Player1.getLocation()){
        case 0:
            Error('You should not be here!');            
            break;

        case 1:
            if (Sword.got() == false){
            Notice('You fiddle with the tablet and win tik tac toe. So you did.');
            Sword.summon();
            }
            else {
                Error('The game has been won. You have the means to ascend. What else do you need?');
            }
            break;

        case 2:
            Error('You should not be here!');            
            break;

        case 10:
            Error('You should not be here!');            
            break;
        case 11:
            if(Bucket.got() == false){
                Error('Only flies are blinded by lights and jump into flames. You are not one of them.');            
            }
            else
            {   
                if(Bucket.AltMode() != true){
                Notice('You dump the water on the campfire. Only remnants remain and the bird man disapears');
                Bucket.Altered('The empty bucket has a few drops left in it.');
                Map[1][1].Altered('Remnents from the campfire shimmer and you notice the stars in the sky. Who was the birdman anyway?')}
                else
                {
                    Error('You kick the ashes and nothing hapens.');
                }
            }
            break;

        case 21:
            Error('You do not use the comunity. The comunity is strength.');            
            break;
    }
}

document.getElementById('toTitle').addEventListener('click', function(){
    Warn(0);
});

document.getElementById('toCredits').addEventListener('click', function(){
    Warn(1);
});

document.getElementById('toAbout').addEventListener('click', function(){
    Warn(4);
});

document.getElementById('toProfolio').addEventListener('click', function(){
    Warn(3);
});

//Keyboard input assignment
window.addEventListener('keydown', function(keyPress){
    switch (keyPress.key){
        case 'Enter':
            Warn(0);
            break;

        case 'w':
        case 'W':
        case 'ArrowUp':
            Player1.MoveUp();
            break;

        case 's':
        case 'S':
        case 'ArrowDown':
            Player1.MoveDown();
            break;

        case 'a':
        case 'A':
        case 'ArrowLeft':
            Player1.MoveLeft();
            break;

        case 'd':
        case 'D':
        case 'ArrowRight':
            Player1.MoveRight();
            break;

        case 'h':
        case 'H':
            Uses();
            break;

        case 'j':
        case 'J':
            Error('Not Implemented.')
            break;

        case 'k':
        case 'K':
            Warn(2);
            break;

        case 'l':
        case 'L':
            Observes();
            break;
    }
});
