import React from "react";
import styles from "../styles/Header.module.scss";
import "./stylesheet";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoTwo}>
        <div className={styles.logo}>
          <div className={styles.ellipse7} />
          <p className={styles.w}>W</p>
        </div>
        <p className={styles.weCare}>WE CARE</p>
      </div>
      <div className={styles.navigation}>
        <p className={styles.acceuil}>Acceuil </p>
        <p className={styles.trouverSonMedecin}>Trouver son medecin</p>
        <p className={styles.trouverSonMedecin}>Trouver son medecin</p>
        <p className={styles.nonServices}>Non Services </p>
        <p className={styles.rechercher}>Rechercher </p>
        <p className={styles.seConnecter}>Se connecter </p>
        <p className={styles.text}> </p>
      </div>
    </div>
  );
};

export default Header;
