<template>
        <h1 v-if="!utilisateur">Selectionner un utilisateur</h1>
        <h1 v-else>Changer d'utilisateur</h1>
        <table class="table">
        <thead>
            <tr>
                <th>Prénom Nom</th>
                <th>Age</th>
                <th>Mail</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="user in users"
                    :key="user.id"
                    @click="selectionner(user.id)"                    
            >
            <td role="button" class="w-25" :class="{ 'active': utilisateur && user.id === utilisateur.id }">
                {{ user.prenom + $space + (user.nom).toUpperCase() }}
            </td>
            <td class="mw-5" >{{ user.age }}</td>
            <td class="w-10" >{{ user.mail }}</td>
            </tr>
        </tbody>
        </table>
        <ActiveUser v-if="utilisateur" :user="utilisateur" :edition="edition" @close="deSelectionner" @emit-ouvrir-edition="ouvrirEdition" />
        <DataUser v-if="utilisateur && edition" @emit-editer="editer"></DataUser>
  </template>
  
  <script>
    import ActiveUser from './components/ActiveUser.vue';
    import DataUser from './components/DataUser.vue';
    import { toMail, toNom, toPrenom } from './variables.js';

    export default {

        components: {
            ActiveUser,
            DataUser,
        },

        data() {
            return {
                users: [
                { id: 1, prenom: 'Joey', nom: 'Ramone', age: 71, mail: 'joey-ramone@sirerecords.com' },
                { id: 2, prenom: 'Johnny', nom: 'Ramone', age: 74, mail: 'jhonny-ramone@sirerecords.com' },
                { id: 3, prenom: 'DeeDee', nom: 'Ramone', age: 71, mail: 'deedee-ramone@sirerecords.com' },
                { id: 4, prenom: 'Tommy', nom: 'Ramone', age: 74, mail: 'tommy-ramone@sirerecords.com' },
                { id: 5, prenom: 'Marky', nom: 'Ramone', age: 70, mail: 'marky-ramone@sirerecords.com' },
                ],
                utilisateur: null,
                edition: false,
            };
        },

        methods: {
            selectionner(id) {
                this.utilisateur = this.users.find(user => user.id === id);
                this.edition = false;
            },
            deSelectionner() {
                this.utilisateur = null;
                this.edition = false;
            },
            editer(obj) {
                // console.log(this.utilisateur['id']);
                // console.log(obj);
                // console.log(obj.attr);
                // console.log(obj.data);

                switch (obj.attr) {
                    case 'prenom':
                        //console.log('Prenom');
                        //console.log(toPrenom(obj.data));
                        //console.log(toMail(obj.data));
                        this.utilisateur['prenom'] = toPrenom(obj.data);
                        this.utilisateur['mail'] = toMail(obj.data)+'-'+toMail(this.utilisateur['nom'])+'@sirerecords.com';
                        break;
                    case 'nom':
                        // console.log('Nom');
                        this.utilisateur['nom'] = toNom(obj.data);
                        this.utilisateur['mail'] = toMail(this.utilisateur['prenom'])+'-'+toMail(obj.data)+'@sirerecords.com';
                        break;
                    case 'age':
                        //console.log('Age');
                        //console.log(parseInt(obj.data));
                        this.utilisateur['age'] = parseInt(obj.data);
                        break;
                }

                this.edition = false;
            },
            ouvrirEdition() {
                this.edition = !this.edition;
            },
        },
    };
</script>
  
<style>
    .active {
        font-weight: bold;
        text-decoration: underline;
    }
</style>