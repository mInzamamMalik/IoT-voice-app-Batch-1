var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var cityToCheck = "Cheyenne";
var flag = false;

for (var i = 0; i < cleanestCities.length; i++) {

    console.log(i);

    if (cityToCheck === cleanestCities[i]) {
       flag = true;
       console.log("Clean city found.");
       break;
    }
}

if(flag==false)
{
    console.log("Clean city NOT found.");
}

