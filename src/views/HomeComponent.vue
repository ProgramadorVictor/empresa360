<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <router-link class="navbar-brand" to="/home">Empresa 360</router-link>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="d-flex">
            <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" to="/home/dashboard" exact-active-class="active">
                    <i class="bi bi-speedometer2"></i>Dashboard
                </router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas" exact-active-class="active">
                    <i class="bi bi-cart"></i>Vendas
                </router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas/leads" exact-active-class="active">
                    <i class="bi bi-caret-right"></i>Leads
                </router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas/contratos" exact-active-class="active">
                    <i class="bi bi-caret-right"></i>Contratos
                </router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/servicos" exact-active-class="active">
                    <i class="bi bi-card-checklist"></i>Serviços
                </router-link>
            </div>

            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div class="container-fluid">
                    <router-view/>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}
/*
    .router-link-active, router-link-exact-active //Ambos são usados para estilização da navegação.
    
    router-link-active, pega o prefixo '/home/vendas' e todos os outros subordinados desses são aplicados o efeito css.
*/

/* .router-link-active {
    color: white;
    background-color: #0d6efd !important;
    border-color: #0d6efd;
} */

.router-link-exact-active {
    color: white;
    background-color: #0d6efd !important;
    border-color: #0d6efd;
}

.ativo{
    color: white ;
    background-color: red;
    border-color: red;
}
/* Ficar atento a correspondência inclusiva e correspondência exata. */
</style>