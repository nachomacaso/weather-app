import React from 'react'
import { Modal, Divider, Image, Row, Col } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import './WeatherModal.css';

export default function WeatherModal({city, weather, isModalVisible, handleSetIsModalVisible}) {
  const handleCancel = () => {
    handleSetIsModalVisible(false);
  };

  return (
    <Modal 
          title={city.title} 
          footer={null}
          closeIcon={<CloseCircleOutlined />}
          visible={isModalVisible} 
          onCancel={handleCancel}
        >
        <div>
          <h1 className="today">Today</h1>
          <Divider />
          <Row className="weather-row">
            <Col className="temp" span={12}>{weather.the_temp.toFixed(1)} C</Col>
            <Col className="weather-state" span={12}>
              <Image
                src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
              />
              {weather.weather_state_name}
            </Col>
          </Row>
          <Row className="weather-row">
            <Col span={24}>
              <span className="min-max">Min: {Math.round(weather.min_temp)} C</span>
              <span className="min-max">|</span>
              <span className="min-max">Max: {Math.round(weather.max_temp)} C</span>
            </Col>
          </Row>
          <Row className="weather-row">
            <Col span={24}>
              <span className="wind-speed">{Math.round(weather.wind_speed)} mph</span>
            </Col>
          </Row>
        </div>
      </Modal>
  )
}
