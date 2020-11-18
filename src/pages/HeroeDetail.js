import React, { useState, useEffect } from "react";
import HeroeDetailHtml from "../components/Heroe/HeroeDetailHtml";
import LoaderPage from "../components/Loader/LoaderPage";
import api from "../utils/api";
import { navigate } from "@reach/router";

export default (props) => {
  const [heroeId, setHeroeId] = useState(props.heroeId);
  const [loading, setLoading] = useState(true);
  const [heroe, setHeroe] = useState({});
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    getDataHeroe();
  }, []);

  let getDataHeroe = async () => {
    try {
      setLoading(true);
      setError(null);
      const dataHeroe = await api.heroes.getHeroe(heroeId);
      setLoading(false);
      setHeroe(dataHeroe);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  let deleteHeroe = async () => {
    try {
      setLoading(true);
      setError(null);
      await api.heroes.removeHeroe(heroeId);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  let onOpenModal = () => {
    setModalIsOpen(true);
  };

  let onCloseModal = () => {
    setModalIsOpen(false);
  };

  if (loading) {
    return <LoaderPage />;
  }

  return (
    <HeroeDetailHtml
      heroe={heroe}
      modalIsOpen={modalIsOpen}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      onDeleteHeroe={deleteHeroe}
    />
  );
};
