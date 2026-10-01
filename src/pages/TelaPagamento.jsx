import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TelaPagamento.module.css';

export default function TelaPagamento({ executarComAtraso, processarPagamento }) {
  const navegar = useNavigate();
  return (
    <div className={styles["tela-pagamento"]}>
      <h2>Selecione a forma de pagamento</h2>
      <div className={styles["opcoes-pagamento"]}>
        <button onClick={() => processarPagamento('Dinheiro')}>💵 Dinheiro no Caixa</button>
        <button onClick={() => processarPagamento('Pix')}>💠 Pix</button>
        <button onClick={() => processarPagamento('Debito')}>💳 Débito</button>
        <button onClick={() => processarPagamento('Credito')}>💳 Crédito</button>
      </div>
      <button className={styles["btn-voltar-review"]} onClick={() => executarComAtraso(() => navegar('/resumo'))}>
        Voltar
      </button>
    </div>
  );
}