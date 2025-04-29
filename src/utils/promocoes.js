export const calcularDesconto = (precoAntigo, precoAtual) => {
  if (!precoAntigo || !precoAtual) return 0;
  return ((precoAntigo - precoAtual) / precoAntigo) * 100;
};

export const verificarValidade = (validadeStr) => {
  if (!validadeStr) return false;

  const [dia, mes, ano] = validadeStr.split('/');
  const dataValidade = new Date(ano, mes - 1, dia);

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  return dataValidade >= hoje;
};
