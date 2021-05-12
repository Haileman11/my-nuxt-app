<template>
    <article class="card card-product-list">
	<div class="card-body">
	<div class="row">
		<aside class="col-sm-4">
			<a href="#" class="img-wrap"><img class="img-thumbnail" src="~/assets/images/9.jpg"></a>
		</aside> <!-- col.// -->
		<div class="col-sm-8">
				<a href="#" class="btn-link float-right"> <i class="fa fa-heart"></i></a>
				<a href="#" class="title mt-2 h5">GoPro HERO7 Camera</a>
				<div class="d-flex mb-3">
					<div class="price-wrap mr-4">
						<span class="price h5">$299.00</span>	
					</div> <!-- price-dewrap // -->

					<div class="rating-wrap">
						<div class="rating-stars">
						<div class="back-stars">
							<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> 
						
							<div style="width:70%" class="stars-active"> 
								<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
							</div>
						</div>
						</div>
						<small class="label-rating text-muted">7/10</small>
					</div> <!-- rating-wrap.// -->
				</div>
				
				<ul class="list-bullet">
					<li>Optical heart sensor</li>
					<li>S3 with dual-core processor</li>
					<li>Accelerometer and gyroscope</li>
				</ul>


				<div class="form-row">
					<div class="form-group col-4 flex-grow-0">
						<div class="input-group input-spinner ">
						  <div class="input-group-prepend">
						    <button class="btn btn-light" type="button" id="button-plus"> + </button>
						  </div>
						  <input type="text" class="form-control" value="1">
						  <div class="input-group-append">
						    <button class="btn btn-light" type="button" id="button-minus"> − </button>
						  </div>
						</div>  <!-- input-spinner.// -->
					</div> <!-- col.// -->
					<div class="form-group col-md">
						<a href="#" class="btn btn-primary"> <span class="text">Add to cart</span> <i class="fas fa-shopping-cart"></i> </a>
					</div> <!-- col.// -->
				</div> <!-- row.// -->
			
		</div> <!-- col.// -->
	</div> <!-- row.// -->
	</div> <!-- card-body .// -->
</article>
</template>
<script>
export default {
	
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
