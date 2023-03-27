<template>
  <div class="card">
    <prime-tab-view>
      <prime-tab-panel v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <prime-data-table :class="`p-datatable-sm`" :value="getInvoices" tableStyle="min-width: 50rem">
          <prime-column style="width: 10%" field="id" header="Идентификатор"></prime-column>
          <prime-column field="departmentName" header="Отделение"></prime-column>
          <prime-column header="Статус">
            <template #body="slotProps">
              <prime-tag :value="slotProps.data.statusDescription" :severity="getSeverity(slotProps.data)" />
            </template>
          </prime-column>
          <prime-column>
            <template #body>
              <prime-button class="p-button-sm" icon="pi pi-search" />
            </template>
          </prime-column>
        </prime-data-table>
      </prime-tab-panel>
    </prime-tab-view>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "InvoicesPage",
  data() {
    return {
      tabs: [
        {
          title: 'Гинекология',
          content: 'Tab 1 Content',
          data: 'data for tab 1'
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
  },
  methods: {
    getSeverity(invoice) {
      switch (invoice.statusId) {
        case 1:
          return 'success';

        case 2:
          return 'warning';

        default:
          return 'success';
      }
    }
  },
  computed:{
    ...mapGetters({
      getInvoices: "app/getInvoices"
    })
  }
}
</script>

<style scoped>

</style>