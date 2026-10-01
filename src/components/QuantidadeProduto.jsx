import React from 'react';
import styles from './QuantidadeProduto.module.css';

export default function QuantidadeProduto({ 
  produtoAtivo, variacaoSelecionada, quantidade, setQuantidade, 
  executarComAtraso, setVariacaoSelecionada, setProdutoAtivo, adicionarAoCarrinho 
}) {
  return (
    <div className={styles["quantity-container"]}>
      <button className={styles["btn-voltar-inline"]} onClick={() => executarComAtraso(() => setVariacaoSelecionada(null))}>Voltar</button>
      <h2 style={{ fontSize: '2rem' }}>{produtoAtivo.name} ({variacaoSelecionada.nome})</h2>
      <div className={styles["produto-img"]}>
        {produtoAtivo.image
          ? <img className={styles["produto-foto"]} src={produtoAtivo.image} alt={produtoAtivo.name} />
          : <span aria-hidden="true">🍽️</span>}
      </div>

      <div className={styles["quantity-controls"]}>
        <button className={styles["btn-qty"]} onClick={() => setQuantidade(Math.max(1, quantidade - 1))}>-</button>
        <span className={styles["qty-display"]}>{quantidade}</span>
        <button className={styles["btn-qty"]} onClick={() => setQuantidade(quantidade + 1)}>+</button>
      </div>

      <h2 style={{ marginTop: '20px', color: '#006039' }}>Total: R$ {((produtoAtivo.price + variacaoSelecionada.preco) * quantidade).toFixed(2).replace('.', ',')}</h2>

      <div className={styles["quantity-actions"]}>
        <button className={styles["btn-cancelar"]} onClick={() => executarComAtraso(() => { setProdutoAtivo(null); setVariacaoSelecionada(null); })}>Cancelar</button>
        <button className={styles["btn-adicionar"]} onClick={adicionarAoCarrinho}>Adicionar ao Pedido</button>
      </div>
    </div>
  );
}