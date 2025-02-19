import Data from "../Data/logements.json";
import DataChevron from "../Data/AboutCollapse.json";

export default class Api {
  // Récuperer les données des annonces sous format json.
  getLogements() {
    return Data;
  }

  // Récuperer les données d'une annonce d'un id passé comme parametre sous format json.
  getLogement(id) {
    return Data.find((current) => current.id === id);
  }

  // Récuperer les données de la page apropos sous format json.
  getDataChevron() {
    return DataChevron;
  }
}
