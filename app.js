const apiKey="df69e21eb658ff2ce404af6e8efb2239"
const base_url="https://api.openweathermap.org/data/2.5/weather?q="

const search=document.querySelector(".input")
const button=document.querySelector(".button")

async function weatherCheck(city){
    const res=await fetch(base_url+ city + `&appid=${apiKey}`)
    console.log(res);
    const data=await res.json()
    console.log(data);

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp-273) + '°C'
    document.querySelector('.humid').innerHTML = data.main.humidity + " " + '%'
    document.querySelector('.speed').innerHTML = data.wind.speed + " " + "Km/hr"
    
}

button.addEventListener('click',(event)=>{
    event.preventDefault()
    weatherCheck(search.value)
})