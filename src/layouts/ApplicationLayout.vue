<template>
  <div id="app-header">
    <prime-toolbar>
      <template #start>
        <div class="card flex justify-content-center">
          <prime-button type="button" label="Меню" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
          <prime-menu ref="menu" id="overlay_menu" :model="menu" :popup="true" />
        </div>
      </template>
    </prime-toolbar>
  </div>
  <div id="app-content">
    <component :is="getComponent"/>
  </div>
  <div id="overlays">

  </div>
</template>

<script>

export default {
  name: "ApplicationLayout",
  data() {
    return {
      visible: false,
      menu: [
          {
            label: 'Главная',
            icon: 'pi pi-fw pi-plus',
            to: '/'
          },
        {
          label: 'Накладные',
          icon: 'pi pi-fw pi-plus',
          to: '/app/invoices'
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      }
    ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
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