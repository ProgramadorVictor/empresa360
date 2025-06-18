<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <!-- Não é criado uma requisição http caso utilize a SPA. -->
                            <router-link to="/" class="nav-link">Voltar</router-link>
                            <!-- tag <router-link> utilizado para indicar uma navegação para outra página, porém o to="" é essencial para escolher a página. -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="row mt-5">
            <div class="col-6 offset-3">
                <div class="card">
                    <p class="card-header">Entrar</p>
                    <div class="card-body">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="E-mail">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Senha">
                        </div>
                        <button class="btn btn-primary" @click="navegarPara()">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods:{
            navegarPara(){
                this.$router.replace('/home'); //Replace substituir as rotas, sem criar um histórico de navegação. Ele modifica a URL atual.
                // this.$router.replace({path: '/home'}); //Outra forma de definir o replace

                console.log(this.$router); //Objeto de rastreamento
                // this.$router.push('/home'); //Adicionar uma entrada ao histórico de rotas do navegador.

                //Após o disparo do evento ao clicar em login, você é enviado para rota '/home'.

                // this.$router.push({path: '/home'}); //Outra forma de definir uma navegação diferente de this.$router.push('/home');
            }
        }
    }
</script>