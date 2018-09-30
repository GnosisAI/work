<template>

        <div class="algo-list-wrapper">
            <div class="algo-avatar">
                <a href="/users/keshavashiya" alt="">
                <img :src="icon" class="avatar">
                </a>
            </div> 
            <div class="algo-info">
                <div>
                    <router-link  class="algo-list-link" :to="'/algorithm/'+name">
                        <span class="algo-info__name">{{name | capitalize}}</span>
                    </router-link>

                    <p class="algo-url">{{description.title | capitalize}}</p> 
                    <p class="algo-list-body">{{description.details | truncate(100)}}</p>
                </div> 
            </div>
            <hr>
        </div>

</template>
<script>
export default {
    name: 'AlgoItem',
    props:{
        name:String,
        description:Object,
        icon:String
    }
}
</script>
<style>

</style>
