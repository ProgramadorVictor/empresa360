<template>
    <div>
        <h5>Detalhes de Leads {{ $route.params.id }}</h5>
    </div>
</template>
<script>
    export default {
        created(){
            console.log(this.$route); //Objeto de configuração da rota.
        }
    }
</script>
<style lang="css">
</style>