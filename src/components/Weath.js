import React, { useState } from "react";
import { Card } from "antd";
import { BsFillCloudSunFill, BsFillSunFill } from "react-icons/bs";

let today = new Date();
let curHr = today.getHours();

const Weath = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmptyMsg, setShowEmptyMsg] = useState(false);

  const fetchApi = async () => {
    if (!search) {
      alert("plese input city");
      return;
    }
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b8bde4cf0937d0558186717f66cd0abc`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson, "re");

      if (resJson.cod.toString() !== "404") {
        setCity(resJson);
      } else {
        setCity(null);
        setShowEmptyMsg(true);
      }
    } catch (error) {
      alert("somthing went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <button disabled={loading} onClick={fetchApi}>
        search
      </button>

      {city && !loading ? (
        <Card
          style={{
            width: 300,
            backgroundColor:
              curHr < 12 ? "blue" : curHr < 18 ? "orange" : "black",
            margin: "auto",
          }}
        >
          {"blue" ? (
            <div>
              <BsFillCloudSunFill className="w-25 h-25 text-white" />
            </div>
          ) : "orange" ? (
            <div>
              <BsFillSunFill className="w-25 h-25 text-white" />
            </div>
          ) : (
            "bye"
          )}
          <div className="text-center">
            <div className="text-white">CITY NAME : {city.name}</div>
            <p className="text-white">{city.weather.main}</p>
            <p className="text-white">HUMIDITY : {city.main.humidity}</p>
            <p className="text-white">TIME : {city.timezone}</p>
            <p className="text-white">Tempreature: {city.main.temp}</p>
            <p className="text-white">{city.coord.lat}</p>
            <p className="text-white">{city.coord.lon}</p>
            <p className="text-white">{city.wind.deg}</p>
            <p>{city.sys.sunrise}</p>
            <p>{city.sys.sunset}</p>
          </div>
        </Card>
      ) : (
        showEmptyMsg && !loading && <p>no data found</p>
      )}

      {loading ? <p>loading</p> : null}
    </>
  );
};

export default Weath;
