import * as S from "./styles";
import { WiDayCloudyGusts } from "react-icons/wi";
import { useEffect, useState } from "react";

const API_KEY = "3f15710155988010a5aa24b3fc168728";
export function Temperature() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [temp, setTemp] = useState(0);
  const [local, setLocal] = useState("");

  function getLocation() {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          console.log("uhu", position);
        });
      } catch (error) {
        console.log("deu errado", error);
      }
    } else {
      console.log("nao pega");
    }
  }

  useEffect(() => {
    getLocation();
    async function getWeather() {
      try {
        const apiCall = await fetch(`//api.openweathermap.org/data/2.5/weather?
lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`);
        const data = await apiCall.json();
        setLocal(data.name);
        setTemp(data.main.temp.toFixed(0));
      } catch (error) {
        console.log("erro", error);
      }
    }
    getWeather();
  }, []);

  return (
    <S.Container>
      <S.Local>{local}</S.Local>
      <S.Temperature>
        <WiDayCloudyGusts size={34} />
        <S.TemperatureText>{temp}°</S.TemperatureText>
      </S.Temperature>
    </S.Container>
  );
}
