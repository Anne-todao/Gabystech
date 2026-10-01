import React from 'react';
import styles from './TelaSplash.module.css';

export default function TelaSucesso({ numeroPedido }) {
  return (
    <div className={styles["tela-splash"]} style={{ backgroundColor: '#fff', color: '#006039' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>✅ Pedido Confirmado!</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>Aguarde sua senha ser chamada no painel:</p>
      <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '30px 0', color: '#da0000' }}>#{numeroPedido}</div>
      <p style={{ fontSize: '1rem', color: '#555' }}>Retire seu recibo abaixo.</p>
    </div>
  );
}