function playCraps(){
    console.log("playCraps() function Started");

    var die1 =Math.ceil(Math.random()*6);
    var die2 =Math.ceil(Math.random()*6);
    var sum = die1+die2
    console.log(sum)
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumsRes").innerHTML = "Sum = " + sum;
    if (sum == 7 || sum == 11) {
        loss = loss +1;
        document.getElementById("lossRes").innerHTML = loss;
        document.getElementById("finalRes").innerHTML = "Craps - you loose!";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        wins++;
        document.getElementById("winsRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLE - you win";
    }
    else {
        tie++;
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML = 
            "Draw - You neither won nor lost. Please try again.";
    }
    
}

function blastoff(){
    var currTime = 20;
        document.getElementById("countDownTimer").innerHTML = currTime;
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 2000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 4000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 6000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 8000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 10000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 12000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 14000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 16000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = currTime;
        }, 18000);
        setTimeout(function(){
            currTime = currTime - 2;
            document.getElementById("countdownTimer").innerHTML = "Blastoff";
        }, 20000);
}

function btrBlastoff(){
    console.log("btrBlastoff() started");
    var currTime = 50;
    for(var i = 0; i < 11; i = i++){
        setTimeout(function(){
            if(currTime >= 25){
                //if conditons are true
                document.getElementById("countDownTimer").innerHTML = currTime; 
            } else if (currTime == 0){
                //if else if conditons are true
                document.getElementById("countDownTimer").innerHTML = "blastoff";
            }else {
                //if conditons are false
                document.getElementById("countDownTimer").innerHTML = 
                "Warning Less than 1/2 way to lunch, time left = " + currTime;
            }
            currTime = currTime - 2;
        },i * 5000);
    }
}


function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}