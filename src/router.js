//Melhor criar um script a parte ao invés de usar no main.js, para que conforme a nossa aplicação vai crescendo, maior o código.
//Para facilitar a manutenção criamos um outro script para trazer as configurações e conforme o sistema cresce conseguimos organizar.

import HomeComponent from './views/HomeComponent.vue'
import LoginComponent from './views/LoginComponent.vue'
import SiteComponent from './views/SiteComponent.vue'

// import { createRouter, createWebHashHistory } from 'vue-router' //Importando a função createRouter.

import { createRouter, createWebHistory } from 'vue-router' //Testando com o createWebHistory

const routes = [ //Criação de todas as rotas do Vue Router.
    {
        path: '/home', //Caminho para o componente 'HomeComponent' é acessado por /home. localhost:8080/home
        component: HomeComponent
    },
    {
        path: '/login', //localhost:8080/login
        component: LoginComponent
    },
    {
        path: '/', //localhost:8080/
        component: SiteComponent
    }
]

const router = createRouter({
    //Abaixo é o método createWebHashHistory, atribuido ao atributo history, que é definido a navegação por hash do createRouter
    
    // history: createWebHashHistory(), //Atribuindo o retorno da função createWebHashHistory() ao history.

    history: createWebHistory(),

    // routes: routes //passando o const routes, para criação de rotas
    routes //se a chave possui o mesmo nome cuja o valor seja atribuido a chave, tenha o mesmo nome, podemos ocultar a atribuição.
    //Ao invés de usar 'routes: routes', pode ser usado 'routes'
})

export default router //exportando o objeto 'router'
/*
    Navegação History (CreateWebHashHistory): Todas as requisições feitas por esse modo, passam obrigatoriamente pelo index.html, 
    O que vem depois do # não é enviado para o servidor o Vue.js reconhecer esta parte e renderiza o componente.
    É um modo por SPAs (Single Page Applications).

    http://localhost:8080/#/login
*/

/*
    Navegação Hash (CreateWebHistory): Ao utilizar este modo de navegação não usaremos mais o hash, porém.
    Necessita de configuração reescrita de url no servidor HTTP.

    http://localhost:8080/login
*/