document.getElementById('adicionar-notas-btn').addEventListener('click', function() {
    var nome = prompt('Digite o seu nome:');
    var nota1 = parseFloat(prompt('Digite a primeira nota (de 0 a 10):'));
    var nota2 = parseFloat(prompt('Digite a segunda nota (de 0 a 10):'));
  
    var media = (nota1 + nota2) / 2;
  
    var resultado;
    if (media >= 7) {
      resultado = 'APROVADO';
    } else if (media >= 4 && media < 7) {
      resultado = 'RECUPERAÇÃO';
    } else {
      resultado = 'REPROVADO';
    }
  
    var notasContainer = document.getElementById('notas-container');
    notasContainer.innerHTML = `
      <table>
        <tr>
          <th>Nome</th>
          <th>Nota 1</th>
          <th>Nota 2</th>
          <th>Média</th>
          <th>Resultado</th>
        </tr>
        <tr>
          <td>${nome}</td>
          <td>${nota1}</td>
          <td>${nota2}</td>
          <td>${media.toFixed(2)}</td> 
          <td class="${resultado.toLowerCase()}">${resultado}</td>
        </tr>
      </table>
    `;
  
    notasContainer.style.display = 'block';
  });