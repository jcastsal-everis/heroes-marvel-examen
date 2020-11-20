import React, { useState, useEffect, useMemo } from "react";
import HeroeList from "../components/Heroe/HeroeList";
import MessageWarning from "../components/Messages/MessageWarning";
import ButtonNewHero from "../components/Button/ButtonNewHero";
import LoaderHeroes from "../components/Loader/LoaderHeroes";
import api from "../utils/api";

export default () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getDataHeroes();
  }, []);

  let heros = useMemo(async()=>{
    return await api.heroes.listHeroes();
  }, []);

  let getDataHeroes = async () => {
    setLoading(true);
    setError(null);
    try {
      const dataHeroes = await heros;
      setLoading(false);
      setHeroes(dataHeroes);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  if (loading) {
    return (
      <React.Fragment>
        <ButtonNewHero />
        <br />
        <LoaderHeroes />
      </React.Fragment>
    );
  }

  if (error) {
    return <MessageWarning message={error.message} />;
  }

  if (heroes.length === 0) {
    return (
      <div>
        <ButtonNewHero />
        <br />
        <MessageWarning message="No existe información." />;
      </div>
    );
  }

  return (
    <div>
      <ButtonNewHero />
      <br />
      <HeroeList heroes={heroes} />
    </div>
  );
};
