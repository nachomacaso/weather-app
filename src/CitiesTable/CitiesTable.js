import React, { useState } from 'react';
import { List, ConfigProvider } from 'antd';
import WeatherModal from '../WeatherModal/WeatherModal';
import axios from "axios";
import './CitiesTable.css';

export default function CitiesTable({data, loading}) {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (woeid) => {
    const url = `/api/location/${woeid}/`;
    axios.get(url)
      .then(res => {
        setCity(res.data);
        setWeather(res.data.consolidated_weather[0]);
        setIsModalVisible(true);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const customizeRenderEmpty = () => (
    <div>
      <p>No results yet!</p>
      <p>Please use the search box above</p>
    </div>
  );
  
  return (
    <div className="cities-container">
      <ConfigProvider renderEmpty={customizeRenderEmpty}>
        <List
          bordered
          loading={loading}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <span>{item.title}</span>
              <button className="details-link" onClick={() => showModal(item.woeid)}>See Details...</button>
            </List.Item>
          )}
        />
      </ConfigProvider>

      {weather && (
        <WeatherModal 
          handleSetIsModalVisible={setIsModalVisible} 
          isModalVisible={isModalVisible} 
          weather={weather} 
          city={city}
        />
      )}
    </div>
  )
}
