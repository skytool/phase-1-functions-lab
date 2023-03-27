// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if(someValue >42){
        return someValue - 42;
    } else{
        someValue = 8;
    }

    return someValue;
}

function distanceFromHqInFeet(someValue){
    if(someValue > 42){
        
        return (someValue-42)*264;
        
    } else {
        someValue = 2112;
    }
    return someValue;
}

function distanceTravelledInFeet(start, destination){
    if(destination - start > 0){
        return (destination - start)*264;
    } else {
        return 1584;
    }
}

function calculatesFarePrice(start, destination){
    const difference = Math.abs(destination - start);
    if(difference <= 1){
        return 0;
    } else if(difference <= 7){
        return (difference*264 - 400)* 0.02;
    } else if(difference <= 9){
        return 25;
    } else if(difference > 9){
        return "cannot travel that far";
    }
}