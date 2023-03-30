<template>
  <div id="app-header">
    <prime-menubar :model="menu">
      <template #start>
        <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" height="40" class="mr-2" />
      </template>
      <template #end>
        <prime-input-text placeholder="Search" type="text" />
      </template>
    </prime-menubar>
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
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'Экспорт в Excel',
              icon: 'pi pi-fw pi-file-excel',
            },
            {
              separator: true
            },
            {
              label: 'Выход',
              icon: 'pi pi-fw pi-sign-out'
            }
          ],
        },
        {
          label: 'Накладные',
          icon: 'pi pi-fw pi-briefcase',
          items: [
            {
              label: 'Создать',
              icon: 'pi pi-fw pi-plus',
              to: '/app/invoices/new'
            },
            {
              label: 'Показать',
              icon: 'pi pi-fw pi-book',
              to: '/app/invoices'
            }
          ],
        },
        {
          label: 'Отчетность',
          icon: 'pi pi-fw pi-percentage',
          items: [
            {
              label: 'Своды',
              icon: 'pi pi-fw pi-file',
              to: '/app/reports/vaults'
            },
            {
              label: 'Графики',
              icon: 'pi pi-fw pi-chart-line',
              to: '/app/reports/charts'
            }
          ],
        },
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