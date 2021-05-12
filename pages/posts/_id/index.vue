<template>
    <div class="mt-5">
        <PostDetails :id="post.id" 
        :title="post.title" 
        :thumbnail="post.thumbnail" 
        :description="post.description" 
        :price="post.price" 
        :rating="post.rating" />
        <Review :reviews="reviews"/>
    </div>
</template>
<script>
import PostDetails from '~/components/Post/postdetails'
import Review from '~/components/Post/review'
import axios from '~/node_modules/axios'
export default {
    components:{
        PostDetails,Review
    },
    computed:{
        post(){
            return this.$store.state.loadedPost.find(post=>post.id==this.$route.params.id)   
        },
        loadRating(){
            return this.$store.dispatch('loadRating')   
        }
    },
    asyncData(context){
        return axios.get('https://my-nuxt-72385-default-rtdb.firebaseio.com/reviews.json')
                    .then(result=>{
                        
                        const val = Object.entries(result.data);
                        
                        const kv = val.filter(([key, value]) => value.postId >= context.params.id)
                        
                        return {reviews:kv}
                    })
                    .catch(e=>{console.log(e)})
        
                
      },
}
</script>