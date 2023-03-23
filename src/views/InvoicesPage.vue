<template>
  <div class="card">
    <prime-tab-view>
      <prime-tab-panel v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <p>{{ tab.content }}</p>
      </prime-tab-panel>
    </prime-tab-view>
  </div>
</template>

<script>
export default {
  name: "InvoicesPage",
  data() {
    return {
      tabs: [
        {
          title: 'Гинекология',
          content: 'Tab 1 Content'
        },
        {
          title: 'Хирургия',
          content: 'Tab 2 Content'
        },
        {
          title: 'Терапия',
          content: 'Tab 3 Content'
        },
        {
          title: 'Педиатрия',
          content: 'Tab 3 Content'
        },
        {
          title: 'Инфекционное',
          content: 'Tab 3 Content'
        }
      ]
    };
  }
}
</script>

<style scoped>

</style>