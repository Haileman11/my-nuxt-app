import axios from 'axios'
import Vuex from 'vuex'
const createStore = () =>{
    return new Vuex.Store({
        state:{
            loadedPost:[],
            token:null,
            isAdmin:false,
            cart:[],
            username:null,
            ratings:[]
        },
        mutations:{
            setPosts(state,posts){
                state.loadedPost=posts
            },
            editPost(state,post){
                
                state.loadedPost[state.loadedPost.findIndex(p =>p.id ==post.id)]=post
            },
            addPost(state, post){
                state.loadedPost.push(post)
            },
            setToken(state,authObj){
                state.token=authObj.token
                state.username=authObj.email
                state.isAdmin=authObj.email=="admin@admin.com"
            },
            clearToken(state){
                state.token=null
                state.isAdmin=false
            },
            addToCart(state,item){
                const index=state.cart.findIndex(p=>p.title==item.title)
                state.cart[index]==null? state.cart.push({...item,quantity:1}):state.cart[index].quantity++
            },
            deleteCartItem(state,title){
                const index=state.cart.findIndex(p=>p.title==title)
                state.cart.splice(index,1)
            },
            loadRating(state,ratings){
                state.ratings=ratings
            }
        },
        actions:{
            nuxtServerInit(vuexContext,context){
                vuexContext.dispatch('loadRating')
                return axios.get('https://my-nuxt-72385-default-rtdb.firebaseio.com/posts.json')
                .then(res=>{
                    const postArray=[]
                    for (const key in res.data){
                        postArray.push({...res.data[key], id:key})
                    }
                    vuexContext.commit('setPosts',postArray)
                    
                })
                .catch(e=>console.log(e))
                
            },
            setPosts(vuexContext,posts){
                vuexContext.commit('setPosts',posts)
            },
            editPost(vuexContext,post){
                axios.put('https://my-nuxt-72385-default-rtdb.firebaseio.com/posts/'+ post.id + '.json?auth='+vuexContext.state.token, post)
                .then(result=>vuexContext.commit('editPost',post))
                .catch(e=>console.log(e))
            },
            addPost(vuexContext,post){
                axios.post('https://my-nuxt-72385-default-rtdb.firebaseio.com/posts.json?auth='+vuexContext.state.token, post)
                .then(
                    result=>{vuexContext.commit('addPost',{...post, id:result.data.name})}
                    
                )
                .catch(e=>console.log(e))
            },
            signUp(vuexContext,signUpData){
                return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+process.env.apiKey,{
				email:signUpData.email,
				password:signUpData.password,
				returnSecureToken:true
			}).then(result=>{
                console.log(result.data.idToken)
                vuexContext.commit('setToken',result.data.idToken)
                })
            },
            authenticate(vuexContext,authData){
                return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+process.env.apiKey ,{
				email:authData.email,
				password:authData.password,
				returnSecureToken:true
			}).then(result=>
                vuexContext.commit('setToken',{token:result.data.idToken,email:result.data.email})
                )
            .catch(e=>{return e})
            },
            logout(vuexContext){
                return vuexContext.commit('clearToken')
            },
            addToCart(vuexContext,item){
                vuexContext.commit('addToCart',item)
            },
            deleteItem(vuexContext,title){
                vuexContext.commit('deleteCartItem',title)
            },
            addReview(vuexContext,review){
                axios.post('https://my-nuxt-72385-default-rtdb.firebaseio.com/reviews.json?auth='+vuexContext.state.token, 
                {...review,user:vuexContext.state.username,date:Date.now()})
                .then(
                    result=>{return result}
                )
                .catch(e=>console.log(e))
            },
            loadRatings(vuexContext){

                axios.get('https://my-nuxt-72385-default-rtdb.firebaseio.com/reviews.json')
                .then(result=>{
                    const val = Object.entries(result.data);
                    vuexContext.commit("loadRatings",val)
                })
                .catch(e=>{console.log(e)})
            },
            loadRating(vuexContext,postId){
                const kv = vuexContext.state.ratings.filter(([key, value]) => value.postId >= postId)
                let total=0;
                let count=0;
                kv.forEach(e=>{
                    count++
                    (total+e[1].rating)/count
                })
                return total    
            },
            deleteReview(vuexContext,reviewId){
                axios.delete('https://my-nuxt-72385-default-rtdb.firebaseio.com/reviews/'+reviewId+'.json')
                .then(result=>{
                    return result
                })
                .catch(e=>{console.log(e)})
            }

        },
        getters:{
            loadedPost(state){
                return state.loadedPost
            },
            isAuthenticated(state){
                return state.token!=null
            },
            isAdmin(state){
                return state.isAdmin
            },
            getCartItems(state){
                return state.cart
            },
            getCurrentUser(state){
                return state.username
            }
        }
    })
}

export default createStore