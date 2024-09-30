function distanceFromHqInBlocks(Location) {
    const hqLocation =42;
    return Math.abs(Location-hqLocation);
   
    }
    
function distanceFromHqInFeet(location) {
    const hqLocation=42;
    const distanceInBlocks = Math.abs(location-hqLocation);
    return distanceInBlocks*264;

}

function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination-start);
    return distanceInBlocks*264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        const chargeableDistance = distance - 400; 
        return chargeableDistance * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far'; 
    }
}
