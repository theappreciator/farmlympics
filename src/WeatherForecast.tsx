import React from 'react'
import styles from './WeatherForecase.module.css';

type WeatherForecastProps = {

}

const WeatherForecast: React.FC<WeatherForecastProps> = () => {

    const threeDayForecastWidth = 400;

    return (
        <div className={styles.container}>
            <h2>Weather Forecast</h2>
            <img width={threeDayForecastWidth} src="weather-2025-08-27.png"/>
        </div>  
    )
}

export default WeatherForecast;