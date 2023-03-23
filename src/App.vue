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
#app-header{

}
#app-content{
  padding: 20px;
  border: 1px solid #dee2e6;
  min-height: calc(100vh - 110px)
}
#app-footer{
  background-color:blue;
}
.centered {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}
.centered-text{
  text-align: center;
}
.employee-photo{
  border: solid 1px;
  border-radius: 10px;
}
.employee-full-name {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}
.employee-position{
  text-align: center;
  font-size: 20px;
  font-style: italic;
}
.v-enter-active{
  transition: opacity 1s ease;
}
.v-leave-active{

}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
