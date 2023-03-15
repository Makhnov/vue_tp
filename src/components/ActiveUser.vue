<template>
    <div>
        <h3 class="fw-bold d-flex align-items-center p-0">
            <span class="h-100 d-flex align-items-center">
                {{ user.prenom + $space + (user.nom).toUpperCase() }}
            </span> 
            <span class="h-100 fs-6 px-4 d-flex align-items-center">
                (ID: {{ user.id }})
            </span> 
            <button @click="ouvrirEdition" type="button" class="btn btn-dark m-1">
                {{edition ? 'Masquer':'Editer'}}
            </button>
            <button class="btn btn-danger" @click="$emit('close')">Fermer</button>
        </h3>
        <p>Age : {{ user.age }}</p>
        <p>Mél : {{ user.mail }}</p>
    </div>
</template>
  
<script>
    export default {
        data(){
            return {
            };
        },
        props: {
            user: {
                type: Object,
                required: true,
            },
            edition: {
                type: Boolean,
                default: false,
            },
        },
        methods: {
            ouvrirEdition() {
                this.$emit('emit-ouvrir-edition');
            },
        },
    };
</script>
  
<style>
    h3 {
        height: 50px !important;
    }

    h1 {
        height: 75px!important;
    }
</style>
