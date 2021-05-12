<template>
    <div class="row">
    <PostItem 
    v-for="post of posts"
    :key="post.id"
    :showBuyingOption="showBuyOption"
    :id="post.id"
    :title="post.title"
    :thumbnail="post.thumbnail"
    :previewText="post.previewText"
    
    :price="post.price"
    
    />
    
    
    </div>
</template>
<script>
import PostItem from '@/components/Post/postitem'
import PostDetails from '~/components/Post/postdetails'
import Purchase from '~/components/purchase'


export default {
  components: {
    PostItem,Purchase,PostDetails
    
  },
  props: {
      showBuyOption:{
          type:Boolean,
          default:false
      },
      posts:{
          type: Array,
          required: true
      }
  }
}
</script>

