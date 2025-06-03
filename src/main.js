import { createApp } from 'vue'
import App from './App.vue'

// Inicio das rotas
import HomeComponent from './views/HomeComponent.vue'
import LoginComponent from './views/LoginComponent.vue'
import { createRouter, createWebHashHistory } from 'vue-router' //Importando a função createRouter.

const routes = [ //Criação de todas as rotas do Vue Router.
    {
        path: '/home', //Caminho para o componente 'HomeComponent' é acessado por /home. localhost:8080/home
        component: HomeComponent
    },
    {
        path: '/login', //localhost:8080/login
        component: LoginComponent
    }
]

const router = createRouter({
    history: createWebHashHistory(), //Atribuindo o retorno da função createWebHashHistory() ao history.
    // routes: routes //passando o const routes, para criação de rotas
    routes //se a chave possui o mesmo nome cuja o valor seja atribuido a chave, tenha o mesmo nome, podemos ocultar a atribuição.
    //Ao invés de usar 'routes: routes', pode ser usado 'routes'
})

const Vue = createApp(App)
Vue.use(router) //Adicionando as configurações de rota à instância do Vue.
Vue.mount('#app') //Pós configuração e montagem, colocamos o '<router-view/>', para renderizar o componente.

// Fim das rotas

//vue add router //plugin: instala e configura automaticamente
//npm i --save -E vue-router // --save (salvar no package) --E (instalar exatamente a versão definida)