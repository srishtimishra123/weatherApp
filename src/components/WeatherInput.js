// import React, { useState, useEffect } from "react";

// const WeatherInput = () => {
//   const [cityname, setCityName] = useState("hgh");
//   const [search, setSearch] = useState("bangalore");

//   useEffect(() => {
//     var formdata = new FormData();

//     var requestOptions = {
//       method: "GET",
//       body: formdata,
//       redirect: "follow",
//     };

//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?lat=12.971599&lon=77.594566&appid=b8bde4cf0937d0558186717f66cd0abc",
//       requestOptions
//     )
//       .then((response) => response.JSON())
//       .then((result) => {
//         setCityName(search, "search");
//         console.log(result);
//       })
//       .catch((error) => console.log("error", error));
//   }, []);

//   return (
//     <>
//       <input
//         type="text"
//         onChange={(event) => {
//           setSearch(event.target.value);
//         }}
//       />

//       <div className="card"></div>
//     </>
//   );
// };

// export default WeatherInput;
