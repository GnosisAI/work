<template>

                <li class="media category col-md-3" >
                    <router-link  class="algo-list-link" :to="'/cat/'+title">
                        <div class="media-left" ><img src="@/assets/images/categories/text-analysis.svg" class="media-object category-icon"
                            ></div>
                        <div class="media-body" >
                        <h4 class="media-heading" >{{title}}</h4>
                        <p >{{desc}}</p>
                        </div>
                    </router-link>
                </li>



</template>
<script>
export default {
    name: 'Item',
    props:{
        title:String,
        img:String,
        desc:String

    }
}
</script>
<style scoped>
.media-body{
    font-size: 500
}

</style>
