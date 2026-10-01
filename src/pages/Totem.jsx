import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { categoriasDados, produtosDados } from '../data/menuDados';

import styles from './Totem.module.css';
import TelaSplash from './TelaSplash';
import TelaLocal from './TelaLocal';
import TelaMenu from './TelaMenu';
import TelaResumo from './TelaResumo';
import TelaModificarItem from './TelaModificarItem';
import TelaPagamento from './TelaPagamento';
import TelaProcessando from './TelaProcessando';
import TelaSucesso from './TelaSucesso';

export default function Totem() {
  const navegar = useNavigate();

  const [local, setLocal] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const [carrinho, setCarrinho] = useState([]);
  const [itemParaModificar, setItemParaModificar] = useState(null);
  const [indiceModificacao, setIndiceModificacao] = useState(-1);
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [numeroPedido, setNumeroPedido] = useState(null);

  const executarComAtraso = (acao) => {
    setTimeout(() => {
      acao();
    }, 150);
  };

  useEffect(() => {
    setCategorias(categoriasDados);
    if (categoriasDados.length > 0) setCategoriaSelecionada(categoriasDados[0].id);
  }, []);

  useEffect(() => {
    if (categoriaSelecionada) {
      setProdutos(produtosDados.filter(p => p.categoryId === categoriaSelecionada));
    }
  }, [categoriaSelecionada]);

  const processarPagamento = (metodo) => {
    executarComAtraso(() => {
      setMetodoPagamento(metodo);
      navegar('/processando');

      setTimeout(() => {
        const fakeOrderNumber = Math.floor(1000 + Math.random() * 9000);
        setNumeroPedido(fakeOrderNumber);
        navegar('/sucesso');

        setTimeout(() => {
          navegar('/');
          setCarrinho([]);
          setLocal('');
          setMetodoPagamento('');
        }, 5000);
      }, 5000);
    });
  };

  return (
    <div className={styles["totem-wrapper"]}>
      <Routes>
        <Route path="/" element={<TelaSplash executarComAtraso={executarComAtraso} />} />

        <Route path="/local" element={<TelaLocal executarComAtraso={executarComAtraso} setLocal={setLocal} />} />

        <Route path="/menu" element={
          <TelaMenu
            categorias={categorias}
            produtos={produtos}
            categoriaSelecionada={categoriaSelecionada}
            setCategoriaSelecionada={setCategoriaSelecionada}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            executarComAtraso={executarComAtraso}
          />
        } />

        <Route path="/resumo" element={
          <TelaResumo
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            executarComAtraso={executarComAtraso}
            setItemParaModificar={setItemParaModificar}
            setIndiceModificacao={setIndiceModificacao}
          />
        } />

        <Route path="/modificar" element={
          <TelaModificarItem
            itemParaModificar={itemParaModificar}
            setItemParaModificar={setItemParaModificar}
            indiceModificacao={indiceModificacao}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            executarComAtraso={executarComAtraso}
          />
        } />

        <Route path="/pagamento" element={
          <TelaPagamento
            executarComAtraso={executarComAtraso}
            processarPagamento={processarPagamento}
          />
        } />

        <Route path="/processando" element={<TelaProcessando metodoPagamento={metodoPagamento} />} />

        <Route path="/sucesso" element={<TelaSucesso numeroPedido={numeroPedido} />} />
      </Routes>
    </div>
  );
}