import React from "react";
import styled from "styled-components";
import { Col, Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const Location = () => {
  const locations = [
    { name: "전체" },
    { name: "푸름관" },
    { name: "오름관" },
    { name: "아름관" },
    { name: "블랙홀" },
  ];
	
  const locationList = locations.map((location, key) => (
    <Option key={key} value={location.name} style={{}}>
      {location.name}
    </Option>
  ));

  return (
    <div>
      <Select
        defaultValue="전체"
        style={{
          width: 120,
          color: "#90B661",
          fontWeight: "bold",
          marginLeft: "2rem",
        }}
        onChange={handleChange}
        bordered={false}
      >
        {locationList}
      </Select>
    </div>
  );
}




export default Location;