import React from 'react';
import styles from './CategoriaItem.module.css';

export default function CategoriaItem({ categoria, categoriaSelecionada, executarComAtraso, setCategoriaSelecionada, getIconeCategoria }) {
  const isAtiva = categoriaSelecionada === categoria.id;

  return (
    <div
      className={`${styles['categoria-item']} ${isAtiva ? styles['categoria-ativa'] : ''}`}
      onClick={() => executarComAtraso(() => setCategoriaSelecionada(categoria.id))}
    >
      <span style={{ fontSize: '2rem', marginBottom: '6px' }}>
        {getIconeCategoria(categoria.name)}
      </span>
      {categoria.name}
    </div>
  );
}