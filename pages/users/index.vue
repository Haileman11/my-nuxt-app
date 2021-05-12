<template>
    <div class="container">
        <h1>Users</h1>
        <input type="text" v-model="id">
        <button @click="onLoadUser">Go</button>
    </div>
</template>
<script>
export default {
    data: {
        id: ''
    },
    methods: {
        onLoadUser(){
            this.$router.push('/users/'+this.id)
        }
    }
}
</script>