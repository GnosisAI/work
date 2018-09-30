<template>
    <div class="list-group">
        <a href="link.url" v-for="(link, index) in links" :key="index" class="list-group-item ">
        <h4 class="list-group-item-heading" ><i :class="link.icon" v-bind:style="{ color: link.color, fontSize: 30 + 'px' }"> </i>
        {{link.name}}
        </h4>
        <p class="list-group-item-text">{{link.details}}</p>
        </a>
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
