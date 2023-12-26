import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ca261c971d5638db9d4d6cbccc1f093d`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
  
      <div className="box">
        <div className="inputData" style={{marginBottom:'30px'}}>
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg"> No Data Found <br /> Please enter some city in search box</p>
        ) : (
          <div className="info">
             
            <small className="text-center" style={{color:'Red',fontWeight:'bold' ,fontSize:'26px'}}>{search}</small>
              <div className="text-center">
                  
                  <h1 className="temp">{city.temp}℃</h1>
                
                  <small style={{paddingTop:'40px'}} > Min :{city.temp_min}℃ | Max : {city.temp_max}℃</small>
              </div>
              <img src="https://th.bing.com/th/id/R.4b45154c3942d9228d8de976cd885a0e?rik=DjHAq5eODEFtZA&riu=http%3a%2f%2fwww.psdgraphics.com%2ffile%2fweather-icon.jpg&ehk=XHFG6nRVxhBiZxOVd1U2hmzOtnJZ7RVFZqFNqw8tx0g%3d&risl=&pid=ImgRaw&r=0" style={{height:'80px',width:'80px',marginLeft:'50px',marginTop:'30px',borderRadius:'30px'}} />
          </div>
        )}
      </div>

  );
};

export default Tempapp;
