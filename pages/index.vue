<template>

  <div class="container">
    
    <h1>Shop Our Products</h1>
    
    <Postlist :posts="loadedPosts" :showBuyOption=true />
    
  </div>
</template>

<script>
import Postlist from '@/components/Post/postlist'

export default {
  components: {
    Postlist
  },
  middleware:'user',
  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPost
    }
  }
  ,
  data(){
        return {
                 
        }
    }
}
</script>

