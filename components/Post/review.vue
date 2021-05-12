<template>
    <div class="container mt-5">
		<div class="col-md-9">
    	<header class="section-heading">
		    <h3>Reviews </h3>  

	    </header>
    <form>
        <div class="form-row">
            <div class="col-5">
            <textarea type="text" class="form-control" placeholder="Add a review" />
            </div>
            <div class="col-2">
                <Rating @rateClickedEvent='handleRateClickEvent' :rating="newReview.rating" />
            </div>
            <div class="col-2">
            <button type="submit" class=" btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
	<article class="box m-3">
		<div class="icontext w-100">
			<b-avatar class="img-xs icon rounded-circle"/>
			<div class="text">
				<span class="date text-muted float-md-right">24.04.2020 </span>  
				<h6 class="mb-1">Mike John </h6>
				<Rating :rating="4.0"/> 
				<span class="label-rating text-warning">Good</span>
			</div>
		</div> <!-- icontext.// -->
		<div class="mt-3">
			<p>
				Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip
			</p>	
		</div>
	</article>

	</div> <!-- col.// -->
</div>
</template>
<script>
import  Rating from "@/components/Post/rating.vue";
export default {
    components:{
        Rating
    },
    methods:{
        handleRateClickEvent(item){
            this.newReview.rating=item
        }
    },
    data(){
        return {
            newReview:{
                comment:'',
                rating:2
            }
        }
    }
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
