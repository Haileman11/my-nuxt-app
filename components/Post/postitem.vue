<template>
    
	<div class="col-md-3">
		<figure class="card ">
			<div class="img-wrap w-100"><nuxt-link :to="postLink"><img class="img-thumbnail w-100 h-100"  :src="thumbnail"></nuxt-link></div>
			<figcaption class="info-wrap m-2">
					<a class="title">{{title}}</a>
					<p class="text-muted">{{previewText}}</p>
			</figcaption>
            <div class=" mb-3">
                
                
                <div class="price-wrap m-2">
                    <span class="price h5">{{price}}</span>	
                </div> 

                <template class="p-2" v-if="showBuyingOption!==false">
                    
                    <button @click="addToCart" class="btn btn-primary col-md-12 m-1"><i class="fa fa-shopping-cart"></i> Add To Cart</button>
                </template>
			</div>
			
		</figure>

	</div> 

    
	

</template>

<script>
export default {
    methods:{
        addToCart(){
            this.$store.dispatch('addToCart',{title:this.title,price:this.price})
        }
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
        previewText: {
            type:String,
            required:true
        },
        // rating: {
        //     type:String,
        //     required:false
        // },
        price: {
            type:String,
            required:true
        },
        thumbnail: {
            type:String,
            required:true
        },
        showBuyingOption: {
            type: Boolean,
            default:false
        }

    },

    computed:{
        postLink(){
            return this.showBuyingOption? '/posts/'+this.id: '/admin/'+this.id 
        },
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
