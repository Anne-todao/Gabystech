import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TelaMenu.module.css';
import CategoriaItem from '../components/CategoriaItem';
import ProdutoCard from '../components/ProdutoCard';
import VariacaoProduto from '../components/VariacaoProduto';
import QuantidadeProduto from '../components/QuantidadeProduto';

export default function TelaMenu({
  categorias, produtos, categoriaSelecionada, setCategoriaSelecionada,
  carrinho, setCarrinho, executarComAtraso
}) {
  const navegar = useNavigate();
  const [produtoAtivo, setProdutoAtivo] = useState(null);
  const [variacaoSelecionada, setVariacaoSelecionada] = useState(null);
  const [quantidade, setQuantidade] = useState(1);

  const getIconeCategoria = (nome) => {
    if (nome === 'Lanches') return '🍔';
    if (nome === 'Sobremesas') return '🍦';
    if (nome === 'Extras') return '🍟';
    if (nome === 'Bebidas') return '🥤';
    return '🍽️';
  };

  const abrirOpcoes = (produto) => {
    executarComAtraso(() => {
      setProdutoAtivo(produto);
      setVariacaoSelecionada(null);
      setQuantidade(1);
    });
  };

  const selecionarVariacao = (nomeOpcao, precoExtra = 0) => {
    executarComAtraso(() => {
      setVariacaoSelecionada({ nome: nomeOpcao, preco: precoExtra });
      setQuantidade(1);
    });
  };

  const adicionarAoCarrinho = () => {
    executarComAtraso(() => {
      const nomeCompleto = produtoAtivo.name + " (" + variacaoSelecionada.nome + ")";
      const precoFinal = produtoAtivo.price + variacaoSelecionada.preco;

      const indiceExistente = carrinho.findIndex(item => item.id === produtoAtivo.id && item.name === nomeCompleto);

      if (indiceExistente >= 0) {
        const novoCarrinho = [...carrinho];
        novoCarrinho[indiceExistente].quantity += quantidade;
        setCarrinho(novoCarrinho);
      } else {
        setCarrinho(anterior => [...anterior, {
          ...produtoAtivo,
          name: nomeCompleto,
          price: precoFinal,
          idCarrinho: Date.now(),
          quantity: quantidade
        }]);
      }

      setProdutoAtivo(null);
      setVariacaoSelecionada(null);
    });
  };

  const cancelarPedido = () => {
    executarComAtraso(() => {
      setCarrinho([]);
      navegar('/');
    });
  };

  const concluirPedido = () => {
    executarComAtraso(() => navegar('/resumo'));
  };

  const totalCarrinho = carrinho.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const quantidadeItens = carrinho.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={styles["tela-menu"]}>
      <div className={styles["menu-container"]}>
        {!variacaoSelecionada && (
          <div className={styles["menu-lateral"]}>
            {!produtoAtivo && categorias.map(categoria => (
              <CategoriaItem 
                key={categoria.id}
                categoria={categoria}
                categoriaSelecionada={categoriaSelecionada}
                setCategoriaSelecionada={setCategoriaSelecionada}
                getIconeCategoria={getIconeCategoria}
                executarComAtraso={executarComAtraso}
              />
            ))}
          </div>
        )}

        {/* LATERAL DIREITA (PRODUTOS) */}
        <div className={styles["menu-produtos"]}>
          {!produtoAtivo ? (
            <div className={styles["produtos-grid"]}>
              {produtos.map(produto => (
                <ProdutoCard 
                  key={produto.id} 
                  produto={produto} 
                  onClick={() => abrirOpcoes(produto)} 
                />
              ))}
            </div>
          ) : !variacaoSelecionada ? (
            <VariacaoProduto 
              produtoAtivo={produtoAtivo} 
              selecionarVariacao={selecionarVariacao} 
              executarComAtraso={executarComAtraso} 
              setProdutoAtivo={setProdutoAtivo} 
            />
          ) : (
            <QuantidadeProduto 
              produtoAtivo={produtoAtivo} 
              variacaoSelecionada={variacaoSelecionada} 
              quantidade={quantidade} 
              setQuantidade={setQuantidade} 
              executarComAtraso={executarComAtraso} 
              setVariacaoSelecionada={setVariacaoSelecionada} 
              setProdutoAtivo={setProdutoAtivo} 
              adicionarAoCarrinho={adicionarAoCarrinho} 
            />
          )}
        </div>
      </div>

      <div className={styles["menu-rodape"]}>
        <div className={styles["info-pedido"]}>
          <span className={styles["valor-total"]}>Total: R$ {totalCarrinho.toFixed(2).replace('.', ',')}</span>
          <span className={styles["qtd-itens"]}>{quantidadeItens} itens</span>
        </div>
        <div className={styles["botoes-rodape"]}>
          <button className={styles["btn-cancelar"]} onClick={cancelarPedido}>Cancelar</button>
          <button className={styles["btn-concluir"]} onClick={concluirPedido} disabled={carrinho.length === 0}>Concluir Pedido</button>
        </div>
      </div>
    </div>
  );
}