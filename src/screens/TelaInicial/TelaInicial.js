import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import produtosData from '../../data/produtos.json';
import { calcularDesconto, verificarValidade } from '../../utils/promocoes';
import styles from './TelaInicialStyles';

const TelaInicial = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(produtosData);
  }, []);

  const renderItem = ({ item }) => {
    const precoAntigo = item.precoAntigo;
    const desconto = calcularDesconto(precoAntigo, item.preco);
    const validadeEstilo = verificarValidade(item.validade) ? styles.promocaoValida : styles.promocaoVencida;

    return (
      <TouchableOpacity
        style={styles.cartaoProduto}
        onPress={() => navigation.navigate('DetalhesProduto', { produto: item })}
      >
        <View style={styles.imagemProdutoArea}>
          <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
        </View>

        <View style={styles.conteudoCartao}>
          <Text style={styles.nomeProduto}>{item.nome}</Text>
          <Text style={styles.precoAntigo}>R$ {precoAntigo.toFixed(2)}</Text>
          <Text style={styles.precoDesconto}>R$ {item.preco.toFixed(2)}</Text>

          <View style={styles.caixaDesconto}>
            <Text style={styles.descontoProduto}>{`-${desconto.toFixed(0)}% OFF`}</Text>
          </View>

          <Text style={[styles.validadePromocao, validadeEstilo]}>
            Válida até: {item.validade}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.cabecalho}>
        <Image source={require('../../../assets/logo-header.png')} style={styles.logo} />
      </View>

      <Text style={styles.titulo}>🌸 Promoções da Semana 🌸</Text>
      <Text style={styles.textoCabecalho}>
        🛍️ Aproveite as melhores ofertas! Promoções válidas por tempo limitado. 🌟
      </Text>

      <FlatList
        data={produtos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.linhaProdutos}
        contentContainerStyle={styles.conteudoLista}
      />
    </View>
  );
};

export default TelaInicial;