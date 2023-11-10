const apikey = "48ce3f7cf3aea00d08cbc4d5eb2b7d29";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searcharea = document.getElementById("cityname");
const button = document.querySelector("button");

async function checkWeather(city){

    
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
  }
  else{
    const data = await response.json();
    console.log(data)

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".Wind").innerHTML = data.wind.speed+" km/h";
    
    if (data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }
    else  if (data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = "images/clear.png";
    }else if (data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "images/drizzle.png";

    }
    else if (data.weather[0].main == "Mist"){
        document.querySelector(".weather-icon").src = "images/mist.png";

    }
    else if (data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src = "images/rain.png";

    }
    else if (data.weather[0].main == "Snow"){
        document.querySelector(".weather-icon").src = "images/snow.png";

    }

    document.querySelector(".weathers").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
   
    
}
button.addEventListener("click",function(){
    checkWeather(searcharea.value);
})
