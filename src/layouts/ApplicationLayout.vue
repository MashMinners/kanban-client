<template>
  <div id="app-header">

  </div>
  <div id="app-content">
    <component :is="getComponent"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ApplicationLayout",
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    }
  }
}
</script>

<style scoped>

</style>