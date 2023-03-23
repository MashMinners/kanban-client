<template>
  <div id="app-header">
    <prime-toolbar>
      <template #start>
        <prime-button class="p-button-sm" icon="pi pi-arrow-right" @click="visible = true" />
      </template>
    </prime-toolbar>
  </div>
  <div id="app-content">
    <prime-card>
      <template #title>{{ sectionTitle }}</template>
      <template #content>
        <component
            :is="getComponent"
        />
      </template>
    </prime-card>
  </div>
  <div id="overlays">
    <div class="card flex justify-content-center">
      <prime-sidebar v-model:visible="visible">
        <prime-menu style="width:100%" :model="menuItems" />
      </prime-sidebar>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ControlPanelLayout",
  data() {
    return {
      visible: false
    }
  },
  computed: {
    getComponent(){
      return (this.$route.matched[0].components.default)
    },
    ...mapGetters({
      sectionTitle: 'cp/getSectionTitle',
      menuItems: 'cp/getMenuItems',
    })
  }
}
</script>

<style>
#app-content{
  padding: 20px;
  border: 1px solid #dee2e6;
  min-height: calc(100vh - 110px)
}
</style>