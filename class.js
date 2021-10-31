class Rocket{
    //name states first
    construction(
        fueltype,
        weight,
        power
    ){
        this.fuelType = fueltype;
        this.weight = weight;
        this.power = power
    }
    lunch(){
        console.log("lunch sequence started");
        alert("lunch sequence started");
        return true;
    }
    landing(){
        console.log("landing squence started");
        alert("landing squence started");
        return true;
    }
    detatchThruster(thrusterID){
        console.log("detachThruster squence alert");
        alert("Thruster " + thrusterID + "has been detached");
        return true;
    }
}

class supplies{
    construction(
        food, 
        restroom,
        tools,
        oxygenTanks, 
    ){
        this.food = food;
        this.restroom = restroom;
        this.tools = tools;
        this.oxygenTanks = oxygenTanks;  
    }
} 

class mission{
    construction(
        objective,
        lunchDateDay,
        lunchDateMounth,
        lunchDateYear,
        spaceCraft,
        numofAstronauts
    ){
        this.objective = objective;
        this.lunchDateDay = lunchDateDay;
        this.lunchDateMounth = lunchDateMounth;
        this.lunchDateYear = lunchDateYear;
        this.spaceCraft = spaceCraft;
        this.numofAstronauts = numofAstronauts;
    }
    displayMissionParameters(){
        alert("this spacecraft" + this.spaceCraft + "will lunch on" + this.lunchDateDay + "of" + this.lunchDateMounth + "" + this.lunchDateYear); 
    }
    lunch(){
        console.log("lunch sequence started");
        alert("lunch sequence started");
        return true;
    }
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.displayMissionParameters();
}
function launchSpring(){
    console.log("lunchSpring() started")
    springLaunch.launch()
}
function displayspring(){
    console.log("displayspring() started");
    fallLaunch.displayMissionParameters();
}