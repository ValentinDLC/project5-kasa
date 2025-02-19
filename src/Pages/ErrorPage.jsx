import React from "react";
import "../assets/sass/Pages/ErrorPage.scss";
import Error from "../assets/images/404.png";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="notfound">
      <img src={Error} alt="Erreur 404" />
      <h2>Oops! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </div>
  );
}

export default ErrorPage;
