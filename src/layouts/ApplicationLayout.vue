<template>
  <div id="app-header">
    <prime-toolbar>
      <template #start>
        <prime-button icon="pi pi-arrow-right" @click="visible = true" />
      </template>
    </prime-toolbar>
  </div>
  <div id="app-content">
    <component :is="getComponent"/>
  </div>
  <div id="overlays">
    <prime-sidebar v-model:visible="visible">
      <h2>Sidebar</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </prime-sidebar>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ApplicationLayout",
  data() {
    return {
      visible: false
    }
  },
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    }
  }
}
</script>

<style scoped>
#sidebar{
  float:left;
  min-width: 200px;
  background-color:red;
}
</style>