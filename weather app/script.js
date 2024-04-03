const apiKey="079e120dc24f4fc381955cb44c1348f7";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=";


async  function checkWeather()
{
    const city=document.getElementById("cname").value;
    const response=await fetch(apiurl+city+`&appid=${apiKey}`);
    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

   if(data.weather[0].main=="Clouds")
   {
     document.querySelector(".weather-icon").src="assets/cloud.png";
   }
   else if(data.weather[0].main=="Clear")
   {
    document.querySelector(".weather-icon").src="assets/clear-sky.png";
   }
   else if(data.weather[0].main=="Rain")
   {
    document.querySelector(".weather-icon").src="assets/rain.png";
   }
   else if(data.weather[0].main=="Drizzle")
   {
    document.querySelector(".weather-icon").src="assets/drizzle.png";
   }
   else if(data.weather[0].main=="Mist")
   {
    document.querySelector(".weather-icon").src="assets/mist.png";
   }
}
