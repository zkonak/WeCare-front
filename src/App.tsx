import React from 'react';
import styles from './App.module.scss';
import ButtonComponent from './components/atoms/Button/ButtonComponent';


function App() {
  return (
    <div  className={styles.container}>
     <h1>React Typescript</h1>
     <ButtonComponent></ButtonComponent>
    </div>
  );
}

export default App;
