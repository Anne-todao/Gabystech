import React from 'react';
import styles from './ProdutoCard.module.css';

export default function ProdutoCard({ produto, onClick, nomeOpcao, precoExtra, iconeVisual, fontSize }) {
  const precoCalculado = produto.price + (precoExtra || 0);
  const nomeExibicao = nomeOpcao || produto.name;
  const imagemExibicao = iconeVisual
    ? <span>{iconeVisual}</span>
    : produto.image
      ? <img className={styles["produto-foto"]} src={produto.image} alt={produto.name} />
      : <span aria-hidden="true">🍽️</span>;
  
  return (
    <div className={styles["produto-card"]} onClick={onClick}>
      <div className={styles["produto-img"]} style={fontSize ? { fontSize } : {}}>
        {imagemExibicao}
      </div>
      <h3>{nomeExibicao}</h3>
      <p>R$ {precoCalculado.toFixed(2).replace('.', ',')}</p>
    </div>
  );
}