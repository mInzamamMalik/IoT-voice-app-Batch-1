

// function getTemperature() {
    //     return ("Current temperature is : " + Math.random()*100+1);
    // }
    
    // var myTemperature = getTemperature();
    // console.log(getTemperature);
    
console.log(showTemperature('Karachi'));

function showTemperature(city) {
    if (!city) {
        console.log("Please provide city name in parameter");
        return ;
    }

    if (city == 'Karachi') {
        console.log('Karachi Temp is : 30');
    }

    if (city == 'Lahore') {
        console.log('Lahore Temp is : 25');
    }
}
