<template>
    <div class="rating-wrap d-flex m-2">
        <div class="rating-stars">
            <div class="back-stars">
                <i class="fa fa-star" v-for="item in items" :key="item" aria-hidden="true" @click="onRateClicked(item)"></i>
                <div :style="{width: rating*20 + '%'}" class="stars-active"> 
                    <i class="fa fa-star" v-for="item in items" :key="item" aria-hidden="true" @click="onRateClicked(item)"></i>
                </div>
            </div>
        </div>
        <small class="label-rating text-muted ml-3">{{rating}}</small>
    </div>
</template>
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
<script>
export default {
    props:{
        rating:null
    },
    data(){
        return {
            items:[1,2,3,4,5]
        }
    },
    methods:{
        onRateClicked(item){
            this.$emit("rateClickedEvent",item)
        }
    }
}
</script>