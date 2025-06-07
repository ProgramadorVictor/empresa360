//Melhor criar um script a parte ao invés de usar no main.js, para que conforme a nossa aplicação vai crescendo, maior o código.
//Para facilitar a manutenção criamos um outro script para trazer as configurações e conforme o sistema cresce conseguimos organizar.

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

export default router //exportando o objeto 'router'