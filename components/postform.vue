<template>
    <div class="container">
        <form @submit.prevent="onSave">
            <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label"> Product Title</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="title" v-model="post.title" placeholder="title">
                </div>
            </div>
            <div class="form-group row">
                <label for="previewText" class="col-sm-2 col-form-label"> Preview Text</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="Preview Text" v-model="post.previewText" placeholder="Preview Text">
                </div>
            </div>
            <div class="form-group row">
                <label for="ImageLink" class="col-sm-2 col-form-label">Image Link</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="ImageLink" v-model="post.thumbnail" placeholder="Image Link">
                </div>
            </div>
            <div class="form-group row">
                <label for="Price" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="Price" v-model="post.price" placeholder="Price">
                </div>
            </div>
            <div class="form-group row">
                <label for="description" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                <textarea type="text" class="form-control" id="description" rows="10" v-model="post.description" placeholder="Description"/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary mb-2">Save</button>
                    <button @click="onCancel" type="button" class="btn btn-outline-dark mb-2">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    props:{
        postProp:{
            type: Object,
            required: false
        }  
    },
    data (){
        return {
            post : this.postProp? {...this.postProp} : {
                title:'',
                previewText:'',
                description:'',
                thumbnail:'',
                price:'',
                rating:''
            }   
        }
    },
    methods:{
        onSave(){
            
            this.$emit('submit',this.post)
        },
        onCancel(){
            this.$router.push('/admin')
        }
    }
}
</script>