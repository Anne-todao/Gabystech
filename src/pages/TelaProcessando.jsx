import React from 'react';
import styles from './TelaSplash.module.css';

export default function TelaProcessando({ metodoPagamento }) {
  return (
    <div className={styles["tela-splash"]}>
      <h1 className={styles["texto-iniciar"]}>⏳ Processando seu pedido...</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '20px', color: '#d9d8d8' }}>
        {metodoPagamento === 'Dinheiro' ? "Dirija-se ao caixa para realizar o pagamento." : "Siga as instruções na máquina de cartão."}
      </p>
    </div>
  );
}