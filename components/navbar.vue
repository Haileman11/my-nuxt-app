<template>
    <header class="section-header">
<nav class="navbar navbar-main navbar-expand-lg navbar-light fixed-top" style="background-color: #e3f2fd;">
  <div class="container">
    <nuxt-link class="nav-link" to="/">Home</nuxt-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0">
        
        <li class="nav-item mr-3">
          <nuxt-link class="nav-link" to="/posts">Posts</nuxt-link>
        </li>
        <li class="nav-item mr-3">
          <nuxt-link class="nav-link" to="/admin">Admin</nuxt-link>
        </li>
                <li class="nav-item mr-3">
          <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
        </li>
      </ul>

      <ul class="navbar-nav">
    <div>
      <b-dropdown  variant="outline" class="m-md-2">
        <template #button-content>
          <div class="icon">
            <i class="fa fa-shopping-cart rounded-circle mr-2 border"></i>
            <span class="notify">{{cart.length}}</span>
          </div>
        </template>
        
        <b-dropdown-item v-for="item of cart" :key="item.title">
          
                <span class="row item">
                  <span class="item-left col-10">
                      
                      <span class="item-info">
                          <span>{{item.title}} ({{item.quantity}})</span>
                          <span>{{item.price}}</span>
                      </span>
                  </span>
                  <span class="item-right col-2 float-right">
                      <button @click.prevent="deleteItem(item.title)" class="btn btn-xs btn-danger pull-right">x</button>
                  </span>
              </span>
            
          
          </b-dropdown-item>
        <b-dropdown-item>Total: {{total}} </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click.prevent="checkout" >Checkout</b-dropdown-item>

      </b-dropdown>
    </div>
        
    <div>
      <b-dropdown  variant="outline" class="m-md-2">
        <template #button-content>
          <i class="fa fa-user rounded-circle mr-2"></i> 
        </template> 
        <b-dropdown-item>Profile</b-dropdown-item>
        <b-dropdown-item>Account Settings</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item @click="logout" >Sign Out</b-dropdown-item>

      </b-dropdown>
    </div>

        
      </ul>
    </div>
  </div>
</nav>
</header>
</template>
<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch('logout')
      .then(res=>{
        this.$router.push('/auth/login')
      })
      .catch(e=>console.log(e))
    },
    deleteItem(item){
      this.$store.dispatch('deleteItem',item)
    },
    checkout(){
      this.$router.push("/posts/checkout")
    }

  },
  
  computed:{
    isAuthenticated(){
      return this.$store.getters.isAuthenticated
    },
    getCurrentUser(){
      return this.$store.getters.getCurrentUser
    }
    ,
    cart(){
      return this.$store.getters.getCartItems
    },
    total(){
        let total=0;
        this.$store.getters.getCartItems.forEach(item => {
        total+=item.price*item.quantity
      })
      return total;
    }
  }
}
</script>