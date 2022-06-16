let temperatures = [12, -3, 25, -5, 7, -2]
console.log(temperatures)
function tempFroid(temperatures){
    let ecartMin = Math.abs(temperatures[0]);
    for(let i = 0; i < temperatures.length; i++){
        if(Math.abs(0 - temperatures[i]) < ecartMin){
           ecartMin = temperatures[i]
        }
        if(Math.abs(0 - temperatures[i]) === ecartMin){
            ecartMin = Math.min(temperatures[i], ecartMin)
        }
    }
    console.log("la temperature la plus proche de zero est " + ecartMin);
}

tempFroid(temperatures)