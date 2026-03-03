export default {
    data: () => ({
            dados: {}
        }),
    methods:{
        getDadosApi(url, queryParams = {}){ //Valor padrão de queryParams é um objeto vazio.
                Object.keys(queryParams).forEach(chave => { //Objeto keys transformar queryParams que é um objeto em array.
                    if(this.formPesquisa[chave] == '') delete this.formPesquisa[chave] //Tratativas para correção de chaves enviados com valores vazios para o backend
                })

                const urlQueryParams = new URLSearchParams(queryParams).toString();

                const urlCompleta = urlQueryParams ? `${url}&${urlQueryParams}` : url

            fetch(urlCompleta)
                .then(response => response.json())
                .then(response => {
                    this.dados = response
                })
        }
    }
}