<template>
    <div class="container">
        <button type="button" @click="$router.push('/admin/new-post')">Add Product</button>
        <PostList :posts="loadedPosts"  />
    </div>
</template>
<script>
import PostList from '~/components/Post/postlist'
export default {
    middleware: 'auth',
    components:{
        PostList 
    },
    computed:{
        loadedPosts(){
            return this.$store.getters.loadedPost
        }
    }
}
</script>