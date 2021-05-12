<template>
    <div class="mt-5">
        <PostDetails :id="post.id" 
        :title="post.title" 
        :thumbnail="post.thumbnail" 
        :description="post.description" 
        :price="post.price" 
        :rating="post.rating" />
        <Review  />
    </div>
</template>
<script>
import PostDetails from '~/components/Post/postdetails'
import Review from '~/components/Post/review'
export default {
    components:{
        PostDetails,Review
    },
    computed:{
        post(){
            return this.$store.state.loadedPost.find(post=>post.id==this.$route.params.id)   
        },
        reviews(){
            //return this.$store.state.loadedPost.find(post=>post.id==this.$route.params.id)
        }

    }
}
</script>