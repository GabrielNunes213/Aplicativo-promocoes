// src/screens/TelaInicial/TelaInicialStyles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#FFE4E1',
  },
  cabecalho: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -30,
  },
  logo: {
    width: 240,
    height: 170,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D81B60',
    marginBottom: 10,
  },
  textoCabecalho: {
    width: '95%',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  linhaProdutos: {
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  conteudoLista: {
    paddingBottom: 20,
  },
  cartaoProduto: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '45%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    padding: 0,
  },
  imagemProdutoArea: {
    width: '100%',
    aspectRatio: 1,
  },
  imagemProduto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  conteudoCartao: {
    flexGrow: 1,
    minHeight: 150,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nomeProduto: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  precoAntigo: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginTop: 5,
  },
  precoDesconto: {
    fontSize: 18,
    color: '#D81B60',
    fontWeight: 'bold',
    marginTop: 5,
  },
  caixaDesconto: {
    backgroundColor: '#FF4081',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  descontoProduto: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  validadePromocao: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  promocaoValida: {
    color: 'green',
  },
  promocaoVencida: {
    color: 'red',
  },
});