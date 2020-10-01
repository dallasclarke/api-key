// Use any ONE of these API's that needs an API key to get data.
// Read the docs to see how to call for and get the data that you want
// Or you can use one of your choosing if you are comfortable, HOWEVER it must require an API Key
// Parse the data, and log any important information you would like to show in a nice format of your choosing.
// You can add your own spin to the data in how you present it.
// Use any tools we've practiced such as promises, destructuring, etc.
// Once everything works, upload the file and submit.


// // Weather API- https://openweathermap.org/api
// // Weather/Air Quality API-  https://www.airvisual.com/dashboard/api
// // Recipe API- https://developer.edamam.com/ (uses two key code)
// // Superheroes API- https://superheroapi.com/index.html
// // Movies API- https://www.omdbapi.com/
// // Sports API - https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal
// // News API - https://newsapi.org/
// // Harvard Art Museum API - https://www.harvardartmuseums.org/collections/api

// If you want to make your project a little more robust and dynamic you could use tools like the ones below:
// Read the docs to see how it works. Not hard.

// Readline: https://nodejs.org/api/readline.html
// OR
// Inquirer: https://www.npmjs.com/package/inquirer
// Read the docs to find out how to use. Pretty intuitive.

const fetch = require('node-fetch');
const keys = require('./key.js');
// const {table} = require('table');

const city = process.argv.slice(2).join(' ');
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${keys}`;


fetch(url)
.then((data) => data.json())
.then((newData) => {
    let {
        weather:[{main, description}],
        main:{temp, feels_like, humidity},
        wind:{speed},
        sys:{country},
        name
    } = newData;

    const dataTable = 
        [
            {   Temperature: temp, 
                FeelsLike: feels_like, 
                Humidity: humidity, 
                WindSpeed: speed, 
                City: name, 
                Country: country}
        ]
        console.table(dataTable);

    // console.log(`The current temperature is ${temp} & feels like ${feels_like}.
    // Description: ${description}
    // Humidity: ${humidity}
    // Wind: ${speed}
    // Location: ${name}, ${country}
    // `);
})
.catch((err) => console.log('Please enter your city!'))



