<template>
    <div>
        <h5>Leads</h5>
        {{ dados }}
    </div>
</template>
<script>
    export default {
        name: 'LeadsComponent',
        data: () => ({
            dados: null
        }),
        methods: {
            getDadosApi(){
                let url = 'http://localhost:3000/leads'
                fetch(url)
                    .then(response => response.json())
                    .then(response => {
                        this.dados = response
                    })
            }
        },
        created(){
            this.getDadosApi();
        }
    }
</script>
<style lang="css">
</style>