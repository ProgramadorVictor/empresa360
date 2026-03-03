<template>
    <div>
        <h5>Componente Indicadores</h5>
        <p>Poderiamos recuperar os indicadores do serviço ID. {{ id }}</p>
    </div>
</template>
<script>
    export default {
        name: 'IndicadoresComponent',
        props: ['id'],
        created(){
            console.log('Indicadores via props (no caso se props false)', this.id)
            console.log('Indicadores', this.$route.params.id)
        }
    }
</script>
<style lang="css">
</style>