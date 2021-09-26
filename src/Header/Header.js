import React from 'react'
import { Input } from 'antd';
import axios from "axios";
import './Header.css'

export default function Header({handleSetData, handleSetLoading}) {
  const onSearch = value => {
    const url = `/api/location/search/?query=${value}`;
    handleSetLoading(true);
    axios.get(url)
      .then(res => {
        handleSetData(res.data);
        handleSetLoading(false);
      })
      .catch(err => {
        handleSetLoading(false);
        console.log(err)
      })
  }
  
  return (
    <div className="header-container">
      <div className="search-box">
        <h1 className="title">How is the weather?</h1>
        <Input.Search
          placeholder="Search by city name"
          allowClear
          enterButton="GO"
          onSearch={onSearch}
        />
      </div> 
    </div>
  )
}
