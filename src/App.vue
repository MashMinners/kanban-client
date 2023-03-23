<template>
  <div id="wrapper">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import ApplicationLayout from "@/layouts/ApplicationLayout.vue";
import ControlPanelLayout from "@/layouts/ControlPanelLayout.vue";
export default {
  components: {
    ControlPanelLayout, ApplicationLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout +'Layout')
    }
  }
}
</script>
<style>

</style>
