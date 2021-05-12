<template>
    <h1>A Single User with ID: {{$route.params.id}}</h1>
</template>

<script>
export default {
    validate(data){
        //console.log(data);
        return data.params.id==1
    }
}
</script>