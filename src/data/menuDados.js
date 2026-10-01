
import batataGrande from '../assets/img/batata_grande.jpeg';
import batataMedia from '../assets/img/batata_media.jpeg';
import batataPequena from '../assets/img/batata_pequena.jpeg';
import beefTower from '../assets/img/beef_tower.jpeg';
import bigReact from '../assets/img/big_react.jpeg';
import braboImpostor from '../assets/img/brabo_impostor.jpeg';
import burgerShotEspecial from '../assets/img/burger_shot_especial.jpeg';
import burgerShotPicanha from '../assets/img/burger_shot_picanha.jpeg';
import casquinhaBaunilha from '../assets/img/casquinha_baunilha.jpeg';
import casquinhaChocolate from '../assets/img/casquinha_chocolate.jpeg';
import casquinhaGoiabada from '../assets/img/casquinha_goiabada.jpeg';
import cheddarMccommit from '../assets/img/cheddar_mccommit.jpeg';
import dropTable from '../assets/img/drop_table.jpeg';
import duploStackOverflow from '../assets/img/duplo_stack_overflow.jpeg';
import ecola from '../assets/img/ecola.jpeg';
import frangoFritoGrande from '../assets/img/frango_frito_grande.jpeg';
import frangoFritoMedio from '../assets/img/frango_frito_medio.jpeg';
import frangoFritoPequeno from '../assets/img/frango_frito_pequeno.jpeg';
import kingCalistenia from '../assets/img/king_calistenia.jpeg';
import meatStack from '../assets/img/meat_stack.jpeg';
import mooKids from '../assets/img/moo_kids.jpeg';
import nuggetsGrande from '../assets/img/nuggets_grande.jpeg';
import nuggetsMedio from '../assets/img/nuggets_medio.jpeg';
import nuggetsPequeno from '../assets/img/nuggets_pequeno.jpeg';
import numero9Grande from '../assets/img/numero_9_grande.jpeg';
import pacote from '../assets/img/pacote.jpeg';
import quarteraoComCache from '../assets/img/quarterao_com_cache.jpeg';
import rodeioAzia from '../assets/img/rodeio_azia.jpeg';
import sprunk from '../assets/img/sprunk.jpeg';
import sundaeChocolate from '../assets/img/sundae_chocolate.jpeg';
import sundaeQueijoChiclete from '../assets/img/sundae_queijo_chiclete.jpeg';
import whileTrue from '../assets/img/while_true.jpeg';
import xereta from '../assets/img/xereta.jpeg';

export const categoriasDados = [
  { id: 1, name: 'Lanches' },
  { id: 2, name: 'Extras' },
  { id: 3, name: 'Bebidas' },
  { id: 4, name: 'Sobremesas' }
];

export const produtosDados = [
  { id: 101, name: 'Big React', price: 25.90, image: bigReact, categoryId: 1, category: { name: 'Lanches' } },
  { id: 102, name: 'Rodeio de Azia', price: 27.90, image: rodeioAzia, categoryId: 1, category: { name: 'Lanches' } },
  { id: 103, name: 'Quarterão com Cache', price: 23.50, image: quarteraoComCache, categoryId: 1, category: { name: 'Lanches' } },
  { id: 104, name: 'Duplo Stack Overflow', price: 32.90, image: duploStackOverflow, categoryId: 1, category: { name: 'Lanches' } },
  { id: 105, name: 'Cheddar McCommit', price: 28.00, image: cheddarMccommit, categoryId: 1, category: { name: 'Lanches' } },
  { id: 106, name: 'Brabo Impostor', price: 30.50, image: braboImpostor, categoryId: 1, category: { name: 'Lanches' } },
  { id: 107, name: 'Drop Table', price: 35.00, image: dropTable, categoryId: 1, category: { name: 'Lanches' } },
  { id: 108, name: 'While True', price: 40.00, image: whileTrue, categoryId: 1, category: { name: 'Lanches' } },
  { id: 109, name: 'King Calistenia', price: 26.50, image: kingCalistenia, categoryId: 1, category: { name: 'Lanches' } },
  { id: 110, name: 'O Número 9 Grande', price: 31.00, image: numero9Grande, categoryId: 1, category: { name: 'Lanches' } },
  { id: 111, name: 'BurgerShot Special', price: 29.90, image: burgerShotEspecial, categoryId: 1, category: { name: 'Lanches' } },
  { id: 112, name: 'Moo Kids', price: 19.90, image: mooKids, categoryId: 1, category: { name: 'Lanches' } },
  { id: 113, name: 'Meat Stack', price: 34.50, image: meatStack, categoryId: 1, category: { name: 'Lanches' } },
  { id: 114, name: 'Beef Tower', price: 38.90, image: beefTower, categoryId: 1, category: { name: 'Lanches' } },
  { id: 115, name: 'burgerShot Picanha', price: 48.90, image: burgerShotPicanha, categoryId: 1, category: { name: 'Lanches' } },


  { id: 201, name: 'Batata', price: 10.00, image: batataMedia, categoryId: 2, category: { name: 'Extras' } },
  { id: 202, name: 'Frango Frito', price: 15.00, image: frangoFritoMedio, categoryId: 2, category: { name: 'Extras' } },
  { id: 203, name: 'Nuggets', price: 12.00, image: nuggetsMedio, categoryId: 2, category: { name: 'Extras' } },

  { id: 301, name: 'eCola', price: 8.00, image: ecola, categoryId: 3, category: { name: 'Bebidas' } },
  { id: 302, name: 'Sprunk', price: 8.00, image: sprunk, categoryId: 3, category: { name: 'Bebidas' } },
  { id: 303, name: 'Guaraná Xereta', price: 7.50, image: xereta, categoryId: 3, category: { name: 'Bebidas' } },

  { id: 401, name: 'Casquinha Baunilha', price: 5.00, image: casquinhaBaunilha, categoryId: 4, category: { name: 'Sobremesas' } },
  { id: 402, name: 'Casquinha Chocolate', price: 5.00, image: casquinhaChocolate, categoryId: 4, category: { name: 'Sobremesas' } },
  { id: 403, name: 'Casquinha Goiabada', price: 6.00, image: casquinhaGoiabada, categoryId: 4, category: { name: 'Sobremesas' } },
  { id: 404, name: 'Sundae Chocolate', price: 10.00, image: sundaeChocolate, categoryId: 4, category: { name: 'Sobremesas' } },
  { id: 406, name: 'Sundae Queijo com Chiclete', price: 12.00, image: sundaeQueijoChiclete, categoryId: 4, category: { name: 'Sobremesas' } }
];