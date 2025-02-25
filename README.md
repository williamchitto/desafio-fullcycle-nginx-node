# Desafio Nginx com Node.js

Este desafio faz parte do curso Full Cycle (módulo Docker) e tem como objetivo demonstrar a integração entre o Nginx e o Node.js por meio de um proxy reverso.

## Objetivo do Desafio
A aplicação deve exibir uma mensagem na tela e registrar acessos em um banco de dados MySQL. O fluxo esperado é o seguinte:
1. Uma requisição é feita para a aplicação.
2. A aplicação registra a requisição no banco de dados.
3. A página exibe a mensagem **"Full Cycle!"** acompanhada de uma lista com os registros armazenados no banco.

**Importante:** A interface web da aplicação é desenvolvida em Node.js, mas será acessada através do Nginx, que atuará como proxy reverso.

---

## Como executar a aplicação

Para iniciar a aplicação, utilize o seguinte comando:

```sh
docker-compose up -d
```

Aguarde alguns instantes para que todos os serviços sejam inicializados corretamente.

---

## Acesso à Aplicação

Para visualizar a página, abra o navegador e acesse:

[http://localhost:8080/](http://localhost:8080/)

**Observação:** Caso ocorra um erro 502, aguarde alguns segundos e recarregue a página, pois isso pode indicar que algum serviço ainda está sendo iniciado.

---

Com isso, sua aplicação estará pronta para rodar e demonstrar a integração entre Nginx, Node.js e MySQL. Boa prática!

