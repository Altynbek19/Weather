import React from 'react';
import './WeatherCard.css';
import sun from '../assets/01d.png';
import clouds from '../assets/03d.png';
import broken_cloud from '../assets/04d.png';
import snow from '../assets/13d.png';
import dawn from '../assets/dawn.png'
import sunset from '../assets/sunset.png'
import proc from '../assets/proc.svg'
function WeatherCard(props) {

    const api = {
        key: '34c45752f1dea5633c141b72cedf2267',
        base: '',
    }
    const API_KEY = '34c45752f1dea5633c141b72cedf2267'
    const URL = 'https://api.openweathermap.org/data/2.5/weather'
    let city = ''

    const currenDate = new Date().toLocaleDateString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    });

    const currentDay = new Date().toLocaleString("ru", {
        weekday: 'long'
    })

    console.log(props.weatherState)

    function getIcon(str = false) {
        switch (str) {
            case 'Snow':
                return snow;
            case 'Clear':
                return sun;
            case 'Clouds':
                return clouds;
            case 'Broken clouds':
                return broken_cloud;
            default:
                return sun;
        }
    }   

    return (
        <div>
            <div className='geo_temperature'>
                <div className='geo'>
                    <h1>{props.weatherState ? props.weatherState?.city?.name : 'Bishkek'}, {props.weatherState ? props.weatherState?.city?.country : 'KG'}</h1>
                    <h3>{props.weatherState ? props.weatherState?.list?.[0]?.dt_txt : 'Today'}</h3>
                    <h4>Population: {props.weatherState ? props.weatherState?.city?.population : '900000'}</h4>
                </div>
                <div>
                    <div className='temperature_time'>
                        <div className='temperature'>
                            <div>
                                <img src={getIcon(props?.weatherState?.list[0]?.weather[0]?.main)} alt="" width={80} />
                            </div>
                            <div>
                                <h1>{props.weatherState ? props.weatherState?.list?.[0]?.main?.temp : '-5.21'}°C</h1>
                            </div>
                            <div className='description'>
                                <h4>{props.weatherState ? props.weatherState?.list?.[0]?.weather?.[0].main : 'Clear'}, {props.weatherState ? props.weatherState?.list?.[0]?.weather?.[0].description : 'sky is clear'} </h4>
                            </div>
                        </div>
                        <div className='time'>
                            <div className='dawn'>
                                <img src={dawn} alt="" width={70} />
                                <h4>08:2  A.M.</h4>
                            </div>
                            <div className='sunset'>
                                <img src={sunset} alt="" width={70} />
                                <h4>18:0  P.M.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='weekend'>
                    <div className='first_day'>
                        <h2>Today</h2>
                        <img src={getIcon(props?.weatherState?.list[0]?.weather[0]?.main)} alt="" width={40} />
                        <h3>{props.weatherState ? props.weatherState?.list?.[0]?.main?.temp_min : '-5.21'}°C - {props.weatherState ? props.weatherState?.list?.[0]?.main?.temp_max : '-5.21'}°C</h3>
                        <h3>{props.weatherState ? props.weatherState?.list?.[0]?.weather?.[0].main : 'Clear'}</h3>
                        <h5>{props.weatherState ? props.weatherState?.list?.[0]?.weather?.[0].description : 'Clear'}</h5>
                    </div>
                    <div className='second_day'>
                        <h2>{props.weatherState ? props.weatherState?.list?.[6]?.dt_txt : 'Today'}</h2>
                        <img src={getIcon(props?.weatherState?.list[5]?.weather[0]?.main)} alt="" width={40} />
                        <h3>{props.weatherState ? props.weatherState?.list?.[5]?.main?.temp_min : '-5.21'}°C - {props.weatherState ? props.weatherState?.list?.[0]?.main?.temp_max : '-5.21'}°C</h3>
                        <h3>{props.weatherState ? props.weatherState?.list?.[5]?.weather?.[0].main : 'Clear'}</h3>
                        <h5>{props.weatherState ? props.weatherState?.list?.[5]?.weather?.[0].description : 'Clear'}</h5>
                    </div>
                    <div className='third_day'>
                        <h2>{props.weatherState ? props.weatherState?.list?.[9]?.dt_txt : 'Today'}</h2>
                        <img src={getIcon(props?.weatherState?.list[10]?.weather[0]?.main)} alt="" width={40} />
                        <h3>{props.weatherState ? props.weatherState?.list?.[10]?.main?.temp_min : '-5.21'}°C - {props.weatherState ? props.weatherState?.list?.[0]?.main?.temp_max : '-5.21'}°C</h3>
                        <h3>{props.weatherState ? props.weatherState?.list?.[10]?.weather?.[0].main : 'Clear'}</h3>
                        <h5>{props.weatherState ? props.weatherState?.list?.[10]?.weather?.[0].description : 'Clear'}</h5>
                    </div>
                    <div className='fourth_day'>
                        <h2>{props.weatherState ? props.weatherState?.list?.[16]?.dt_txt : 'Today'}</h2>
                        <img src={getIcon(props?.weatherState?.list[15]?.weather[0]?.main)} alt="" width={40} />
                        <h3>{props.weatherState ? props.weatherState?.list?.[15]?.main?.temp_min : '-5.21'}°C - {props.weatherState ? props.weatherState?.list?.[0]?.main?.temp_max : '-5.21'}°C</h3>
                        <h3>{props.weatherState ? props.weatherState?.list?.[15]?.weather?.[0].main : 'Clear'}</h3>
                        <h5>{props.weatherState ? props.weatherState?.list?.[15]?.weather?.[0].description : 'Clear'}</h5>
                    </div>
                    <div className='fifth_day'>
                        <h2>{props.weatherState ? props.weatherState?.list?.[21]?.dt_txt : 'Today'}</h2>
                        <img src={getIcon(props?.weatherState?.list[20]?.weather[0]?.main)} alt="" width={40} />
                        <h3>{props.weatherState ? props.weatherState?.list?.[20]?.main?.temp_min : '-5.21'}°C - {props.weatherState ? props.weatherState?.list?.[0]?.main?.temp_max : '-5.21'}°C</h3>
                        <h3>{props.weatherState ? props.weatherState?.list?.[20]?.weather?.[0].main : 'Clear'}</h3>
                        <h5>{props.weatherState ? props.weatherState?.list?.[20]?.weather?.[0].description : 'Clear'}</h5>
                    </div>
                    <div className='sixth_day'>
                        <h2>{props.weatherState ? props.weatherState?.list?.[26]?.dt_txt : 'Today'}</h2>
                        <img src={getIcon(props?.weatherState?.list[25]?.weather[0]?.main)} alt="" width={40} />
                        <h3>{props.weatherState ? props.weatherState?.list?.[25]?.main?.temp_min : '-5.21'}°C - {props.weatherState ? props.weatherState?.list?.[0]?.main?.temp_max : '-5.21'}°C</h3>
                        <h3>{props.weatherState ? props.weatherState?.list?.[25]?.weather?.[0].main : 'Clear'}</h3>
                        <h5>{props.weatherState ? props.weatherState?.list?.[25]?.weather?.[0].description : 'Clear'}</h5>
                    </div>
            </div>
        </div>
    );
}

export default WeatherCard;