<template lang="html">

  <section class="Console">
    <div class="code-toolbar"><label class="code-toolbar-label" >INPUT</label></div>
    <m-ace-editor  height="250px" v-model="inputs" :font-size="14" :line-height="1" mode="json"  :line-number="false" :highlight-active-line="false"  theme="dracula" ></m-ace-editor>
    <div class="text-center">
          <button v-on:click="clicked()" class="btn btn-accent btn-raised" >Run the algorithm</button>        

    </div>

  </section>

</template>

<script lang="js">
import Vue from 'vue'
import MAceEditor from 'vue-m-ace-editor'
import 'brace/mode/json'
import 'brace/theme/dracula'
Vue.use(MAceEditor)

  export default  {

    name: 'InputConsole',
    props: [],
    data: {
      inputs:{},
    },
    methods: {
      clicked(){
        this.$emit('submit',this.inputs)
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  m-ace-editor {
    width: 100%;
    background-color: #423e67;
}
.btn-accent {
    color: rgba(0,0,0,.87);
    background-color: #50ffbe;
    border-color: #50ffbe;
}
</style>
