 const apiKey = "f9c248b744150ad1d58bbacfe893ffc7";
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
 const searchBox = document.querySelector(".search input");
 const searchbtn = document.querySelector(".btn");
 const waetherIcon = document.querySelector(".weather_img");

  async function checkWeather(city){
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if(response.status == 404 ){
        document.querySelector(".invalid").style.display ="block"
        document.querySelector(".main").style.display = "none";
        document.querySelector(".foot").style.display = "none";
        
    }
    else{
        
        var data = await response.json();
        console.log(data);
        
        
        document.querySelector(".tem").innerHTML= Math.round(data.main.temp) + `°C`;
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".humidity").innerHTML= data.main.humidity +`%`;
        document.querySelector(".wind").innerHTML= data.wind.speed + ` km/h`;
        
        if (data.weather[0].main == "Clouds"){
            waetherIcon.src = "cloudy.png";
        }
        else if (data.weather[0].main == "Clear") {
            waetherIcon.src = "sun.png";
        }    
        else if (data.weather[0].main == "Rain") {
            waetherIcon.src = "rain(1).png";
        }    
        else if (data.weather[0].main == "Drizzle") {
            waetherIcon.src = "cloudy(1).png";
        }    
        else if (data.weather[0].main == "snowy") {
            waetherIcon.src = "snowy.png";
        }    
        else if (data.weather[0].main == "Humid") {
            waetherIcon.src = "humidity_main.png";
        }   
        
        document.querySelector(".main").style.display = "block";
        document.querySelector(".foot").style.display = "flex";
        document.querySelector(".invalid").style.display ="none"
      }
      }
  searchbtn.addEventListener("click", ()=>{
      
      checkWeather(searchBox.value);
  });

 