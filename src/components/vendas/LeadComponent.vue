<template>
    <div>
        <h5>{{ dados.id }} - {{ dados.nome }}</h5>
        <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" class="form-control-plaintext" :value="dados.id" readonly>
            </div>
        </div>
        <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.nome">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.telefone">
            </div>
        </div>
        <div class="col-auto">
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            dados: ''
        }),
        methods:{
            getDadosApi(){
                let url = `http://localhost:3000/leads/${this.$route.params.id}`
                fetch(url)
                    .then(response => response.json())
                    .then(response => {
                        this.dados = response
                    })
            }
        },
        created(){
            console.log(this.$route); //Objeto de configuração da rota.
            this.getDadosApi();
        },
    }
</script>
<style lang="css">
</style>