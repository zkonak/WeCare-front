import React, { useRef, useState } from "react";

const Register = () => {
  const registerEmail = useRef();
  const registerPassword = useRef();
  //   const [displayName, setDisplayName] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();

    //     try {
    // #####***** appel a bdd
    // auth
    // .createUserWithEmailAndPassword(
    //   registerEmail.current.value,
    //   registerPassword.current.value
    // )
    //         //la promesse se declanche si on est inscrit
    //         .then() => {

    //           window.location.reload();
    //         };
    //     } catch (error) {
    //       console.log(error.message);
    //     }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={(e) => handleRegister(e)}>
          {/* <input
            type="text"
            placeholder="Pseudo"
            required
            onChange={(e) => setDisplayName(e.target.value)}
          /> */}
          <input
            type="email"
            placeholder="Email"
            required
            // ref={registerEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            // ref={registerPassword}
            required
          />
          <input type="submit" value="Valider inscription" />
        </form>
      </div>
    </div>
  );
};

export default Register;
