function speedDetector(speed) {
    if (speed <= 70) { //speed limit is ok
        console.log("ok");
    } else {
        let totalDemeritPoints = Math.floor ((speed - 70)/5);
        console.log(`Points: ${totalDemeritPoints}`) 
        if (totalDemeritPoints > 12) {
        console.log ("LicenseSuspended") ;
        } else {
            console.log("Points:" + totalDemeritPoints) ;
        }
    }
    }
    speedDetector (70) ; //speed is okay
    speedDetector (95) ; //License suspended!
    speedDetector (80) ; //prints Points 2
    