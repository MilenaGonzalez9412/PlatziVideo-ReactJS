import { useState, useEffect } from "react";

const useInicialState = (API) => {
  //Se inicializan los arreglos que vienen de la API
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  //Recibe una función anónima y otro parámetro el cual se encarga de estar escuchando alguna otra propiedad que pueda cambiar y este estará escuchando.
  //SI NO SE COLOCA ESE OTRO PARÁMETRO, useEffect PUEDE CREAR UN LOOP INFINITO
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInicialState;
