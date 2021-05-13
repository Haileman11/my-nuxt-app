<template>
    <div class="container">
	<div class="row no-gutters">
		<aside class="col-md-6 border-right">
			<article class="gallery-wrap"> 
				<div class="img-big-wrap">
				<a href="#" class="img-wrap"><img class="img-thumbnail" :src="thumbnail"></a>
				</div> 
			</article> 
		</aside>
		<main class="col-sm-6">
			<article class="content-body">
				<h3 class="title">{{title}}</h3>
				
				<div class="rating-wrap d-flex m-2">
					<Rating :rating="4.5" />
					
					<p class="label-rating text-lg"> <span class="text-muted">| 112 reviews</span></p>
				</div>
				<p>{{description}}
				</p>
			<div class="row  align-items-center mt-lg-5">
				<div class="col">
					<span class="price h4">{{price}}</span> 
				</div> 
				<div class="col ">
					<a href="" class="btn btn-lg btn-primary"> <span class="text">Add To Cart</span> <i class="icon fas fa-shopping-cart"></i>  </a>
					
				</div> 
			</div> 

			</article> 
		</main> 
	</div> 
</div>
</template>
<script>
import Rating from "~/components/Post/rating";
export default {
    components:{
		Rating
	},
	props:{
        id: {
            type:String,
            required: true
        },
        title: {
            type:String,
            required:true
        },
        description: {
            type:String,
            required:true
        },
        rating: {
            type:String,
            required:false
        },
        price: {
            type:String,
            required:true
        },
        thumbnail: {
            type:String,
            required:true
        },

	}
}
</script>