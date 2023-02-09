import React from 'react';
import Search from './Search'; 
import Card from './WeatherCard'

function Content(props) {

    const [weatherState, setWeatherState] = React.useState({
        city: {
            name: 'City',
            country: 'country',
            population: 0
        },
        list: [
            {
                weather: [
                    {
                        icon: 'clear',
                        main: 'Clear',
                        description: 'Sky is clear'
                    },
                    
                ],
                dt_txt: "Today",
                main: {
                    temp: 0 ,
                    temp_min: 0,
                    temp_max: 0

                },
            }
        ]
    })

    return (
        <main>
            <h1>Просмотр погоды</h1>
            <Search weatherState={weatherState} setWeatherState={setWeatherState}/>
            <Card weatherState={weatherState} setWeatherState={setWeatherState}/>
        </main>
    );
}

export default Content;