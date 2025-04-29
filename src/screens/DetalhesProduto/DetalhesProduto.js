import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { calcularDesconto, verificarValidade } from '../../utils/promocoes';
import styles from './DetalhesProdutoStyles';

const DetalhesProduto = ({ route, navigation }) => {
  const { produto } = route.params;

  const desconto = calcularDesconto(produto.precoAntigo, produto.preco);
  const validadeEhValida = verificarValidade(produto.validade);
  const validadeEstilo = validadeEhValida ? styles.promocaoValida : styles.promocaoVencida;

  const redirecionarWhatsApp = () => {
    const numero = '5531994969389';
    const mensagem = `Olá, tenho interesse no produto ${produto.id} - ${produto.nome}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.containerPrincipal}>
      <View style={styles.containerImagem}>
        <Image source={{ uri: produto.imagem }} style={styles.imagemProduto} />

        <View style={styles.porcentagemDesconto}>
          <Text style={styles.textoDesconto}>{`-${desconto.toFixed(0)}% OFF`}</Text>
        </View>

        <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.conteudoProduto}>
        <Text style={styles.nomeProduto}>{produto.nome}</Text>
        <Text style={styles.precoAntigo}>R$ {produto.precoAntigo.toFixed(2)}</Text>
        <Text style={styles.precoDesconto}>R$ {produto.preco.toFixed(2)}</Text>

        <Text style={[styles.validadePromocao, validadeEstilo]}>
          Válida até: {produto.validade}
        </Text>

        <Text style={styles.descricaoProduto}>{produto.descricao}</Text>

        <TouchableOpacity style={styles.botaoWhatsapp} onPress={redirecionarWhatsApp}>
          <Icon name="logo-whatsapp" size={20} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.textoWhatsapp}>Entrar em contato</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetalhesProduto;
