import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const ConnectModel = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signUp, setSignUp] = useState<boolean>(true);
  return (
    <div className="connect-modal">
      <div className="header-btn">
        <button
          style={{ background: signUp ? "rgb(28,28,28)" : "rgb(83,83,83)" }}
          onClick={() => setSignUp(true)}
        >
          S'inscrire
        </button>
        <button
          style={{ background: signUp ? "rgb(83,83,83)" : "rgb(28,28,28)" }}
          onClick={() => setSignUp(false)}
        >
          Se connecter
        </button>
      </div>
      {signUp ? <Register /> : <Login />}
    </div>
  );
};

export default ConnectModel;
