import React, { useEffect } from 'react';
import './Search.css'
import search from '../assets/search.svg'
function Search(props) {
    const API_KEY = '34c45752f1dea5633c141b72cedf2267'
    const URL = 'https://api.openweathermap.org/data/2.5/forecast'
    let city = ''

    React.useEffect(() =>{
        console.log(props)
    }, [props.weatherState])

    async function loadingData(){
        let response = await fetch(`${URL}?q=${city}&units=metric&cnt=78&appid=${API_KEY}`)
        let data = await response.json()
        props.setWeatherState(data)
        console.log(data)
    }

    function setCity(event){
        city = event.target.value
    }

    return (
        <div className='search'>
            <form>
                <input type="text" onChange={setCity} placeholder='e.g. London, England'/>
            </form>                
            <button onClick={loadingData}> Search</button>
        </div>
    );
}

export default Search;