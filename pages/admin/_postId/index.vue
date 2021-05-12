<template>
    <div class="container">
        <h1>Edit Product</h1>
        <PostForm @submit="onEdit" :postProp="loadedPost"/>   
    </div>
</template>
<script>
import PostForm from '~/components/postform.vue'
export default {
    components: { PostForm },
    
    computed:{
        loadedPost(){
            return this.$store.state.loadedPost.find(post=>post.id==this.$route.params.postId)
        }
    },
    methods: {
        onEdit(editData){
            this.$store.dispatch('editPost',{...editData,id:this.$route.params.postId})
            .then(
                console.log(editData),
                
                this.$router.push('/admin'),
                console.log(this.loadedPost)
                )
            .catch(e=>console.log(this.$store.state.loadedPost.find(post=>post.id==this.$route.params.postId)));
        }
    }
    
}
</script>