<template>
    <div>
        <h5>Contratos</h5>
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
        created(){
            this.getDadosApi('http://localhost:3000/contratos?_expand=lead&_expand=servico'); //Consultas com relacionamento usando o json server. Consultas usando QueryParams &
            //Esta consulta com relacionamentos me lembra muito Laravel, usano HasOne/BelongsTo/HasMany/BelongsToMany.
        }
    }
</script>
<style lang="css">
</style>