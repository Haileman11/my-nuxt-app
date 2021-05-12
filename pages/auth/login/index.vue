<template>
<section class="section-content ">

	<div class="card mx-auto" >
      <article class="card-body">
      <h4 class="card-title mb-4">Log in</h4>
      <form @submit.prevent="onSignIn">
          <p v-if="error.length" style="color:red">
            {{ error }}
            
          </p>
          <div class="form-group">
             <label>Email</label>
             <input name="" class="form-control" v-model="email" placeholder="ex. name@gmail.com" type="email">
          </div> 
          <div class="form-group">
            
            <input class="form-control" v-model="password" placeholder="******" type="password">
          </div> 
          <div class="form-group"> 
          </div> 
          <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block"> Login  </button>
          </div> 
      </form>
      </article> 
      <div class="card-footer text-center">Don't have an account? <nuxt-link to="/auth/signup">Sign Up</nuxt-link> </div>
    </div>
</section>

</template>
<style scoped>
div.card {
  max-width:520px; 
  margin-top:140px;
  }
</style>
<script>
import axios from "~/node_modules/axios";
export default {
  data(){
		return {
      error:'',
			email:'',
			password:''
		}
	},
  methods:{
    	onSignIn(){
			  this.$store.dispatch('authenticate',{email:this.email,password:this.password})
        .then(res=>{
          if (res==null) {
            this.$router.push('/')
          }
          else this.checkForm()
          
          }).catch(e=>{
            
          })
		},
    checkForm: function () {
      
      this.error =null;

      if (!this.name) {
        this.error='Incorrect credentials, try again';
      }

      
    }
  },
  
}
</script>