<template lang="html">

  <section class="Console">
    <div class="code-toolbar"><label class="code-toolbar-label" >OUTPUT</label></div>
    <m-ace-editor  height="250px" v-model="output" :font-size="14" :line-height="1" mode="json"  :line-number="false" :highlight-active-line="false"  theme="dracula" ></m-ace-editor>
  </section>
</template>

<script lang="js">
import Vue from 'vue'
import MAceEditor from 'vue-m-ace-editor'
import 'brace/mode/json'
import 'brace/theme/dracula'
Vue.use(MAceEditor)

  export default  {

    name: 'OutputConsole',
    props: ['output'],
    data: {

    },
    methods: {

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

</style>
