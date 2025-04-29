// src/screens/DetalhesProduto/DetalhesProdutoStyles.js

import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  containerImagem: {
    position: 'relative',
  },
  imagemProduto: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  botaoVoltar: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  porcentagemDesconto: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#FF4081',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    zIndex: 1,
  },
  textoDesconto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  conteudoProduto: {
    padding: 20,
    alignItems: 'center',
  },
  nomeProduto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D81B60',
    textAlign: 'center',
    marginBottom: 10,
  },
  precoAntigo: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
    marginBottom: 5,
  },
  precoDesconto: {
    fontSize: 22,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  validadePromocao: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promocaoValida: {
    color: 'green',
  },
  promocaoVencida: {
    color: 'red',
  },
  descricaoProduto: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    lineHeight: 22,
    paddingTop: 10,
    marginBottom: 20,
  },
  botaoWhatsapp: {
    flexDirection: 'row',
    backgroundColor: '#25D366',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoWhatsapp: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});