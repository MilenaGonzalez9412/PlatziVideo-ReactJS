import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

const App = () => {
  //Se inicializan los arreglos que vienen de la API
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  //Recibe una función anónima y otro parámetro el cual se encarga de estar escuchando alguna otra propiedad que pueda cambiar y este estará escuchando.
  //SI NO SE COLOCA ESE OTRO PARÁMETRO, useEffect PUEDE CREAR UN LOOP INFINITO
  useEffect(() => {
    fetch("http://localhost:3000/initialState")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />

      {videos.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {videos.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {videos.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {videos.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
