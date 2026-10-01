import React from 'react';
import styles from './VariacaoProduto.module.css';
import ProdutoCard from './ProdutoCard';

export default function VariacaoProduto({ produtoAtivo, selecionarVariacao, executarComAtraso, setProdutoAtivo }) {
  const handleVoltar = () => {
    if (executarComAtraso) {
      executarComAtraso(() => setProdutoAtivo(null));
    } else {
      setProdutoAtivo(null);
    }
  };

  // Identifica a categoria (compatível tanto com id quanto com nome)
  const categoria = (produtoAtivo?.categoriaId || produtoAtivo?.category?.name || '').toLowerCase();
  const isLanche = categoria.includes('lanche');
  const isBebidaOuExtra = categoria.includes('bebida') || categoria.includes('extra') || categoria.includes('bomboniere');

  return (
    <div className={styles["options-container"]}>
      <button className={styles["btn-voltar-inline"]} onClick={handleVoltar}>
        Voltar
      </button>
      <h2>Escolha a opção:</h2>
      <div className={styles["produtos-grid"]}>
        {isLanche ? (
          <>
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Só o Lanche', 0)}
              nomeOpcao="Só o Lanche"
              iconeVisual="🍔"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Combo (Batata + Refri)', 15.00)}
              nomeOpcao="Combo (Batata + Refri)"
              precoExtra={15.00}
              iconeVisual="🍟🥤"
            />
          </>
        ) : isBebidaOuExtra ? (
          <>
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Pequeno', 0)}
              nomeOpcao="Pequeno"
              fontSize="2rem"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Médio', 3.00)}
              nomeOpcao="Médio"
              precoExtra={3.00}
              fontSize="2.8rem"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Grande', 5.00)}
              nomeOpcao="Grande"
              precoExtra={5.00}
              fontSize="3.5rem"
            />
          </>
        ) : (
          <ProdutoCard
            produto={produtoAtivo}
            onClick={() => selecionarVariacao('Tamanho Único', 0)}
            nomeOpcao="Tamanho Único"
          />
        )}
      </div>
    </div>
  );
}