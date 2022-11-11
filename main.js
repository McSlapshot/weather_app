const apiKey = "cfc1dcdaca76334fa01b3d30171c4858";

let form = document.querySelector('.something');
form.addEventListener('click', (event) => {
    event.preventDefault();
    let cityInputs = document.getElementById('cityInput').value;
    console.log(cityInputs);
    getCityOutput(cityInputs);
});

let getCityWeather = async (cityInputs) => {
    try {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputs}&appid=${apiKey}&units=imperial`);
        return response.data;
    }
    catch (error) {
        alert("You've entered the city incorrectly.");
    }
};

let getCityOutput = async (cityInputs) => {
    let data = await getCityWeather(cityInputs);
    console.log(data);
    let cityWeather = `${data['name']}`+` ${data['main']['temp']} F `+`${data['weather'][0]['description']} `;
    document.getElementById('cityOutput').insertAdjacentHTML('afterbegin', cityWeather);
};

let clearCityData = () => {
    document.getElementById('cityOutput').innerHTML = '';
};

