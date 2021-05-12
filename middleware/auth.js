
export default function (context){
    console.log(context.store.getters.isAuthenticated ,context.store.getters.isAdmin)
    if(!context.store.getters.isAuthenticated || !context.store.getters.isAdmin){
        context.redirect("/auth/login")
    }
}