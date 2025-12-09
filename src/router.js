//Melhor criar um script a parte ao invés de usar no main.js, para que conforme a nossa aplicação vai crescendo, maior o código.
//Para facilitar a manutenção criamos um outro script para trazer as configurações e conforme o sistema cresce conseguimos organizar.

// $router é o objeto de roteamento da aplicação, no qual temos a configuração total das rotas.!!!!!!!!!!
// $route é o objeto que contém dados da rota que está ativa no momento.!!!!!!!!!!

import ContratosComponent from './components/vendas/ContratosComponent.vue'
import LeadsComponent from './components/vendas/LeadsComponent.vue'
import ServicosComponent from './components/servicos/ServicosComponent.vue'
import ServicoComponent from './components/servicos/ServicoComponent.vue'
import OpcoesComponent from './components/servicos/OpcoesComponent.vue'
import IndicadoresComponent from './components/servicos/IndicadoresComponent.vue'
import VendasComponent from './components/vendas/VendasComponent.vue'
import HomeComponent from './views/HomeComponent.vue'
import LoginComponent from './views/LoginComponent.vue'
import SiteComponent from './views/SiteComponent.vue'
import LeadComponent from './components/vendas/LeadComponent.vue'
import VendasPadrao from './components/vendas/VendasPadrao.vue'

// import { createRouter, createWebHashHistory } from 'vue-router' //Importando a função createRouter.

import { createRouter, createWebHistory } from 'vue-router' //Testando com o createWebHistory
import DashboardComponent from './components/dashboard/DashboardComponent.vue'
import DashboardRodape from './components/dashboard/DashboardRodape.vue'

const routes = [ //Criação de todas as rotas do Vue Router.
    {
        path: '/home', //Caminho para o componente 'HomeComponent' é acessado por /home. localhost:8080/home
        alias: '/app', //Apelido para rota home. names != apelidos (são como atalhos)
        component: HomeComponent,
        children:[ //Criação de rotas alinhadas. (Rotas filhas).
            {path: 'vendas', component: VendasComponent, name: 'vendas-erro', children:[ //localhost:8080/home/vendas
                {path: 'leads', component: LeadsComponent, name: 'leads'}, //localhost:8080/home/vendas/leads
                {path: 'leads/:id', component: LeadComponent, name: 'lead', alias: ['/l/:id', '/pessoa/:id', '/:id']}, //localhost:8080/home/vendas/leads/id //Utilizando segmento dinâmico, correspondência dinâmica de rota.
                //Podemos ter um ou mais apelidos para a mesma rota, um exemplo está acima na linha 34, para 'leads/:id'.
                {path: 'contratos', component: ContratosComponent, name: 'contratos'}, //localhost:8080/home/vendas/contratos
                {path: '', component: VendasPadrao, name: 'vendas'} //localhost:8080/home/vendas/ //Este componente esta se comportando como padrão como se fosse a própria rota pai.
            ]}, 
            {path: 'servicos', component: ServicosComponent, name: 'servicos', children:[//localhost:8080/home/servicos
                {path: ':id', alias:'/s/:id', name: 'servico', components:
                    {
                        default: ServicoComponent, //Se o atributo não está definido na página, automaticamente o nome é default. Ex: <router-view class="mt-3"/>. Esse por exemplo é default, não sendo necessário explicitar
                        opcoes: OpcoesComponent, //<router-view name="opcoes"/>
                        indicadores: IndicadoresComponent //<router-view name="indicadores"/>
                    }
                } //localhost:8080/home/servicos/1 
                //{path: ':id', component: {ServicoComponent}, name: 'servico'}. O código acima era assim, linha 36, trabalhando apenas com um router-view.
            ]},
            {path: 'dashboard', components:
                {
                    default: DashboardComponent,
                    rodape: DashboardRodape
                }
            } //localhost:8080/home/dashboard
            //ATENÇÃO: Acima para rotas filhas não é usado a barra isto é IMPORTANTE.
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: LoginComponent
    },
    {
        path: '/', //localhost:8080/
        component: SiteComponent
    },
    {path: '/redirecionamento-1', redirect: '/home/servicos'},
    {path: '/redirecionamento-2', redirect: {name: 'leads'}},
    {path: '/redirecionamento-3', redirect: '/home/vendas'},
    //OBSERVAÇÃO: Muito importante, em situações onde temos um componente padrão em determinada rota, caso o redirecionamento seja feita pelo o nome da rota precisamos ter uma atenção extra.
    //MUITO IMPORTANTE, Observe o comportamento de redirecionamento 4 e 5, o 4 não carrega o componente padrão VendasPadrão. Já o 5 carrega o componente.
    {path: '/redirecionamento-4', redirect: {name: 'vendas-erro'}}, //Isso da problema se colocar diretamente na rota pai.
    {path: '/redirecionamento-5', redirect: {name: 'vendas'}}, //Foi aplicado name 'vendas' diretamente no componente padrão, para ser visualizado na rota pai.
    //Para resolução desse problema é necessário que o name usado seja colocado no componente padrão que vai ser renderizado.
    {path: '/redirecionamento-funcao', redirect: to => { //Podemos usar uma função no redirecionamento.
        //Podemos programar algo antes do redirecionamento ser efetivado, podemos registrar logs, lógica, validação. E no final temos que da um return.
        console.log(to);
        return {name: 'vendas'}
        }
    },
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