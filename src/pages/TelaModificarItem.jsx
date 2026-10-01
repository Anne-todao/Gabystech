import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TelaModificarItem.module.css';

export default function TelaModificarItem({
  itemParaModificar, setItemParaModificar, indiceModificacao, carrinho, setCarrinho, executarComAtraso
}) {
  const navegar = useNavigate();

  return (
    <div className={styles["tela-review"]} style={{ justifyContent: 'center' }}>
      <h2>Modificar Item</h2>

      <div className={styles["quantity-container"]}>
        <h2 style={{ fontSize: '2rem' }}>{itemParaModificar.name}</h2>
        <div className={styles["produto-img"]}>
          {itemParaModificar.image
            ? <img className={styles["produto-foto"]} src={itemParaModificar.image} alt={itemParaModificar.name} />
            : <span aria-hidden="true">🍽️</span>}
        </div>

        <div className={styles["quantity-controls"]}>
          <button className={styles["btn-qty"]} onClick={() => setItemParaModificar({ ...itemParaModificar, quantity: Math.max(1, itemParaModificar.quantity - 1) })}>-</button>
          <span className={styles["qty-display"]}>{itemParaModificar.quantity}</span>
          <button className={styles["btn-qty"]} onClick={() => setItemParaModificar({ ...itemParaModificar, quantity: itemParaModificar.quantity + 1 })}>+</button>
        </div>

        <h2 style={{ marginTop: '20px', color: '#006039' }}>Total: R$ {(itemParaModificar.price * itemParaModificar.quantity).toFixed(2).replace('.', ',')}</h2>

        <div className={styles["quantity-actions"]}>
          <button
            className={styles["btn-adicionar"]}
            onClick={() => executarComAtraso(() => {
              const novoCarrinho = [...carrinho];
              novoCarrinho[indiceModificacao] = itemParaModificar;
              setCarrinho(novoCarrinho);
              navegar('/resumo');
            })}
          >
            Salvar Alterações
          </button>
          <button
            className={styles["btn-cancelar"]}
            onClick={() => executarComAtraso(() => {
              setCarrinho(carrinho.filter((_, i) => i !== indiceModificacao));
              navegar('/resumo');
            })}
          >
            Remover Item
          </button>
          <button
            className={styles["btn-voltar-inline"]}
            onClick={() => executarComAtraso(() => navegar('/resumo'))}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}