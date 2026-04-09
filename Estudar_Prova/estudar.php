<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Consulta de Clima - OpenWeatherMap</title>
  <style>
    corpo {
      família de fontes: Arial, sem serifa;
      fundo: gradiente-linear(180 graus, #0083b0, #00b4db);
      cor: #fff;
      alinhamento do texto: centralizado;
      preenchimento: 40px;
    }
    h1 {
      margem-inferior: 20px;
    }
    entrada {
      preenchimento: 10px;
      largura: 250px;
      fronteira: nenhuma;
      raio da borda: 5px;
      Esboço: nenhum;
    }
    botão {
      preenchimento: 10px 20px;
      margem esquerda: 10px;
      fronteira: nenhuma;
      raio da borda: 5px;
      cor de fundo: #006680;
      cor: #fff;
      cursor: ponteiro;
    }
    botão:passar o mouse {
      cor de fundo: #0099b8;
    }
    #resultado {
      margem superior: 30px;
      cor de fundo: rgba(0,0,0,0.2);
      preenchimento: 20px;
      raio da borda: 10px;
      exibição: inline-block;
      largura mínima: 300px;
    }
    .erro {
      cor: #ff8080;
    }
  </style>
</head>
<body>
  <h1>Consulta de Clima</h1>
  <input type="text" id="cidadeInput" placeholder="Digite o nome da cidade">
  <button onclick="buscarClima()">Buscar</button>

  <div id="resultado">
    <p>Digite uma cidade para ver o clima atual.</p>
  </div>

  <script>
    const apiKey = "5104515b692a20f0186e41d6757103ee";

    função buscarClima() {
      const cidade = document.getElementById("cidadeInput").value.trim();
      const resultado = document.getElementById("resultado");

      se (!) {
        resultado.innerHTML = "<p class='erro'>Por favor, digite uma cidade.</p>";
        retornar;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

      resultado.innerHTML = "<p>Buscando dados...</p>";

      buscar(url)
        .then(response => response.json())
        .then(dados => {
          console.log(dados);
          se (data.cod != 200) {
            resultado.innerHTML = `<p class='erro'>Erro: ${data.message}</p>`;
          } outro {
            resultado.innerHTML = `
              <h2>${data.name}, ${data.sys.country}</h2>
              <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
              <p><strong>Condição:</strong> ${data.weather[0].description}</p>
              <p><strong>Umidade:</strong> ${data.main.humidity}%</p>
              <p><strong>Vento:</strong> ${data.wind.speed} m/s</p>
            `;
          }
        })
        .catch(erro => {
          console.log("Erro ao buscar clima:"+ erro);
          resultado.innerHTML = "<p class='erro'>Erro ao buscar dados. Tente novamente.</p>";
        });
    }
  </script>
</body>
</html>