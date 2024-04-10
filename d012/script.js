document.getElementById('verificar').addEventListener('click', function(){
  let precoIni = parseFloat(prompt('Insira o preço anterior'))
  let precoAt = parseFloat(prompt('Insira o valor atual'))
  let diferenca = precoAt - precoIni;
  let percentual = ((diferenca/precoIni) * 100).toFixed(0);
  let verificador;
  if(precoIni > precoAt){
    verificador = `Hoje está mais barato!`
  } else if (precoIni == precoAt) {
    verificador = `Está o mesmo preço, burro`
  } else {
    verificador = `Está mais caro!`
  }
  let txtdif;
  let txtper;
  if(diferenca>0){
    txtdif = `O preço subiu em R$${diferenca}`
    txtper = `Uma variação de ${percentual}% para cima`
  }else{
    txtdif = `O preço caiu em R$${Math.abs(diferenca)}`
    txtper = `Uma variação de ${Math.abs(percentual)}% para baixo`
  }

  let res = document.getElementById('res')
  res.innerHTML = `<p>O produto custava R$ ${precoIni.toFixed(2)}, e agora custa R$ ${precoAt.toFixed(2)}.</p><br><p>${verificador}</p><br><p>${txtdif}</p><br> <p>${txtper}</p>`
})