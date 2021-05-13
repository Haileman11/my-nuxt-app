<template>
    <article class="card card-product-list container">
	<div class="card-body">
        <template v-for="item in getCartItems">
	    <div class="row" :key="item.title">
		<aside class="col-sm-4">
			<a href="#" class="img-wrap"><img class="img-thumbnail" :src="item.thumbnail"></a>
		</aside> <!-- col.// -->
		<div class="col-sm-8">
				
				<a href="" class="title mt-2 h5">{{item.title}}</a>
                <p>{{item.description}}</p>
				<div class="d-flex mb-3">
					<div class="price-wrap mr-4">
						<span class="price h5">{{item.price}}</span>	
					</div> 
                    <Rating :rating="4" />
				</div>
				


				<div class="form-row">
					<div class="form-group col-4 flex-grow-0">
						<div class="input-group input-spinner ">
						  <div class="input-group-prepend">
						    <button class="btn btn-light" type="button" id="button-plus"> + </button>
						  </div>
						  <input type="text" class="form-control" v-model="item.info.quantity">
						  <div class="input-group-append">
						    <button class="btn btn-light" type="button" id="button-minus"> − </button>
						  </div>
						</div>  
					</div> 
					<div class="form-group col-md">
						<a href="#" class="btn-sm btn-primary btn-danger"> <span class="text">Remove from cart</span>  </a>
					</div> 
				</div> 
			
		</div> 
	    </div>
        </template>
        <div class="form-group col-md">
						<a href="#" class="btn btn-primary"> <span class="text">Buy</span> <i class="fas fa-shopping-cart"></i> </a>
					</div> 
	</div>
</article>
</template>
<script>
import Rating from '~/components/Post/rating.vue';
export default {
  components: { Rating },
    computed:{
        loadPost(){
            return this.$store.getters.loadedPost
        },
        getCartItems(){
            let cartitems=this.$store.getters.getCartItems
            let result =[]
            cartitems.forEach(item => {
                const info={...item}
                result.push({...this.loadPost.filter(p=>p.title==item.title)[0],info})
                
            });
            console.log(result)
            return result
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
