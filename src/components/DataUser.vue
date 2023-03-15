<template>
    <div>
        <h3 class="fw-bold">Edition:</h3>
        <div class="form-group">
            <label for="propertySelect" class="w-25">Sélectionnez une caractérique:</label>
            <select id="propertySelect" class="form-control w-25" role="button" v-model="attr">
                <option value="prenom">Prénom</option>
                <option value="nom">Nom</option>
                <option value="age">Age</option>
            </select>
        </div>
        <div class="form-group my-3">
            <label for="data">Nouvelle valeur:</label>
            <input id="data" type="text" class="form-control" v-model="data" @keyup.enter="submit" />
        </div>
        <button class="btn btn-primary" @click="submit">Valider</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            attr: '',
            data: '',
        };
    },
    methods: {
        submit() {           
            if (!this.data) return;
            this.$emit('emit-editer', { attr: this.attr, data: this.data });
            this.data = '';
            this.attr = '';
        },
    },
};
</script>

  