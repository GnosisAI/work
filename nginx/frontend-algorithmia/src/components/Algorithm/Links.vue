<template>
<div>
    <div class="list-group" v-for="(link, index) in links" :key="index">
        <a :href="link.url" class="list-group-item ">
        <h4 class="list-group-item-heading" ><i :class="link.icon" v-bind:style="{ color: link.color, fontSize: 30 + 'px' }"> </i>
        {{link.name}}
        </h4>
        <p class="list-group-item-text">{{link.details}}</p>
        </a>
    </div>
</div>
</template>
<script>
export default {
    name: 'links',
    props: {
        links:Array
    },
    components:{
      
    }
}

</script>
<style>

</style>
