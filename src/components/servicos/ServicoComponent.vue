<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{dados.descricao}}</p>
        </div>
    </div>
</template>
<script>
    import apiMixin from '@/mixins/ApiMixin.js'; //Chamando o objeto mixin, com a requisição de api, configurada no objeto .js
    export default {
        name: 'ServicoComponent',
        mixins: [apiMixin],
        created(){
            console.log(this.$route); //Objeto de configuração da rota. Verificando os dados da rota ativada no momento
            this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`);
        },
        /*
        watch:{ //Monitoramente de alteração de valores
            //Quando se trabalha com monitoramento de valores ou assistindo alterações no objeto route, usamos to e from. É uma boa prática de programação.
            //$route(to, from)//conveção (boa prática) to = novoValor, from = valor antigo
            $route(to){ 
                this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
            }
        }
        */
        //Usando outra forma de resolver a lógica acima, utilizando um protetor de rota ao invés de utilizar o watch, protetores de rotas são um conjunto de métodos fornecidos no vue.js
        beforeRouteUpdate(to, from , next){ //Muito interessante, mais simples e mais vantajoso.
            //to: $route para onde estamos indo
            //from: $route de onde estamos vindo
            //next: faz com que o fluxo de navegação siga em frente, após á aplicação de uma tratativa, ou seja, após uma lógica precisamos recuperar o next, no final.   
            if(to.params.id != undefined){
                this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)/
                next()
            }
        }
    }
</script>
<style lang="css">
</style>