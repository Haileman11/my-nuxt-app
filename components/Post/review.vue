<template>
    <div class="container mt-5">
		<div class="col-md-9">
    	<header class="section-heading">
		    <h3>Reviews </h3>  

	    </header>
    <form @submit.prevent="submitReview">
        <div class="form-row">
            <div class="col-5">
            <textarea type="text" class="form-control" v-model="newReview.comment" placeholder="Add a review" />
            </div>
            <div class="col-2">
                <Rating @rateClickedEvent='handleRateClickEvent' :rating="newReview.rating" />
            </div>
            <div class="col-2">
            <button type="submit" class=" btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
    <template v-for="value in reviews" class="box m-3"   >
	<article :key="value[0]">
		<!-- <p>{{value[1].date}}</p> -->
        <div class="icontext w-100">
			<b-avatar class="img-xs icon rounded-circle"/>
			<div class="text">
                
				<span class="date text-muted float-md-right">{{value[1].date}} </span>  
				<h6 class="mb-1">{{value[1].user}} </h6>
				<Rating :rating="value[1].rating"/> 
				<span class="label-rating text-warning"></span>
			</div>
		</div> 
		<div class="mt-3">
			<p>
				{{value[1].comment}}
			</p>	
		</div>
	</article>
    </template>
	</div> 
</div>
</template>
<script>
import  Rating from "@/components/Post/rating.vue";
import axios from '~/node_modules/axios';
export default {
    components:{
        Rating
    },
    methods:{
        handleRateClickEvent(item){
            this.newReview.rating=item
        },
        submitReview(){
            if(this.$store.getters.isAuthenticated){
                this.$store.dispatch('addReview',this.newReview)
            }
            else{
                this.$router.push('/auth/login')
            }
        }
    },
    props:{
        reviews:{
            type:Array
        }
    },
    data(){
        return {
            newReview:{
                comment:'',
                rating:2,
                postId:this.$route.params.id
            },
            // reviews:[
    // [
    //     "-M_WgELNrdRVJVsuydMe",
    //     {
    //         "comment": "asdasd",
    //         "date": 1620841656684,
    //         "postId": "-M_LbAMppsiDQoBSVCXg",
    //         "rating": 2,
    //         "user": "test@test.com"
    //     }
    // ],
    // [
    //     "-M_WgEsxpylp8z2XnORT",
    //     {
    //         "comment": "asdasd",
    //         "date": 1620841659258,
    //         "postId": "-M_LbAMppsiDQoBSVCXg",
    //         "rating": 2,
    //         "user": "test@test.com"
    //     }
    // ],
    // [
    //     "-M_WgFL6xRoSsVUgzHTS",
    //     {
    //         "comment": "asdasd",
    //         "date": 1620841661133,
    //         "postId": "-M_LbAMppsiDQoBSVCXg",
    //         "rating": 2,
    //         "user": "test@test.com"
    //     }
    // ]
//]
            
        }
    },
     
        
}
</script>
<style scoped>

.rating-star {
    display: flex;
    align-items: center;
    font-size: 3em;
    justify-content: center;
    margin-top: 50px;
}
.back-stars {
    display: flex;
    color: #bb5252;
    position: relative;
    text-shadow: 4px 4px 10px #843a3a;
}
.stars-active {
    display: flex;
    color: #FFBC0B;
    overflow: hidden;
    position: absolute;
    text-shadow: 2px 2px 5px #d29b09;
    top: 0;
    transition: all .5s
}

</style>
