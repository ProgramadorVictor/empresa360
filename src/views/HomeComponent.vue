<template>
    <div>
        <!-- Não é criado uma requisição http caso utilize a SPA. -->
        Home
        <router-link :to="{path: '/login'}">Navegar para "/login"</router-link>
        <!-- tag <router-link> utilizado para indicar uma navegação para outra página, porém o to="" é essencial para escolher a página. -->
    </div>
</template>
<script>
    export default {
    
    }
</script>
<style lang="css">
</style>