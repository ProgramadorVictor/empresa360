<template>
    <div>
        <h5>Componente Opções</h5>
        <p>Poderiamos recuperar as opções do serviço ID. {{ id }}</p>
    </div>
</template>
<script>
    export default {
        name: 'OpcoesComponent',
        props: ['id'],
        created(){
            console.log('Opcoes', this.id)
        }
    }
</script>
<style lang="css">
</style>