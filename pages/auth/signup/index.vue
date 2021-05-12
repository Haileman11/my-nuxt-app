<template>
  <section class="section-content ">
	<div class="card mx-auto" >
      <article class="card-body">
		<header class="mb-4"><h4 class="card-title">Sign up</h4></header>
		<form @submit.prevent="onSignUp">
				<div class="form-row">
					<div class="col form-group">
						<label>First name</label>
					  	<input type="text" class="form-control" disabled placeholder="">
					</div>
					<div class="col form-group">
						<label>Last name</label>
					  	<input type="text" class="form-control" disabled placeholder="">
					</div>
				</div>
				<div class="form-group">
					<label>Email</label>
					<input type="email" v-model="email" class="form-control" placeholder="">
					
				</div>
				
				<div class="form-row">
					<div class="form-group col-md-6">
						<label>Create password</label>
					    <input class="form-control" v-model="password" type="password">
					</div>
					<div class="form-group col-md-6">
						<label>Repeat password</label>
					    <input class="form-control" disabled type="password">
					</div>
				</div>
			    <div class="form-group">
			        <button type="submit" class="btn btn-primary btn-block"> Register  </button>
			    </div> 
			    
			</form>
		</article>
    </div> 
    <p class="text-center mt-4">Have an account? <nuxt-link to="/auth/login">Log In</nuxt-link> </p>
    <br><br>

</section>
</template>
<style scoped>
div.card {
  max-width:520px; 
  margin-top:40px;
  }
</style>
<script>
import axios from '~/node_modules/axios'
export default {
	data(){
		return {
			email:'',
			password:''
		}
	},
	methods:{
		onSignUp(){
			this.$store.dispatch('signUp',{ email:this.email,password:this.password, isAdmin:true}).then(result=>
			this.$router.push('/')
			).catch(e=>console.log(e))
		}
	}
}
</script>
