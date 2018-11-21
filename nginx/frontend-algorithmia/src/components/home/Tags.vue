<template>
    <div class="top-tags" >
                          <div ><label >Tags</label></div>

            <ul class="tag-list" >
                <li class="tag-item tag-pills" v-for="(tag, index) in tags" :key="index">
                    <router-link  class="algo-list-link" :to="'/search/?q='+tag">
                        <span >{{tag}}</span>
                    </router-link>
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    name: 'Tags',
    props:{
        tags:Array
    }
}
</script>



<style scoped>

</style>