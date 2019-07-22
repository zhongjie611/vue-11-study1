<template>
    <div>
        <h3 @click="show">app vue--{{msg}}</h3>
        <router-link to='/account'>account</router-link>
        <router-link to='/goodslist'>goodslist</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:'data123'
        }
    },
    methods: {
        show(){
            console.info(this.msg) 
        }
    },
};
</script>
<style>

</style>
