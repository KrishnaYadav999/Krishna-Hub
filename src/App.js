import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Movietypebtn from "./components/Movietypebtn";
import Add from "./components/Add";
import Contants from "./components/Contants";
import Dataall from "./components/Dataall";
import Nextbtn from "./components/Nextbtn";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState(Dataall);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>

    <Navbar setSearchTerm={setSearchTerm} />

      <Add />

      <Movietypebtn movies={movies} setMovies={setMovies} />

      {filteredMovies.map(function all(val) {
  return (
    <Contants
      key={val.id} 
      image={val.image}
      name={val.name}
      rating={val.rating}
      description={val.description}
      categories={val.categories}
      link={val.link}
    />
  );
})}


      <Nextbtn />
      <Footer />
    </>
  );
};

export default App;




