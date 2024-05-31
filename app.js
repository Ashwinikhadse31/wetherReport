let input = document.getElementById("cityname");
let button = document.getElementById("btn");
let output1=document.querySelector('.output1');
let output2=document.querySelector('.output2');
let output3=document.querySelector('.output3');
let output4=document.querySelector('.output4');


let key = `406e94dde8daac8317f7ab8049459eba`;

button.addEventListener("click",()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`) 
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    // console.log(data.main.temp)
    output1.innerHTML=`CITY NAME:- ${ data.name}`;    //city name
    output2.innerHTML=`TEMPERATURE:- ${ data.main.temp} &deg;C`;  
    output3.innerHTML=`HUMIDITY:- ${ data.main.humidity}`;
    output4.innerHTML=`PRESSURE:- ${ data.main.pressure}`;  
})
})