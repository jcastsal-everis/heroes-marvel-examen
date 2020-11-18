import React, { useState } from "react";
import HeroeForm from "../components/Heroe/HeroeForm";
import HeroePreview from "../components/Heroe/HeroePreview";
import LoaderPage from "../components/Loader/LoaderPage";
import api from "../utils/api";
import { navigate } from "@reach/router";

export default (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    Company: "",
    Name: "",
    Movie: "",
    PhotoUrl: "",
  });
  const [validationMessages, setValidationMessages] = useState({
    Company: undefined,
    Name: undefined,
    Movie: undefined,
    PhotoUrl: undefined,
  });

  let handleCreateHeroe = async () => {
    setLoading(false);
    setError(null);

    try {
      await api.heroes.createHeroe(form);
      setLoading(false);
      setError(null);
      setModalIsOpen(true);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let handleValidateForm = () => {
    let flagExecution = true;
    let messageCompany = undefined;
    let messageName = undefined;
    let messageMovie = undefined;
    let messagePhotoUrl = undefined;

    if (form.Company === "") {
      messageCompany = "Este campo es obligatorio";
      flagExecution = false;
    }
    if (form.Name === "") {
      messageName = "Este campo es obligatorio";
      flagExecution = false;
    }
    if (form.Movie === "") {
      messageMovie = "Este campo es obligatorio";
      flagExecution = false;
    }
    if (form.PhotoUrl === "") {
      messagePhotoUrl = "Este campo es obligatorio";
      flagExecution = false;
    }

    if (flagExecution) {
      handleCreateHeroe();
    } else {
      setValidationMessages({
        Company: messageCompany,
        Name: messageName,
        Movie: messageMovie,
        PhotoUrl: messagePhotoUrl,
      });
    }
  };

  let handleGoBack = () => {
    navigate(-1);
  };

  let onCloseModal = () => {
    navigate("/");
  };

  let onRedirectToHeroes = () => {
    navigate("/");
  };

  if (loading) {
    return <LoaderPage />;
  }
  return (
    <div className="container">
      <div className="row">
        <HeroeForm
          onChangeInput={handleChange}
          formValues={form}
          onBack={handleGoBack}
          onSave={handleValidateForm}
          errorForm={error}
          validationMessage={validationMessages}
          modalIsOpen={modalIsOpen}
          onCloseModal={onCloseModal}
          onRedirectToHeroes={onRedirectToHeroes}
        />
        <HeroePreview
          company={form.Company || "COMPANY NAME"}
          name={form.Name || "HEROE NAME"}
          movie={form.Movie || "MOVIE NAME"}
          photoUrl={
            form.PhotoUrl ||
            "https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg"
          }
        />
      </div>
    </div>
  );
};
