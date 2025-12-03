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
        watch:{ //Monitoramente de alteração de valores
            //Quando se trabalha com monitoramento de valores ou assistindo alterações no objeto route, usamos to e from. É uma boa prática de programação.
            //$route(to, from)//conveção (boa prática) to = novoValor, from = valor antigo
            $route(to){ 
                this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
            }
        }
    }
</script>
<style lang="css">
</style>