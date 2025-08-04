<template>
  <router-view/> <!-- Pós definição, de todo processo em main.js, usamos o router-view, para renderizar os componentes para serem exibidos -->
</template>
<script>
/*
  npm install -g json-server@v0.17.0 -E //Somente instalação do json-server
  json-server -h //Mostra todos os comandos disponiveis para esta lib.
*/

/*
  Representação de um back-end fake aula 232.

  Este comando abaixo executa um servidor local back-end fake baseado no que está dentro do arquivo
  json-server --watch json-server.json
*/
export default {
  name: 'App'
}
</script>
<style>
</style>