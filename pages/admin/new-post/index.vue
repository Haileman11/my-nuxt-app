<template>
    <div class="container">
        <h1>Add New Product</h1>
        <PostForm @submit="onSubmitted"/>   
    </div>
</template>
<script>
import PostForm from '~/components/postform.vue'
import axios from 'axios'
export default {
  components: { PostForm },
  methods:{
      onSubmitted(postData){
          this.$store.dispatch('addPost', postData)
          .then(
              this.$router.push('/admin')
          )
          .catch(e=>console.log(e))
      }
  }
    
}
</script>