import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js' //importando as configurações de rotas e adicionando ao script main.js

const Vue = createApp(App)
Vue.use(router) //Adicionando as configurações de rota à instância do Vue.
Vue.mount('#app') //Pós configuração e montagem, colocamos o '<router-view/>', para renderizar o componente.

//vue add router //plugin: instala e configura automaticamente
//npm i --save -E vue-router // --save (salvar no package) --E (instalar exatamente a versão definida)