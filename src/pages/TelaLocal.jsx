import { useNavigate } from 'react-router-dom';
import styles from './TelaLocal.module.css';

export default function TelaLocal({ executarComAtraso }) {
  const navegar = useNavigate();

  const escolherLocal = () => {
    executarComAtraso(() => {
      navegar('/menu');
    });
  };

  return (
    <div className={styles["tela-local"]}>
      <h2 className={styles["titulo"]}>O que você deseja?</h2>
      <div className={styles["opcoes-local"]}>
        <div className={styles["opcao-card"]} onClick={escolherLocal}>
          <span className={styles["icone-local"]}>🍔</span>
          <h2>Comer Aqui</h2>
        </div>
        <div className={styles["opcao-card"]} onClick={escolherLocal}>
          <span className={styles["icone-local"]}>🛍️</span>
          <h2>Levar</h2>
        </div>
      </div>
    </div>
  );
}