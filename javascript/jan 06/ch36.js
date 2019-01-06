
function showTemperature(city) {
    if(city == 'Karachi')
        console.log("Current temperature is KHI : " +26);
    else
        console.log("Current temperature is  LHR: " +19);
    }
    
    function showHumidity(city) {
        if(city == 'Karachi') 
        console.log("Current humidity is KHI : " +80);
        else
        console.log("Current humidity is LHR: " +80);
    }
    
    function showWeather(city)
    {
        console.log('Showing weather for city : ' + city);
        showTemperature(city);
        showHumidity(city);
    }
    
    showWeather('Lahore');




    