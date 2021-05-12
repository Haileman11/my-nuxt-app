<template>
<div class="container">
    <h1>Posts</h1>
    <Postlist :posts="loadedPosts" :showBuyOption=true />
</div>
</template>
<script>
import Postlist from '~/components/Post/postlist'
export default {
    middleware:  "log",
    components:{
        Postlist
    },
    computed:{
        loadedPosts(){
            return this.$store.getters.loadedPost
        }
    }
    
}
</script>