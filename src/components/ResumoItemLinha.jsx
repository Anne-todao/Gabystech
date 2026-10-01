import React from 'react';
import styles from './ResumoItemLinha.module.css';

export default function ResumoItemLinha({
  item, indice, carrinho, setCarrinho, executarComAtraso, setItemParaModificar, setIndiceModificacao, navegar
}) {
  return (
    <div className={styles["item-review-linha"]}>
      <div className={styles["item-review-topo"]}>
        <span className={styles["item-review-nome"]}>{item.quantity}X {item.name}</span>
        <span className={styles["item-review-preco"]}>{(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
      </div>

      <div className={styles["item-review-acoes"]}>
        <button
          className={styles["btn-remover"]}
          onClick={() => executarComAtraso(() => setCarrinho(carrinho.filter((_, i) => i !== indice)))}
        >
          Remover
        </button>

        <div className={styles["review-qty-controls"]}>
          <button onClick={() => {
            if (item.quantity > 1) {
              const novoCarrinho = [...carrinho];
              novoCarrinho[indice].quantity -= 1;
              setCarrinho(novoCarrinho);
            }
          }}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => {
            const novoCarrinho = [...carrinho];
            novoCarrinho[indice].quantity += 1;
            setCarrinho(novoCarrinho);
          }}>+</button>
        </div>

        <button
          className={styles["btn-modificar"]}
          onClick={() => executarComAtraso(() => {
            setItemParaModificar({ ...item });
            setIndiceModificacao(indice);
            navegar('/modificar');
          })}
        >
          Modificar
        </button>
      </div>
    </div>
  );
}