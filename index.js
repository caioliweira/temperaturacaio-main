function ConversorDeTemperatura (celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32
  return fahrenheit
}
const temperaturaCelsius = 35;
const temperaturaFahrenheit = ConversorDeTemperatura(temperaturaCelsius);

console.log(`A temperatura de ${temperaturaCelsius}°C é equivalente a ${temperaturaFahrenheit}°F.`);

/////////////////////////////////////////////////////////////////

function ConversorDeBitcoin(bitcoinAmount) {
  const taxaDeCambio = 300000;
  const valorEmReais = bitcoinAmount * taxaDeCambio;
  return valorEmReais;
}

function testConversorDeBitcoin() {
  const bitcoinAmount = 0.05;
  const valorConvertido = ConversorDeBitcoin(bitcoinAmount);

  console.log(`0.05 Bitcoin é equivalente a aproximadamente R$ ${valorConvertido.toFixed(2)}.`);
}

//////////////////////////////////////////////////////////////

function ComparaSenhas (senha1, senha2) {
  if (senha1 === senha2) {
    return 'Senhas iguais: acesso permitido!'
  } else {
    return 'Senhas diferentes: erro de autenticação.'
  }
}

function testComparaSenhas () {
  const senha1 = 'minhaSenha123'
  const senha2 = 'minhaSenha1234'

  const resultado = ComparaSenhas(senha1, senha2)

  if (resultado === 'Senhas iguais: acesso permitido!') {
    console.log('Teste bem-sucedido!')
  } else {
    console.error('Teste falhou. Verifique a função ComparaSenhas.')
  }
}