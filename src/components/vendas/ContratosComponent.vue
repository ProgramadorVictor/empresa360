<template>
    <div>
        <h5>Contratos</h5>
        <router-link class="btn btn-primary" :to="{name: 'contratos', query: {leadId_like: 1} }">LeadId = 1 </router-link>
        <router-link class="btn btn-success" :to="{name: 'contratos', query: {leadId_like: 1, servicoId_like: 2} }">LeadId = 1 e ServicoId = 2 </router-link>
        <!-- Nesse caso no 'router-link' abaixo estamos passando vários query parametros utilizando o name da rota -->
        <!-- <router-link class="btn btn-primary" :to="{name: 'contratos', query: {leadId_like: 1, name: 'teste', parametro: 2} }">LeadId = 1 </router-link>  -->
        <!-- Nesse outro do 'router-link' abaixo estamos passando váris query parametros usando o path -->
        <!-- <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2&name=teste&parametro=2">ServiçoId = 1 </router-link> -->
        <!-- Em ambas a abordagem é diferente. -->
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">LEAD</th>
                    <th scope="col">SERVIÇO</th>
                    <th scope="col">DATA INICIO</th>
                    <th scope="col">DATA FINAL</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in dados" :key="d.id">
                    <td>{{ d.id }}</td>
                    <!-- Relacionamentos ínicio -->

                    <!-- 
                        <td>{{ d.leadId }}</td>
                        <td>{{ d.servicoId }}</td>
                    -->

                    <td>{{ d.lead.nome }}</td>
                    <td>{{ d.servico.servico }}</td>
                    <!-- A vantagem da utilização de relacionamentos é isso -->
                    
                    <!-- Relacionamentos fim -->
                    <td>{{ d.data_inicio }}</td>
                    <td>{{ d.data_fim}}</td>
                    <td>
                        <!-- <router-link :to="`/home/vendas/leads/${d.id}`" class="btn btn-sm btn-primary">  --> <!-- Esta tag <router-link :to=""> é como se fosse uma tag <a> com atributo href="" -->
                        <!-- <router-link :to="{path: `/home/vendas/leads/${d.id}` }" class="btn btn-sm btn-primary"> -->
                        <router-link :to="{name: 'lead', params: {id: d.id}}" class="btn btn-sm btn-primary">
                            <i class="bi bi-pencil-square" style="cursor: pointer"></i>
                        </router-link> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import ApiMixin from '@/mixins/ApiMixin.js';
    export default {
        name: 'LeadsComponent',
        mixins: [ApiMixin],
        data: () => ({
            parametrosDeRelacionamento: '_expand=lead&_expand=servico'
        }),
        created(){
            //Queryparams são todos os parametros após de '?'.
            this.getDadosApi(`http://localhost:3000/contratos?${this.parametrosDeRelacionamento}`); //Consultas com relacionamento usando o json server. Consultas usando QueryParams &
            //Esta consulta com relacionamentos me lembra muito Laravel, usano HasOne/BelongsTo/HasMany/BelongsToMany.
        },
        beforeRouteUpdate(to, from, next){
            if(to.query != undefined){
                console.log(to.query); //Temos um objeto JavaScript.
                //Navegadores/Browser não entendem a sintaxe dessa forma. Para eles entenderem temos que mudar a sintaxe usando uma método nativa do Js. URLSearchParams é o método nativo do Js.
                const queryParams = new URLSearchParams(to.query) //Transformando objeto em sintaxe que os navegadores possam entender. 'leadId_like → "1"' <- Fica dessa forma
                queryParams.toString(); //Necessário converter o objeto URLSearchParams em string para ficar com a sintaxe que os navegadores entendem. Ficando dessa forma -> ' leadId_like=1 '
                //  const queryParams = new URLSearchParams(to.query).toString(); É um código mais enxuto melhor para programação do dia a dia.
                const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams.toString()}`
                console.log(url);
                this.getDadosApi(url);
                next();
            }
        }
    }
</script>
<style lang="css">
</style>